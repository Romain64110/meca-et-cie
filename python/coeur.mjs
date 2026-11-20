// Le cœur du travailleur Python de l'écran « Calcul » (fiche automatisme.md, §4.8 ; morceau 7), le même dans le
// navigateur (travailleur.mjs) et dans les tests (Pyodide sous Node). Il démarre Pyodide, enregistre le module
// JavaScript `_meca_js` que lisent le prélude et le module `meca`, puis exécute le code qu'on lui donne : les
// paquets qu'il importe se chargent d'eux-mêmes (NumPy, SciPy, SymPy, Matplotlib), ses sorties partent au fil de
// l'eau (le texte, les figures), et la trace d'une erreur ne garde que les lignes du code de l'élève.

/** Les messages de chargement de Pyodide, en français. */
function traduire(message) {
  const charge = /^Loading (.+)$/.exec(message);
  if (charge) return `Chargement de ${charge[1].replace(/, /g, ", ")}…`;
  const fini = /^Loaded (.+)$/.exec(message);
  if (fini) return `Chargé : ${fini[1]}.`;
  return message;
}

/** La trace d'une erreur Python, sans les lignes de Pyodide ; « File "<exec>", line 3 » devient « ligne 3 ». */
export function nettoyerTrace(message) {
  const lignes = String(message).replace(/\r/g, "").split("\n");
  const gardees = [];
  for (let i = 0; i < lignes.length; i++) {
    const l = lignes[i];
    const cadre = /^\s*File "([^"]*)", line (\d+)(?:, in (.*))?$/.exec(l);
    if (cadre) {
      const fichier = cadre[1];
      const interne = fichier.includes("/lib/python") || fichier.includes("_pyodide") || fichier.includes("pyodide/");
      // La ligne de code qui suit le cadre (et son soulignement ^^^) va avec lui.
      let j = i + 1;
      while (j < lignes.length && /^\s{4,}/.test(lignes[j]) && !/^\s*File "/.test(lignes[j])) j++;
      if (!interne) {
        gardees.push(fichier === "<exec>" ? `  ligne ${cadre[2]}${cadre[3] && cadre[3] !== "<module>" ? `, dans ${cadre[3]}` : ""}` : l);
        for (let k = i + 1; k < j; k++) gardees.push(lignes[k]);
      }
      i = j - 1;
      continue;
    }
    if (l.trim() === "") continue;
    gardees.push(l);
  }
  const texte = gardees.join("\n").replace(/^Traceback \(most recent call last\):\n?/, "Erreur, la trace :\n");
  return texte.trim();
}

/**
 * Démarre Python. `envoyer(message)` reçoit les sorties ; `demanderSimulation(demande)` rend une promesse du résultat
 * d'une simulation (le fil principal la calcule). Rend { version, executer, oublier }.
 */
export async function demarrer({ loadPyodide, indexURL, prelude, meca, envoyer, demanderSimulation }) {
  const etat = { courant: null, donnees: null, composants: null };
  const py = await loadPyodide({ indexURL });
  py.setStdout({ batched: (t) => envoyer({ type: "sortie", id: etat.courant, flux: "stdout", texte: `${t}\n` }) });
  py.setStderr({ batched: (t) => envoyer({ type: "sortie", id: etat.courant, flux: "stderr", texte: `${t}\n` }) });
  py.registerJsModule("_meca_js", {
    figure: (png) => envoyer({ type: "figure", id: etat.courant, png }),
    donnees: () => etat.donnees,
    composants: () => etat.composants,
    simuler: (demande) => demanderSimulation(JSON.parse(demande)),
  });
  py.FS.writeFile("/home/pyodide/meca.py", meca);
  await py.runPythonAsync(prelude);
  const executerPy = py.globals.get("_meca_executer");
  const oublierPy = py.globals.get("_meca_oublier");
  return {
    version: py.version,
    /** Exécute le code dans l'espace nommé (une console, un carnet). */
    async executer({ id, espace, code, donnees = null, composants = null }) {
      etat.courant = id;
      etat.donnees = donnees;
      etat.composants = composants;
      try {
        await py.loadPackagesFromImports(code, {
          messageCallback: (m) => envoyer({ type: "etat", id, texte: traduire(m) }),
          errorCallback: (m) => envoyer({ type: "etat", id, texte: m }),
        });
        if (/\bmatplotlib\b|\bpylab\b/.test(code)) await py.runPythonAsync("_meca_preparer_matplotlib()");
        const valeur = await executerPy(code, espace);
        envoyer({ type: "fin", id, ok: true, valeur: valeur ?? null });
      } catch (e) {
        envoyer({ type: "fin", id, ok: false, erreur: nettoyerTrace(e && e.message ? e.message : e) });
      }
    },
    /** Oublie les variables d'un espace (« Repartir de zéro »). */
    oublier(espace) {
      oublierPy(espace);
    },
  };
}
