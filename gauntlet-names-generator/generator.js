var order = 3;
var beginnings = [];
var ngrams = {};

function rando(arr) {
  for (var j = 0; j < arr.length; j++) {
    var choice = arr[j];
    for (var i = 0; i <= choice.length - order; i++) {
      var gram = choice.substring(i, i + order);
      if (i === 0) {
        beginnings.push(gram);
      }

      if (!ngrams[gram]) {
        ngrams[gram] = [];
      }
      ngrams[gram].push(choice.charAt(i + order));
    }
  }
};

var clicky = document.getElementById("clicky");
clicky.addEventListener("click", function() {
  var userInput = $("#box");
  var txt = userInput.val();
  var txtFirstArray = nameArray.join(" ");
  var txtNoPunc = txtFirstArray.replace(/[^\w\s]|_/g, " ").replace(/\d+/g, " ").replace(/\s+/g, " ");
  var txtArray = txtNoPunc.split(" ");
  rando(txtArray);
  if ($("li").length > 0) {
    $("ul").html('');
    txt = userInput.val();
  }
  for (var i = 0; i < 20; i++) {
    $("ul").append("<li>" + markovIt() + " " + markovIt() + "</li>");
  }
  txtArray = [];
  beginnings = [];
});


function randomArrayElement(array) {
  return array[Math.floor(Math.random()*array.length)];
};

function markovIt() {
  var start = randomArrayElement(beginnings);
  var result = start;
  for (var i = 0; i < 6; i++) {
    var maybe = ngrams[start];
    var next = randomArrayElement(maybe);
    result += next;
    start = result.substring(result.length-order, result.length);
  }
  return result;
};


var nameArray = [
  "Aaron",
  "Jesse Abelman",
  "Rob Abrazado",
  "Quentin Acord",
  "Joaquin Aguirrezabalaga",
  "Vendevogel Alain",
  "Alan",
  "John Alexander",
  "Zach Alexander",
  "Brendan Allison",
  "Bryen Alperin",
  "Erik Amundsen",
  "Gary Anastasio",
  "Dustin Andrews",
  "Vincent Arebalo",
  "John Atwood",
  "Tom Axon",
  "Chad Bale",
  "Noah Ban",
  "BansheeGames",
  "Michael Barford",
  "Greg Barnsdale",
  "Jacob Bates",
  "Joe Beason",
  "Scott Beattie",
  "David Beaudoin",
  "Dan Behlings",
  "Mathias Belger",
  "Nathaniel Benton",
  "Aaron Berger",
  "Hungry",
  "Matt Bevilacqua",
  "Al Billings",
  "Ron Bishop",
  "Quinn Bleiler",
  "Boni",
  "David Bowers",
  "Sophia Brandt",
  "Patrick Brannick",
  "Brett",
  "Darren Brockes",
  "Stephanie Bryant",
  "Mike Burnett",
  "Agatha",
  "Zach Cameron",
  "John Campbell",
  "Freya Campbell",
  "Mike Carlson",
  "Andi Carrison",
  "Bill Carter",
  "Matthew Caulder",
  "Mark Causey",
  "Alexander Chambers",
  "Bay Chang",
  "Jeremy Christian",
  "Brendan Clougherty",
  "Ewen Cluny",
  "Jeffery Collyer",
  "Garrett Colon",
  "Edouard Contesse",
  "Robert Corr",
  "Malcolm Coull",
  "Yoshi Creelman",
  "Jim Crocker",
  "Ian Crockett",
  "Cubano",
  "Jason D\’Angelo",
  "Love Dahlgren",
  "Stentor Danielson",
  "Kirt Dankmyer",
  "Tom Davies",
  "Will Davies",
  "Alex Davis",
  "Jim Davis",
  "Kristen Davis-Owen",
  "Joshua DeGagne",
  "Philippe Delmott",
  "Tim Denee",
  "Jacob Densford",
  "Rob Deobald",
  "Aaron DeRosa",
  "Steven desJardins",
  "Mark DesLauriers",
  "Simone Di Rubbo",
  "Mark Diaz Truman",
  "Jeffrey Dieterle",
  "Stuart Dollar",
  "Ian Donald",
  "David Dorward",
  "Matt Doughty",
  "Tim Dreier",
  "Stefan Droste",
  "Bryant Durrell",
  "Mark Durrheim",
  "Herman Duyker",
  "Eli Eaton",
  "Vincent Eaton-Valencia",
  "Harald Eckmüller",
  "Edchuk",
  "Paul Edson",
  "Matthew Egger",
  "Kurt Ellison",
  "Norm Elvin",
  "Tor Erickson",
  "Jennifer Erixon",
  "Charlie Etheridge-Nunn",
  "Richard Evans",
  "Andy Evans",
  "Mitchell Evans",
  "Colin Fahrion",
  "Joshua Faller",
  "Luis Farebrother",
  "Declan Feeney",
  "Mark Fenlon",
  "Scott Field",
  "Andrew Fish",
  "Asbjørn Flø",
  "Adam Flynn",
  "Kevin Flynn",
  "Justin Ford",
  "Daniel Fowler",
  "Josh Fox",
  "Lowell Francis",
  "Brian Frank",
  "Michael Friese",
  "Mirko Froehlich",
  "Furst77",
  "Tomer",
  "Hayley",
  "Nicolás Garcia Lanza",
  "Zachary Garth",
  "Josh Gary",
  "Charles Gatz",
  "Gordon Gauchat",
  "Rowan Gavin",
  "Gregory Gelder",
  "Michele Gelli",
  "Walter German",
  "Edgar Gonzalez",
  "Luke Green",
  "Christopher Grey",
  "Greyhoof",
  "Derek Grimm",
  "Matthew Gushta",
  "Lloyd Gyan",
  "Hardman",
  "Robert Harper",
  "Michael Harrel",
  "Patrick Harris",
  "Bethany Harvey",
  "Andrew Hauge",
  "Matt Hayles",
  "Rob Hebert",
  "Blaise Hebert",
  "James Heide",
  "Michael Heiligenstein",
  "Vee Hendro",
  "Edward Hickcox",
  "Andrew Hicks",
  "Alyssa Hillen",
  "Kyle Hodnett",
  "Danny Hood",
  "Nicholas Hopkins",
  "Logan Howard",
  "Cecil Howe",
  "Stephen Humphreys",
  "Sid Icarus",
  "James Iles",
  "Spencer Isdahl",
  "Zachary Isom",
  "Adam Jacobson",
  "Joshua Jarett",
  "Johan Jaurin",
  "David Jay",
  "Scott Jenks",
  "Tim Jensen",
  "Jeremy",
  "Fada Joe",
  "Anders Jonsson",
  "Justin",
  "Stephen Karnes",
  "Kassidy",
  "Jay Kemberling",
  "Erin Kenny",
  "Joshua Kershaw",
  "Lucian Khan",
  "Colin Kierans",
  "Tomasz Kijas",
  "Andy Kitkowski",
  "Matthew Klein",
  "Charles Klempay",
  "Julian Kluge",
  "Renee Knipe",
  "Ryan Knott",
  "Patrick Knowles",
  "Jonathan Konig",
  "Ilmari Korpi",
  "Ben Kramer",
  "Taejas Kudva",
  "Eli Kurtz",
  "Daniel Kusan",
  "Marcy",
  "Larry",
  "Taylor LaBresh",
  "Maxime Lacoste",
  "David LaFreniere",
  "Simon Landreville",
  "Jesse Larimer",
  "Martin Larsson",
  "Rolan Le",
  "Leary",
  "Leckie",
  "Petri Leinonen",
  "Jon Lemich",
  "Arthur Lender",
  "Rubin Levinson",
  "David Lewis",
  "Daniel Lewis",
  "Melissa Lewis-Gentry",
  "Jason Li",
  "Lichauco",
  "Shane Liebling",
  "Arnulph Lisieux",
  "David Lombardo",
  "Tyler Lominack",
  "Benjamin Longcor",
  "Eduardo Lorente",
  "Bryan Lotz",
  "Kevin Lovecraft",
  "Benjamin Loy",
  "Ludo",
  "Ryan Macklin",
  "Rory MacLeod",
  "Kira Magrann",
  "Jeremy Mahr",
  "Steve Mains",
  "Eric Maloof",
  "Josh Mannon",
  "Volker Mantel",
  "Volker Mantel",
  "Manu",
  "Michael Marciano",
  "Manu Marron",
  "Mike Martens",
  "Keith Martin",
  "Michelle Matsutani",
  "Colin Matter",
  "Mikel Matthews",
  "Christine Maunsell",
  "Andrew Mayer",
  "Julian McAllister",
  "Micki Bradley McBride",
  "Donogh McCarthy",
  "Stephen McClanahan",
  "Lee McDaniel",
  "Tom McGrenery",
  "Anthony McIntosh",
  "Casey McKenzie",
  "Alex McManamon",
  "Lauren McManamon",
  "Ryan McNeil",
  "Christo Meid",
  "Daniel Mejia-Onat",
  "Nery Mejicano",
  "Alex Meltsner",
  "Michael Mendoza",
  "Darius Meskauskas",
  "Corey Metcalfe",
  "Sophie Middis",
  "Kristopher Miller",
  "Jason Mills",
  "Ainar Miyata",
  "Steve Moore",
  "Christopher Moore",
  "Matt Morgan",
  "Jim Morris",
  "Harry Morris",
  "Jim Morrison",
  "Elias Mulhall",
  "Alex Murphy",
  "Brent Naylor",
  "Tiphanie Neely",
  "Phillip Neitzel",
  "Keith Nelson",
  "Adam Ness",
  "Richard Newby",
  "Ben Newland",
  "Joshua Newman",
  "Chris Newton",
  "Simon Ng",
  "Jessica Niles",
  "Sean Nittner",
  "Robert Nolan",
  "Adam Nordin",
  "Candida Norwood",
  "Patrick O\’Leary",
  "Tyler Oden",
  "Okokok",
  "Andy Olson",
  "Oporst",
  "Johannes Oppermann",
  "Oriflamme",
  "Justin Ortega",
  "Ray Otus",
  "Jen Overstreet",
  "James Page",
  "Mike Panciera",
  "Thorsten Panknin",
  "Will Patterson",
  "Chris Paul",
  "Paul",
  "Ivan Pawle",
  "Wayne Peacock",
  "Pedro Pereira",
  "Patrick Perkins",
  "Jonathan Perrine",
  "Jan Petrykowski",
  "Philippe",
  "Jason Pitre",
  "Adrian Polegre",
  "Michael Prescott",
  "Lu Quade",
  "Mike Quintanilla",
  "Robert Quintero",
  "Michael Raichelson",
  "Catherine Ramen",
  "Ary Ramsey",
  "Nicholas Ramsey",
  "Johannes Rasmussen",
  "Tommy Rayburn",
  "Frank Reding",
  "Gerrit Reininghaus",
  "Peter Reitz",
  "David Rezak",
  "Marc-Alexandre Rheault",
  "Sam Richardson",
  "Sarah Richardson",
  "Josh Riggins",
  "Ferrell Riley",
  "Tyler Rithmiller",
  "David Rivas",
  "Maria Rivera",
  "John Roberts",
  "James Robertson",
  "Richard Rogers",
  "John Rogers",
  "Clarity Rose",
  "Gerald Rose",
  "Jesse Ross",
  "Dylan Ross",
  "David Rothfeder",
  "Richard Ruane","",
  "Russell",
  "Robert Ruthven",
  "James Ryan",
  "Blake Ryan",
  "Blake Ryan",
  "Ramanan",
  "Phillip Sacramento",
  "Jorge Salazar",
  "Marius Salsbury",
  "Greg Sanders",
  "Samuel Sarjant",
  "Sasha",
  "Ray Sawyer",
  "Ellen Saxon",
  "Mendel Schmiedekamp",
  "Aniket Schneider",
  "Mick Schouten",
  "Martin Schwartz",
  "Jeremy Scott",
  "Victor Segell",
  "Glenn Seiler",
  "Seth",
  "Sherman Sheftall",
  "Rach Shelkey",
  "Dan Shimizu",
  "Siddharta",
  "Asher Silberman",
  "Aslan Silva",
  "Rustin Simons",
  "Fraser Simons",
  "Kyle Simons",
  "Jason Slanga",
  "Samuel Slocum",
  "Matt Smith",
  "Sean Smith",
  "Scott Smith",
  "Oliver Smock",
  "Smolghost",
  "Chris Sniezak",
  "Zak Soeria-Atmadja",
  "Lonnie Spangler",
  "Paul Spraget",
  "Enoch Starnes",
  "Maciej Starzycki",
  "Lennart Steinke",
  "Keith Stetson",
  "Steven",
  "Noah Stevens",
  "Erica Stevenson",
  "Johannes Stock",
  "Slade Stolar",
  "Jeff Stolarcyk",
  "Christopher Stone-Bush",
  "Jeremy Strandberg",
  "Paul Strawser",
  "Matt Stuart",
  "James Stuart",
  "Dwayne Summerfield",
  "Christian Svalander",
  "Jason Swank",
  "James Sweetland",
  "Alexander",
  "John Taber",
  "Andrew Tapp",
  "Aaron Taylor",
  "Stephen Tew",
  "Imani Thomas",
  "Ron Thomas",
  "Kenneth Thomas",
  "Christopher Thompson",
  "Kyle Thompson",
  "Owen Thompson",
  "Jason Tocci",
  "Eadwin Tomlinson",
  "Evan Torner",
  "Tina Trillitzch",
  "Mark Tygart",
  "Mikael Tysver",
  "Ivan Vaghi",
  "Mark Valente",
  "Max Vanderheyden",
  "Adam Vass",
  "Phil Vecchione",
  "Charlie Vick",
  "Vieira",
  "Brian Vo",
  "Sabine Voelkel",
  "Shervyn Von Hoerl",
  "Gerwyn Walters",
  "Daniel Walthall",
  "Steven Warble",
  "Lester Ward",
  "Noel Warford",
  "Watergoesred",
  "Steven Watkins",
  "Joe Webb",
  "Nic Webb",
  "Phillip Wessels",
  "Matt Wetherbee",
  "Devin White",
  "Mark Wiand",
  "Jason Cordova",
  "Christopher Wiegand",
  "Will",
  "River Williamson",
  "Isa Wills",
  "Ryan Windeknecht",
  "Jacob Wood",
  "Woodell",
  "Victor Wyatt",
  "Jason Yoakam",
  "Jason Young",
  "Sam Zeitlin",
  "Mark Zimmer"
];
