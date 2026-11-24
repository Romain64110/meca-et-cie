// Le travailleur du calcul des éléments finis (phase 8) : il charge le module une fois, calcule chaque étude
// qu'on lui donne et renvoie ses résultats ; l'avancement part au fil du calcul. La page le termine pour
// arrêter un calcul.

import { calculer, charger } from "./coeur.mjs";

let module = null;
let dernier = 0;

self.onmessage = async (evenement) => {
  const { id, entree, url } = evenement.data;
  try {
    if (!module) {
      const reponse = await fetch(url);
      if (!reponse.ok) throw new Error(`Le module de calcul ne se charge pas (${reponse.status}).`);
      module = await charger(await reponse.arrayBuffer(), (etape, valeur) => {
        // Au plus une vingtaine de messages par seconde : l'écran n'a pas besoin de plus.
        const t = performance.now();
        if (etape !== 4 || t - dernier > 50) {
          dernier = t;
          self.postMessage({ id, type: "progres", etape, valeur });
        }
      });
    }
    const resultat = calculer(module, entree);
    const transferts = resultat.code === 0 ? [resultat.noeuds.buffer, resultat.deplacements.buffer, resultat.vonMises.buffer, resultat.contraintes.buffer, resultat.faces.buffer, resultat.resume.buffer] : [];
    self.postMessage({ id, type: "fin", resultat }, transferts);
  } catch (erreur) {
    self.postMessage({ id, type: "fin", resultat: { code: 9, message: String(erreur && erreur.message ? erreur.message : erreur) } });
  }
};
