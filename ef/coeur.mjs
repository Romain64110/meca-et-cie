// Le cœur du calcul des éléments finis, partagé par le travailleur du navigateur (travailleur.mjs) et les tests
// (Node) : il ouvre le module WebAssembly (meca_ef.wasm, compilé depuis rust/ef/), lui donne l'entrée rangée à
// plat et lit ses résultats dans sa mémoire.

/** Ouvre le module ; `progres(etape, valeur)` reçoit l'avancement pendant le calcul. */
export async function charger(octets, progres) {
  const imports = {
    env: {
      ef_maintenant: () => performance.now(),
      ef_progres: (etape, valeur) => {
        if (progres) progres(etape, valeur);
      },
    },
  };
  const { instance } = await WebAssembly.instantiate(octets, imports);
  return instance.exports;
}

const MESSAGES = {
  1: "L'étude ne se lit pas : une valeur manque ou sort des limites.",
  2: "Le maillage échoue sur ce contour.",
  3: "Un élément du maillage est retourné.",
  4: "La pièce n'est pas tenue : un mouvement reste libre.",
  5: "Le solveur ne converge pas.",
};

/** Calcule l'étude rangée à plat dans `entree` (Float64Array). */
export function calculer(ex, entree) {
  const p = ex.ef_entree(entree.length);
  new Float64Array(ex.memory.buffer, p, entree.length).set(entree);
  const debut = performance.now();
  const code = ex.ef_calculer();
  const duree = performance.now() - debut;
  // La mémoire a pu grandir pendant le calcul : chaque vue se refait après.
  const lire = (ptr, n, Type) => new Type(ex.memory.buffer, ptr, n).slice();
  if (code !== 0) {
    const octets = lire(ex.ef_message(), ex.ef_taille_message(), Uint8Array);
    const message = new TextDecoder().decode(octets);
    const mode = code === 4 ? Array.from(lire(ex.ef_mode_libre(), 6, Float64Array)) : null;
    return { code, message: MESSAGES[code] ?? message, detail: message, mode, duree };
  }
  return {
    code: 0,
    duree,
    noeuds: lire(ex.ef_noeuds(), ex.ef_taille_noeuds(), Float64Array),
    deplacements: lire(ex.ef_deplacements(), ex.ef_taille_deplacements(), Float64Array),
    vonMises: lire(ex.ef_von_mises(), ex.ef_taille_von_mises(), Float64Array),
    contraintes: lire(ex.ef_contraintes(), ex.ef_taille_contraintes(), Float64Array),
    faces: lire(ex.ef_faces(), ex.ef_taille_faces(), Uint32Array),
    resume: lire(ex.ef_resume(), ex.ef_taille_resume(), Float64Array),
  };
}
