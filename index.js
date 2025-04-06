import { readFileSync } from 'fs';

const test = readFileSync('test.txt', 'utf8');
const final = readFileSync('final.txt', 'utf8');

// on va utiliser les données du test pour calculer le nombre de poissons qu'il y aura au bout de 80 jours
// Chaque nombre représente un Poisson-lanterne (un petit poisson qui brille dans la nuit).
//La valeur du nombre représente le nombre de jours qu'il reste avant qu'il ait un enfant (et donc crée un nouveau poisson-lanterne).
//Ce nouveau poisson commencera sa vie avec la valeur de 8 jours avant d'avoir un bébé.

const part1 = (data) => {
  const lines = data.split(',');
  return lines
}

console.log({'Part 1:': part1(test)});

/* console.log({ test, final }); */