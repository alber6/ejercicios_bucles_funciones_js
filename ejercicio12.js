// Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no. Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' },
    { name: 'Jean', power: 'telekinesis' },
  ];

const samePowers = []
let encontrado = false;
function findMutantByPower(mutants, power) {
  for(const mutant of mutants){
    if(power == mutant.power){
      console.log("Poder encontrado");
      samePowers.push(mutant);
      console.log(samePowers);
      encontrado = true;
    }
  }
  if(!encontrado){
    console.log("Poder no encontrado.");
  }
}
findMutantByPower(mutants,'telek')