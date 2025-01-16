// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.Utiliza bucles para estructurar este objeto e imprime el resultado por consola.

const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
// objeto = {metal: [enter sandman]}
const tracksOrganise = {};
lisRock = [];
lisMetal = [];
lisPop = [];
lisCountry = [];
lisGrunge = [];
for (const track of tracks){
  if (track.genre == "Rock"){
    lisRock.push(track.title);
    tracksOrganise.Rock = lisRock;
  } else if(track.genre == "Metal"){
    lisMetal.push(track.title)
    tracksOrganise.Metal = lisMetal;
  } else if (track.genre == "Pop"){
    lisPop.push(track.title)
    tracksOrganise.Pop = lisPop;
  } else if (track.genre == "Country"){
    lisCountry.push(track.title)
    tracksOrganise.Country = lisCountry;
  } else if (track.genre == "Grunge"){
    lisGrunge.push(track.title)
    tracksOrganise.Grunge = lisGrunge;
  }
}
console.log(tracksOrganise);
