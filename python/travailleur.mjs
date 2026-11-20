// Le travailleur Python de l'écran « Calcul » (fiche automatisme.md, §4.8 ; morceau 7) : Pyodide tourne ici, à
// côté de la page, pour que la page réponde pendant un calcul long ; « Arrêter » termine le travailleur. Pyodide est
// hébergé avec le site, dans ../pyodide/, et ne se charge qu'à la première ouverture de la console.
//
// Messages reçus : { type: "init", prelude, meca } ; { type: "executer", id, espace, code, donnees, composants } ;
// { type: "oublier", espace } ; { type: "simulation", demande, resultat }.
// Messages envoyés : { type: "etat", texte } ; { type: "pret", version } ; { type: "echec", erreur } ;
// { type: "sortie", id, flux, texte } ; { type: "figure", id, png } ; { type: "fin", id, ok, valeur | erreur } ;
// { type: "simuler", id, demande, contenu }.

import { demarrer } from "./coeur.mjs";

const envoyer = (m) => self.postMessage(m);
const enAttente = new Map();
let prochaineDemande = 1;
let python = null;
let courant = null;
const file = [];
let occupe = false;

function demanderSimulation(contenu) {
  const demande = prochaineDemande++;
  envoyer({ type: "simuler", id: courant, demande, contenu });
  return new Promise((resoudre) => enAttente.set(demande, resoudre));
}

async function suivant() {
  if (occupe || !python || !file.length) return;
  occupe = true;
  const m = file.shift();
  courant = m.id;
  await python.executer(m);
  occupe = false;
  suivant();
}

self.onmessage = async (e) => {
  const m = e.data;
  if (m.type === "init") {
    try {
      envoyer({ type: "etat", texte: "Python démarre (14 Mo la première fois)…" });
      const { loadPyodide } = await import(new URL("../pyodide/pyodide.mjs", import.meta.url).href);
      python = await demarrer({ loadPyodide, indexURL: new URL("../pyodide/", import.meta.url).href, prelude: m.prelude, meca: m.meca, envoyer, demanderSimulation });
      envoyer({ type: "pret", version: python.version });
      suivant();
    } catch (erreur) {
      envoyer({ type: "echec", erreur: String(erreur && erreur.message ? erreur.message : erreur) });
    }
  } else if (m.type === "executer") {
    file.push(m);
    suivant();
  } else if (m.type === "oublier") {
    if (python) python.oublier(m.espace);
  } else if (m.type === "simulation") {
    const resoudre = enAttente.get(m.demande);
    enAttente.delete(m.demande);
    if (resoudre) resoudre(m.resultat);
  }
};
