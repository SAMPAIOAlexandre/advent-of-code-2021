import { readFileSync } from 'fs';

const test = readFileSync('test.txt', 'utf8');
const final = readFileSync('final.txt', 'utf8');

// on va utiliser les données du test pour calculer le nombre de poissons qu'il y aura au bout de 80 jours
// Chaque nombre représente un Poisson-lanterne (un petit poisson qui brille dans la nuit).
//La valeur du nombre représente le nombre de jours qu'il reste avant qu'il ait un enfant (et donc crée un nouveau poisson-lanterne).
//Ce nouveau poisson commencera sa vie avec la valeur de 8 jours avant d'avoir un bébé.


// PSEUDO CODE 
// Pour chaque jour jusqu'à 80 :
//     Créer un nouveau tableau temporaire pour les poissons du jour suivant
//     Pour chaque poisson dans la liste actuelle :
//         Si sa valeur est 0 :
//             - Ajouter un poisson avec valeur 6 (le parent qui redémarre)
//             - Ajouter un poisson avec valeur 8 (le nouveau bébé)




const part1 = (data) => {
  let fishes = data.split(',').map(Number);
  for (let day = 1; day <= 80; day++) {
    const newFish = [];
    for (let fish of fishes) {
      if (fish === 0) {
        newFish.push(6);
        newFish.push(8);
      } else {
        newFish.push(fish - 1)
      }
    }
    fishes = newFish;
  }
  return fishes.length
}

console.log({'Part 1:': part1(final)});

/* console.log({ test, final }); */