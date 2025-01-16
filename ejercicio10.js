// Desarrolla una función que reciba un país por parámetro y devuelva su capital.
// Utiliza un objeto para almacenar los países y sus capitales.
// La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
const countries = {};
let encontrado = false;
function getCapital(country) {
  for(key in capitals){
    if(country == key){
      countries[key] = capitals[key];
      console.log(countries);
      encontrado = true;
    }
  }
  if(!encontrado){
    console.log("No encontrado dentro del array.");
  }
}
getCapital("Spain")
