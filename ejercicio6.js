// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
// Utiliza bucles para lograrlo e imprime el objeto final por consola

const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];

// {decadas: [pelicula1, pelicula2, pelicula3]}
// 1970 -1980 ------ 1980 1990 ------ 1990 - 2000 ------ 2000 - 2010 ------ 2010 - 2020

const decadas = {};
let lis2010 = []
let lis2000 = []
let lis1990 = []
let lis1980 = []
let lis1970 = []
for (movie of starWarsMovies){
  if (movie.releaseYear > 1970 && movie.releaseYear < 1980){
    lis1970.push(movie.title);
    decadas.decada1970 = lis1970;
  } else if(movie.releaseYear > 1980 && movie.releaseYear < 1990){
    lis1980.push(movie.title);
    decadas.decada1980 = lis1980;
  } else if(movie.releaseYear > 1990 && movie.releaseYear < 2000){
    lis1990.push(movie.title);
    decadas.decada1990 = lis1990;
  } else if(movie.releaseYear > 2000 && movie.releaseYear < 2010){
    lis2000.push(movie.title);
    decadas.decada2000 = lis2000;
  } else if(movie.releaseYear > 2010 && movie.releaseYear < 2020){
    lis2010.push(movie.title);
    decadas.decada2010 = lis2010;
  }
}
console.log(decadas);


