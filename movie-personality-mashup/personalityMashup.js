function randomArrayElement(array) {
  return array[Math.floor(Math.random()*array.length)];
};

$("#mtnClick").click(function() {
  let obj1 = randomArrayElement(charList);
  let obj2 = randomArrayElement(charList);
  while (obj1.movie === obj2.movie) {
    obj1 = randomArrayElement(charList);
  }
  $("#leftCharPic").attr("src", obj1.image);
  $("#leftCharName").text(obj1.name);
  $("#leftCharMovie").text(obj1.movie);
  $("#rightCharPic").attr("src", obj2.image);
  $("#rightCharName").text(obj2.name);
  $("#rightCharMovie").text(obj2.movie);
})


let charList = [
  {
    name: "Michael Corleone",
    movie: "The Godfather",
    image: "https://m.media-amazon.com/images/M/MV5BMDhkYzhiYjEtMTQwYy00MTdmLTlkOTAtYTk1YmMyYmE5NDVmXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,657,1000_AL_.jpg"
  },
  {
    name: "Andy Dufresne",
    movie: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/M/MV5BZDYzM2RiNjYtMjcxYS00ZjZjLWI0YjYtOWM0YzQzODA4MzBlXkEyXkFqcGdeQXVyNTMyMDkwMTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
  },
  {
    name: "Ellis Boyd 'Red' Redding",
    movie: "The Shawshank Redemption",
    image: "https://m.media-amazon.com/images/M/MV5BYWU2YzY2NDktYzIwZS00YTNhLTg0MDItMTk1NjJhMzAwODk3XkEyXkFqcGdeQXVyNTMyMDkwMTE@._V1_SY1000_CR0,0,1461,1000_AL_.jpg"
  },
  {
    name: "Mia Wallace",
    movie: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ2MDk3ODAwMV5BMl5BanBnXkFtZTgwNzE4OTEwMjE@._V1_SY1000_CR0,0,1463,1000_AL_.jpg"
  },
  {
    name: "Vincent Vega",
    movie: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BYjlmNmRmZGMtMzRmNS00NTM4LTg0MjctM2ExNDZlN2ZhMTJjXkEyXkFqcGdeQXVyNjAwODA4Mw@@._V1_.jpg"
  },
  {
    name: "Jules Winnfield",
    movie: "Pulp Fiction",
    image: "https://m.media-amazon.com/images/M/MV5BMWIwOTZmMjYtNzE4Ny00MjM5LWI3OTYtMWVhM2EwYjNiYjQzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"
  },
  {
    name: "Princess Leia Organa",
    movie: "Star Wars Series",
    image: "https://m.media-amazon.com/images/M/MV5BMTc5Mjc1NTUwOV5BMl5BanBnXkFtZTcwNTkxMTIyMw@@._V1_SY1000_CR0,0,664,1000_AL_.jpg"
  },
  {
    name: "Han Solo",
    movie: "Star Wars Series",
    image: "https://m.media-amazon.com/images/M/MV5BMTg1NjY5MTAwMl5BMl5BanBnXkFtZTcwNjAyMTIyMw@@._V1_SY1000_CR0,0,1510,1000_AL_.jpg"
  },
  {
    name: "Luke Skywalker",
    movie: "Star Wars Series",
    image: "https://m.media-amazon.com/images/M/MV5BMjQ3NTM2Nzk2Ml5BMl5BanBnXkFtZTgwNDgyMzQyNDM@._V1_SY1000_CR0,0,1506,1000_AL_.jpg"
  },
  {
    name: "Lando Calrissian",
    movie: "Star Wars Series",
    image: "https://m.media-amazon.com/images/M/MV5BMjI3MjA0NTQwOV5BMl5BanBnXkFtZTcwMzcxMTY2Mw@@._V1_SY1000_CR0,0,655,1000_AL_.jpg"
  },
  {
    name: "Yoda",
    movie: "Star Wars Series",
    image: "https://m.media-amazon.com/images/M/MV5BYTYxMzJiZjctMjdjMy00YmYzLWFkODUtZmRhZWEyYTAxZmYzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"
  },
  {
    name: "Bruce Wayne",
    movie: "The Dark Knight Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTUwODg2MzU1OF5BMl5BanBnXkFtZTcwMjYzMTk2Mw@@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
  },
  {
    name: "Alfred",
    movie: "The Dark Knight Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BZDc1ODE2NWEtZTA0MS00OTc2LWI5ZmUtZThhNmYxZTdjYmZkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"
  },
  {
    name: "The Joker",
    movie: "The Dark Knight Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTU3MTg0ODM1MV5BMl5BanBnXkFtZTcwNDgzMTk2Mw@@._V1_SX1777_CR0,0,1777,753_AL_.jpg"
  },
  {
    name: "Karen Hill",
    movie: "Goodfellas",
    image: "https://m.media-amazon.com/images/M/MV5BMzk5NTkwMjQ4OV5BMl5BanBnXkFtZTcwNTEyNDY3Mw@@._V1_SY1000_CR0,0,1507,1000_AL_.jpg"
  },
  {
    name: "Henry Hill",
    movie: "Goodfellas",
    image: "https://m.media-amazon.com/images/M/MV5BNGI1MDI4OGUtZDFkZS00MjkzLThlODQtZGViZDM1N2JlNTM2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
  },
  {
    name: "Tommy DeVito",
    movie: "Goodfellas",
    image: "https://m.media-amazon.com/images/M/MV5BNGEzZDEwMTMtZWJhMS00NjA4LWE2ZWItN2YyMjg4ZjYzNmZmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_.jpg"
  },
  {
    name: "Tyler Durden",
    movie: "Fight Club",
    image: "https://m.media-amazon.com/images/M/MV5BNzM0NDZiZjItYzJhNi00ZTIwLTgzYWQtYmQ1MGFjN2U0MjYwXkEyXkFqcGdeQXVyNTU3Njk4NTU@._V1_SY1000_CR0,0,678,1000_AL_.jpg"
  },
  {
    name: "Trinity",
    movie: "The Matrix Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTAyMDc1MTU0MDBeQTJeQWpwZ15BbWU2MDI5MzU3Nw@@._V1_.jpg"
  },
  {
    name: "Neo",
    movie: "The Matrix Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTIwMDMzODgyOV5BMl5BanBnXkFtZTYwNjkzNTc3._V1_.jpg"
  },
  {
    name: "Morpheus",
    movie: "The Matrix Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTY3MDY1MzE1Nl5BMl5BanBnXkFtZTcwNzc5OTEzMw@@._V1_SY1000_CR0,0,656,1000_AL_.jpg"
  },
  {
    name: "Indiana Jones",
    movie: "Indiana Jones Series",
    image: "https://m.media-amazon.com/images/M/MV5BNTg1NDM0NTQ3NV5BMl5BanBnXkFtZTgwNDQ3MzY3MTE@._V1_SY1000_CR0,0,658,1000_AL_.jpg"
  },
  {
    name: "Marion",
    movie: "Indiana Jones Series",
    image: "https://m.media-amazon.com/images/M/MV5BOGNlMjg5ZTAtNTliZi00ZDAyLWIwODUtMDExNzIyNGY3Mzg1XkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_.jpg"
  },
  {
    name: "Captain Miller",
    movie: "Saving Private Ryan",
    image: "https://m.media-amazon.com/images/M/MV5BMTMwODMwNTY0N15BMl5BanBnXkFtZTcwODA5NzgwMw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    name: "Maximus",
    movie: "Gladiator",
    image: "https://m.media-amazon.com/images/M/MV5BMTM1NTA3MTkwOF5BMl5BanBnXkFtZTcwOTQ0NjcxNA@@._V1_SY1000_CR0,0,654,1000_AL_.jpg"
  },
  {
    name: "Lucilla",
    movie: "Gladiator",
    image: "https://m.media-amazon.com/images/M/MV5BMTMyNzA5ODAwOV5BMl5BanBnXkFtZTcwNDg0NjcxNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    name: "Dr. Emmett Brown",
    movie: "Back to the Future Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BNDViNDNkMmYtNzZiMC00ZmNlLTk3Y2EtYjBhNzBmZjg3NzM5XkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_.jpg"
  },
  {
    name: "Biff Tannen",
    movie: "Back to the Future Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMDU0ZjMxNTgtNTE5ZC00N2U1LWExNjEtNDBiMWRiMGI0ZDRhXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_SX1777_CR0,0,1777,967_AL_.jpg"
  },
  {
    name: "Clarice Starling",
    movie: "The Silence of the Lambs",
    image: "https://m.media-amazon.com/images/M/MV5BMDBiZDg4MDAtYWQ4NC00MDZjLTljMWItZjcxM2NkZGY5NGY1XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg"
  },
  {
    name: "Sam",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTgyMTQ4MTI3OV5BMl5BanBnXkFtZTcwMzgwMjk2Mw@@._V1_SX1492_CR0,0,1492,999_AL_.jpg"
  },
  {
    name: "Boromir",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMjAxNDM0OTc0Ml5BMl5BanBnXkFtZTcwMzIxMjk2Mw@@._V1_SY1000_CR0,0,1766,1000_AL_.jpg"
  },
  {
    name: "Legolas",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BOWU3ZGQ3MzUtYjE1OS00NzJiLWEwNTAtZDIxMGM3MTNkNzQ5XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg"
  },
  {
    name: "Pippin",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ3NTgxOTIxMV5BMl5BanBnXkFtZTcwNDkwMjk2Mw@@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
  },
  {
    name: "Pippin",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ3NTgxOTIxMV5BMl5BanBnXkFtZTcwNDkwMjk2Mw@@._V1_SY1000_CR0,0,1493,1000_AL_.jpg"
  },
  {
    name: "Saruman",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTAyMTY3MDY3ODBeQTJeQWpwZ15BbWU3MDAwMTI5NjM@._V1_SY1000_CR0,0,1485,1000_AL_.jpg"
  },
  {
    name: "Gandalf",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTY1OTE1NDY4NV5BMl5BanBnXkFtZTcwMzkwMjk2Mw@@._V1_SY1000_CR0,0,1501,1000_AL_.jpg"
  },
  {
    name: "Merry",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTI4ODY2NjMyNF5BMl5BanBnXkFtZTcwMjkwMjk2Mw@@._V1_SY1000_CR0,0,1479,1000_AL_.jpg"
  },
  {
    name: "Aragorn",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BNjhhOWM4MmMtYTMzYi00YTJjLTlmNzgtMDY1OTNlOGEwODllXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg"
  },
  {
    name: "Gimli",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTg2NDYxMzQ0Ml5BMl5BanBnXkFtZTcwNzExMjk2Mw@@._V1_SY1000_CR0,0,1497,1000_AL_.jpg"
  },
  {
    name: "Arwen",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BOGI5ZjYxZjEtNDI4My00ZWQ0LTkwOWYtYmM3NmY2ZGU3OTkzXkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_.jpg"
  },
  {
    name: "Frodo",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTYxNjY1ODQ3MF5BMl5BanBnXkFtZTcwMjgwMjk2Mw@@._V1_SY1000_CR0,0,1489,1000_AL_.jpg"
  },
  {
    name: "Eowyn",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMTYxOTc5MDI4N15BMl5BanBnXkFtZTcwMjI3NDk2Mw@@._V1_SX1777_CR0,0,1777,996_AL_.jpg"
  },
  {
    name: "Gollum",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BOWI2NDgwZDMtZDdjMi00MzhiLTljODYtMGRjMmVlMDQzNTA4XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg"
  },
  {
    name: "Faramir",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BMjE5NTMyNzUxOF5BMl5BanBnXkFtZTcwMTU3NDk2Mw@@._V1_SY1000_CR0,0,1505,1000_AL_.jpg"
  },
  {
    name: "Galadriel",
    movie: "Lord of the Rings Trilogy",
    image: "https://m.media-amazon.com/images/M/MV5BOGEzNjg3ZDctODk0ZC00ZGQzLTg5NzktNjJkNGU0ZTg5YjhlXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_SX1777_CR0,0,1777,740_AL_.jpg"
  },
  {
    name: "Edward I (Longshanks)",
    movie: "Braveheart",
    image: "https://m.media-amazon.com/images/M/MV5BYjk5ZGU0NGUtMjBiYi00ZWI4LWI1NjgtZmQwN2MxZGQ4OWQ0XkEyXkFqcGdeQXVyNDk2MjQ4Mzk@._V1_.jpg"
  },
  {
    name: "Princess Isabelle",
    movie: "Braveheart",
    image: "https://m.media-amazon.com/images/M/MV5BYmEzNGI2OWItMzA4MS00ZTRkLThjYmQtNzdjZDU3ZGZlODY5XkEyXkFqcGdeQXVyMTI3MDk3MzQ@._V1_.jpg"
  },
  {
    name: "William Wallace",
    movie: "Braveheart",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ5NTA5MDE4NV5BMl5BanBnXkFtZTgwNzAyNzU5MTE@._V1_SY1000_CR0,0,648,1000_AL_.jpg"
  },
  {
    name: "Cobb",
    movie: "Inception",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ3NTU4MjA2Ml5BMl5BanBnXkFtZTcwNjQ0OTk1Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
  },
  {
    name: "Mal",
    movie: "Inception",
    image: "https://m.media-amazon.com/images/M/MV5BMTMzMDEyMzg0NF5BMl5BanBnXkFtZTcwNDc0OTk1Mw@@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
  },
  {
    name: "Somerset",
    movie: "Seven",
    image: "https://m.media-amazon.com/images/M/MV5BMTI5MTUxNDI2NV5BMl5BanBnXkFtZTcwOTQzNTIwNA@@._V1_SX1471_CR0,0,1471,999_AL_.jpg"
  },
  {
    name: "Mills",
    movie: "Seven",
    image: "https://m.media-amazon.com/images/M/MV5BMTMyNDc1NDMxNF5BMl5BanBnXkFtZTcwMTEzNzY3Mw@@._V1_SY1000_CR0,0,1477,1000_AL_.jpg"
  },
  {
    name: "John Doe",
    movie: "Seven",
    image: "https://m.media-amazon.com/images/M/MV5BZTdlYzA3MjEtZjlmOC00MWM2LTkzYWYtNDg5ODJkY2VkOGY5XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg"
  },
  {
    name: "Grant",
    movie: "Jurassic Park",
    image: "https://m.media-amazon.com/images/M/MV5BMjE5NDMzNDMtOGRlNi00OWQ1LWI4YTctODM5NjE3MjI2OTkyXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_.jpg"
  },
  {
    name: "Tim",
    movie: "Jurassic Park",
    image: "https://m.media-amazon.com/images/M/MV5BMTY1NTMwNTUwMV5BMl5BanBnXkFtZTcwMTQ2NTgwMw@@._V1_SY1000_CR0,0,801,1000_AL_.jpg"
  },
  {
    name: "Lex",
    movie: "Jurassic Park",
    image: "https://m.media-amazon.com/images/M/MV5BMTI4MDQ0ODI1N15BMl5BanBnXkFtZTcwMTk2NTgwMw@@._V1_SY1000_CR0,0,779,1000_AL_.jpg"
  },
  {
    name: "Malcolm",
    movie: "Jurassic Park",
    image: "https://m.media-amazon.com/images/M/MV5BMjMzOTAxMDA4NF5BMl5BanBnXkFtZTgwMjgyOTIwMjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
  },
  {
    name: "Ellie",
    movie: "Jurassic Park",
    image: "https://m.media-amazon.com/images/M/MV5BNjkzNDA1MjU0N15BMl5BanBnXkFtZTcwODE2NTgwMw@@._V1_SY1000_CR0,0,977,1000_AL_.jpg"
  },
  {
    name: "Forrest Gump",
    movie: "Forrest Gump",
    image: "https://m.media-amazon.com/images/M/MV5BYjIxNTk4MTgtMTI1ZC00YzVhLWIwZTAtNzlhMzc0N2I3ZWVmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SY1000_CR0,0,855,1000_AL_.jpg"
  },
  {
    name: "Jenny Curran",
    movie: "Forrest Gump",
    image: "https://m.media-amazon.com/images/M/MV5BNjlhNmUxODQtODM1My00ZDIzLTllZDItZGJmMGJkMmE2ZmY5XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_SX1777_CR0,0,1777,734_AL_.jpg"
  },
  {
    name: "Bubba Blue",
    movie: "Forrest Gump",
    image: "https://m.media-amazon.com/images/M/MV5BNjBlYTk4MDItZDU1OC00ODA4LTlmMjQtZWJiOGMxODFhM2E5XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SY1000_CR0,0,680,1000_AL_.jpg"
  },
  {
    name: "Lt. Dan Taylor",
    movie: "Forrest Gump",
    image: "https://m.media-amazon.com/images/M/MV5BMjEzNjI3OTQwN15BMl5BanBnXkFtZTYwNzcxMzg2._V1_.jpg"
  },
  {
    name: "Westley",
    movie: "The Princess Bride",
    image: "https://m.media-amazon.com/images/M/MV5BYmI3MzA1ODgtODYyZi00OTBjLTljYTItOTAyNjUwOWM3OGY5XkEyXkFqcGdeQXVyMjAyODE5MDg@._V1_.jpg"
  },
  {
    name: "Inigo Montoya",
    movie: "The Princess Bride",
    image: "https://m.media-amazon.com/images/M/MV5BNmRmMDM2NmYtZTA5Yi00NTlhLTlkMjYtYWM1NTM3NTdjNjY0XkEyXkFqcGdeQXVyODQ4NDAyNzc@._V1_SX1777_CR0,0,1777,962_AL_.jpg"
  },
  {
    name: "Vizzini",
    movie: "The Princess Bride",
    image: "https://m.media-amazon.com/images/M/MV5BNzU4MWEwZDUtNTk1NC00Y2UxLTkzNTctNGE5N2U1ODBlZjFkXkEyXkFqcGdeQXVyODQ4NDAyNzc@._V1_SX1777_CR0,0,1777,962_AL_.jpg"
  },
  {
    name: "The Princess Bride",
    movie: "The Princess Bride",
    image: "https://m.media-amazon.com/images/M/MV5BN2RiY2YwZjctMDQ4OC00YTkzLThjYmMtMzcxMWJjZGI1MDJjXkEyXkFqcGdeQXVyODQ4NDAyNzc@._V1_SX1777_CR0,0,1777,962_AL_.jpg"
  }
];

// {
//   name: "Captain Miller",
//   movie: "Saving Private Ryan",
//
// },
