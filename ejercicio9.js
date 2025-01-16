// Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.Utiliza este array para probar tu función.

const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
let oldYear = xMen[0].year;

function findOldestXMen(xMen) {
  for(const mutant of xMen){
    if(mutant.year <= oldYear){
      oldYear = mutant.year;
    }
  }
  //uso del metodo filter() crea un nuevo array que contiene solo los elementos que cumplan una condición específica
  const oldXmen = xMen.filter(
  // se coge los elementos del array xMen que tengan el año igual al año más antiguo (oldyear) que se ha obtenido antes
  superHero => superHero.year === oldYear
  )
  console.log(oldXmen);
}
findOldestXMen(xMen)
