var order = 2;
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
  rando(nameArray);
  if ($("li").length > 0) {
    $("#mountainList").html('');
    txt = userInput.val();
  }
  for (var i = 0; i < 10; i++) {
    $("#mountainList").append("<li>The " + markovIt() + " " + randomArrayElement(forestTitle) + "</li>");
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
  for (var i = 0; i < 7; i++) {
    var maybe = ngrams[start];
    var next = randomArrayElement(maybe);
    result += next;
    start = result.substring(result.length-order, result.length);
  }
  return result;
};

var forestTitle = [
  "Copse",
  "Woods",
  "",
  "Forest",
  "Timberlands",
  "Grove",
  "Thicket",
  "Weald",
  "Wildwood",
  "Jungle",
  "Wood"
]


var nameArray = [
  "Allegheny",
  "Angeles",
  "Angelina",
  "Apache",
  "Sitgreaves",
  "Apalachicola",
  "Arapaho",
  "Ashley",
  "Beaverhead",
  "Deerlodge",
  "Bienville",
  "Bighorn",
  "Bitterroot",
  "Black",
  "Hills",
  "Boise",
  "Bridger",
  "Teton",
  "Caribou",
  "Targhee",
  "Carson",
  "Chattahoochee",
  "Oconee",
  "Chequamegon",
  "Nicolet",
  "Cherokee",
  "Chippewa",
  "Chugach",
  "Cibola",
  "Clearwater",
  "Cleveland",
  "Coconino",
  "Colville",
  "Conecuh",
  "Coronado",
  "Croatan",
  "Custer",
  "Daniel",
  "Boone",
  "Davy",
  "Crockett",
  "De",
  "Soto",
  "Delta",
  "Deschutes",
  "Dixie",
  "El Yunque",
  "Eldorado",
  "Finger",
  "Lakes",
  "Fishlake",
  "Flathead",
  "Francis",
  "Marion",
  "Fremont",
  "Winema",
  "Gallatin",
  "George",
  "Washington",
  "Jefferson",
  "Gifford",
  "Pinchot",
  "Gila",
  "Grand",
  "Mesa",
  "Green",
  "Mountain",
  "Gunnison",
  "Helena",
  "Hiawatha",
  "Holly",
  "Springs",
  "Homochitto",
  "Hoosier",
  "Humboldt",
  "Toiyabe",
  "Huron",
  "Manistee",
  "Idaho",
  "Coeur",
  "D'Alene" ,
  "Saint Joe" ,
  "Kaniksu",
  "Inyo",
  "Kaibab",
  "Kisatchie",
  "Klamath",
  "Kootenai",
  "Lake",
  "Tahoe" ,
  "Lassen",
  "Lewis",
  "Clark",
  "Lincoln",
  "Lolo",
  "Los",
  "Padres",
  "Malheur",
  "Manti-La",
  "Sal",
  "Mark",
  "Twain",
  "Medicine",
  "Bow ",
  "Routt",
  "Mendocino",
  "Modoc",
  "Monongahela",
  "Mount",
  "Baker",
  "Snoqualmie",
  "Mount",
  "Hood",
  "Nantahala",
  "Nebraska",
  "Nez",
  "Perce",
  "Ocala",
  "Ochoco",
  "Okanogan",
  "Wenatchee",
  "Olympic",
  "Osceola",
  "Ottawa",
  "Ouachita",
  "Ozark",
  "Saint",
  "Francis",
  "Payette",
  "Pike",
  "Pisgah",
  "Plumas",
  "Prescott",
  "Rio",
  "Grande",
  "Rogue",
  "River",
  "Siskiyou",
  "Roosevelt",
  "Sabine",
  "Salmon",
  "Challis",
  "Sam",
  "Houston",
  "Samuel",
  "McKelvie",
  "San",
  "Bernardino",
  "San",
  "Isabel",
  "San",
  "Juan",
  "Santa",
  "Fe",
  "Sawtooth",
  "Sequoia",
  "Shasta",
  "Trinity",
  "Shawnee",
  "Shoshone",
  "Sierra",
  "Siuslaw",
  "Six",
  "Rivers",
  "Stanislaus",
  "Sumter",
  "Superior",
  "Tahoe",
  "Talladega",
  "Tombigbee",
  "Tongass",
  "Tonto",
  "Tuskegee",
  "Uinta",
  "Wasatch",
  "Cache",
  "Umatilla",
  "Umpqua",
  "Uncompahgre",
  "Uwharrie",
  "Wallowa",
  "Whitman",
  "Wayne",
  "Mountain",
  "River",
  "Willamette",
  "William",
  "Bankhead",
  "Dagobah",
  "Endor",
  "Amaranth",
  "Amber",
  "Amethyst",
  "Apricot",
  "Aquamarine",
  "Azure",
  "Beige",
  "Black",
  "Blue",
  "Blush",
  "Bronze",
  "Brown",
  "Burgundy",
  "Byzantium",
  "Carmine",
  "Cerise",
  "Cerulean",
  "Champagne",
  "Chocolate",
  "Coffee",
  "Copper",
  "Coral",
  "Crimson",
  "Cyan",
  "Emerald",
  "Erin",
  "Gold",
  "Gray",
  "Green",
  "Harlequin",
  "Indigo",
  "Ivory",
  "Jade",
  "Lavender",
  "Lemon",
  "Lilac",
  "Lime",
  "Magenta",
  "Maroon",
  "Mauve",
  "Ocher",
  "Olive",
  "Orange",
  "Orchid",
  "Peach",
  "Pear",
  "Periwinkle",
  "Pink",
  "Plum",
  "Puce",
  "Purple",
  "Raspberry",
  "Red",
  "Rose",
  "Ruby",
  "Salmon",
  "Sangria",
  "Sapphire",
  "Scarlet",
  "Silver",
  "Tan",
  "Taupe",
  "Teal",
  "Turquoise",
  "Violet",
  "Viridian",
  "White",
  "Yellow",
  "Gibskov",
  "Ballypatrick",
  "Belvoir",
  "Maghery",
  "Marble",
  "Curragh",
  "Marlogue",
  "Donadea",
  "Littlewood",
  "Avondale",
  "Shelton",
  "Hazelwood",
  "Peace",
  "Baram",
  "Lahav",
  "Namok",
  "Arden",
  "Wyre",
  "Sherwood",
  "Darwin",
  "Delamere",
  "Burnhame",
  "Doriath",
  "Mirkwood",
  "Treegarth",
  "Ossiriand",
  "Fangorn"
];
