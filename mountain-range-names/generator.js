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

var clicky = document.getElementById("mtnClick");
clicky.addEventListener("click", function() {
  var userInput = $("#box");
  var txt = userInput.val();
  var txtFirstArray = nameArray.join(" ");
  var txtNoPunc = txtFirstArray.replace(/[^\w\s]|_/g, " ").replace(/\d+/g, " ").replace(/\s+/g, " ");
  var txtArray = txtNoPunc.split(" ");
  rando(txtArray);
  if ($("#mountainList li").length > 0) {
    $("#mountainList").html('');
    txt = userInput.val();
  }
  for (var i = 0; i < 10; i++) {
    $("#mountainList").append("<li>" + "The " + markovIt() + " " + randomArrayElement(mountainSynonyms) + "</li>");
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

var mountainSynonyms = [
  "Mountains",
  "Ranges",
  "Range",
  "",
  "Highlands",
  "Tracts",
  "Hills",
  "Ridge",
  "Heights",
  "Peaks",
  "Belt",
  "Rise"
];

var nameArray = [
  "Ahaggar",
  "Ahmar",
  "Aberdare ",
  "Amaro",
  "Atlantika",
  "Atlas",
  "Anti-",
  "Aurès",
  "High ",
  "Middle ",
  "Rif",
  "Saharan ",
  "Tell ",
  "Bale ",
  "Bakossi",
  "Bvumba",
  "Cal Madow",
  "Cederberg",
  "Drakensberg",
  "Eastern Arc",
  "Eastern Highlands",
  "Entoto",
  "Erta Ale ",
  "Golis",
  "Kilimanjaro Meru",
  "Kipengere",
  "Lebombo",
  "Magaliesberg",
  "Mahale",
  "Mandara",
  "Mount Cameroon",
  "Mount Nimba",
  "Mount Kenya",
  "Ogo",
  "Outeniqua",
  "Pare",
  "Piton Neigesiton",
  "Rwenzori",
  "Semien",
  "Swartberg",
  "Tibesti",
  "Udzungwa",
  "Uluguru",
  "Usambara",
  "Alagalla Mountain",
  "Alborz",
  "Al Hajar",
  "Altai",
  "Annamite",
  "Anti",
  "Arfak",
  "Aravalli" ,
  "Asir",
  "Barisan",
  "Caraballo",
  "Cardamom",
  "Carmel",
  "Caucasus",
  "Chersky",
  "Chittagong",
  "Cordillera",
  "Crocker",
  "Dieng",
  "Dzhugdzhur",
  "Eastern Ghats",
  "Fansipan",
  "Gydan",
  "Haraz",
  "Hijaz",
  "Himalaya",
  "Mahabharat",
  "Siwalik Churia",
  "Hindu Kush",
  "Japanese",
  "Akaishi",
  "Hida",
  "Kiso",
  "Jayawijaya",
  "Kabir Kuh",
  "Karakoram",
  "Khingan" ,
  "Khingan",
  "Khibinsky",
  "Kirthar",
  "Knuckles",
  "Koryak",
  "Kunlun",
  "Kuray" ,
  "Owen Stanley" ,
  "Pamir",
  "Safed Koh",
  "Salt",
  "Sayan",
  "Sivalik Hills",
  "Sierra Madre",
  "Sikhote Alin",
  "Stanovoi" ,
  "Sudirman" ,
  "Sulaiman" ,
  "Taurus" ,
  "Toba Kakar" ,
  "Tian Shan",
  "Taiwan" ,
  "Tengger" ,
  "Titiwangsa" ,
  "Ural" ,
  "Verkhoyansk" ,
  "Western Ghats",
  "Zagros" ,
  "Zambales" ,
  "Zamboanga Cordilleras",
  "Bergamo" ,
  "Hohe Tauern",
  "Ankogel",
  "Defereggen",
  "Grossglockner",
  "Goldberg ",
  "Granatspitz ",
  "Hafner ",
  "Kreuzeck ",
  "Rieserferner ",
  "Schober ",
  "Venediger ",
  "Kitzbühel" ,
  "Niedere Tauern",
  "Ötztal" ,
  "Rhaetian" ,
  "Albula",
  "Bernina",
  "Bregaglia",
  "Livigno",
  "Oberhalbstein",
  "Plessur",
  "Samnaun" ,
  "Sesvenna",
  "Silvretta",
  "Stubai" ,
  "Tux" ,
  "Verwall" ,
  "Zillertal" ,
  "Northern Limestone" ,
  "Allgäu" ,
  "Berchtesgaden" ,
  "Dachstein",
  "Ennstaler Alpen",
  "Karwendel",
  "Lechtal" ,
  "Totes Gebirge",
  "Wetterstein",
  "Wilden Kaiser",
  "Rätikon",
  "Southern Limestone" ,
  "Adamello-Presanella",
  "Brenta" ,
  "Carnic" ,
  "Dolomites",
  "Julian" ,
  "Kamnik" ,
  "Karawanken",
  "Ortler" ,
  "Bernese" ,
  "Cottian" ,
  "Glarus" ,
  "Graian" ,
  "Mont Blanc" ,
  "Vanoise",
  "Gran Paradiso",
  "Lepontine" ,
  "Ligurian" ,
  "Swiss" ,
  "Pennine" ,
  "Pre",
  "Dauphiné" ,
  "Maritime" ,
  "Provence" ,
  "Savoy",
  "Savoie" ,
  "Urner" ,
  "Apennines",
  "Balkan" ,
  "Belasitsa",
  "Black Forest",
  "Black" ,
  "Brecon Beacons",
  "Cairngorms",
  "Cantabrian" ,
  "Picos",
  "Basque",
  "Carpathian",
  "Western Carpathians",
  "Tatra",
  "Western Beskids Central Beskids",
  "Eastern Carpathians",
  "Eastern Beskids Ukrainian Carpathians",
  "Rodna",
  "Southern Carpathians",
  "Făgăraș  ",
  "Retezat-Godeanu  ",
  "Poiana Ruscă",
  "Banat",
  "Apuseni",
  "Bihor",
  "Caucasus" ,
  "Dentelles Montmirail",
  "Dinaric" ,
  "Scanderberg" ,
  "Gennargentu",
  "Grampian" ,
  "Ben Nevis",
  "Harz",
  "Jura" ,
  "Karelides",
  "Lake District",
  "Macgillycuddy's Reeks",
  "Măcin" ,
  "Massif Central",
  "Mourne" ,
  "Owl",
  "Ore",
  "Osogovo",
  "Pennines",
  "Pindus" ,
  "Pirin",
  "Pyrenees",
  "Rhodope" ,
  "Rila",
  "Rhön" ,
  "Scandinavian" ,
  "Setesdalsheiene",
  "Jotunheimen",
  "Rondane",
  "Dovrefjell",
  "Trollheimen",
  "Kjolen",
  "Saltfjellet",
  "Svecofennides",
  "Lyngen" ,
  "Sierra Morena",
  "Sistema Bético",
  "Sistema Central",
  "Sierra Guadarrama",
  "Sistema Ibérico",
  "Sistema Penibético",
  "Snowdonia",
  "Sredna Gora",
  "Strandzha",
  "Świętokrzyskie" ,
  "Sudetes",
  "Ślęża Masiff",
  "Lusatian",
  "Ještěd" ,
  "Jizera",
  "Kaczawskie",
  "Krkonoše",
  "Rudawy Janowickie",
  "Krkonoše",
  "Wałbrzyskie",
  "Stone",
  "Owl",
  "Bardzkie",
  "Stołowe",
  "Orlicke",
  "Bystrzyckie",
  "Golden",
  "Śnieżnik",
  "Opawskie",
  "Hrubý Jeseník",
  "Low Jeseník",
  "Šumava",
  "Swabian Alb",
  "Serra de Tramuntana",
  "Ural" ,
  "Vogelsberg" ,
  "Vosges" ,
  "Wicklow" ,
  "Alángup Qáqai",
  "Alexandrine",
  "Amitsorssûp Qulâ",
  "Barth",
  "Brages",
  "Crown Prince Frederick",
  "Daly",
  "Didrik Pining",
  "Ejnar Mikkelsen",
  "Ellemands",
  "Fynske ",
  "Giesecke",
  "Gronau Nunataks",
  "Grønne",
  "Benedict",
  "Halle",
  "Haug",
  "Heywood",
  "Hjelm",
  "Kangerluluk",
  "Knud Rasmussen",
  "Lacroix",
  "Lemon",
  "Lilloise",
  "Lindbergh",
  "Mols",
  "Murchison",
  "Musk Ox",
  "Norlund ",
  "Pentamerus",
  "Pictet",
  "Qârusuit",
  "Qivssakatdlagfik",
  "Rold",
  "Roosevelt",
  "Schweizerland",
  "Sioraq",
  "Stauning ",
  "Svinhufvud",
  "Tågefjeldene",
  "Watkins",
  "Wiedemann",
  "Adam",
  "Adamant",
  "Alsek",
  "Anvil" ,
  "Arctic Cordillera",
  "Asulkan",
  "Badshot",
  "Baffin",
  "Battle",
  "Beaufort",
  "Belcher" ,
  "Big Bend",
  "Big Salmon" ,
  "Blackwelder",
  "Blue",
  "Bonanza",
  "Bonnet Plume" ,
  "Bonnington",
  "Britannia",
  "Empire",
  "Bruce",
  "Byam Martin",
  "Cadwallader",
  "Camelsfoot",
  "Cameron",
  "Canadian",
  "Cantilever",
  "Cariboo",
  "Cascade",
  "Cayoosh",
  "Challenger",
  "Chilcotin",
  "Clachnacudainn",
  "Clendinning",
  "Coast" ,
  "Columbia" ,
  "Conger",
  "Coquitlam",
  "Crease",
  "Cunningham",
  "Dawson",
  "Dickson",
  "Douglas" ,
  "Douro",
  "Duncan" ,
  "Elk River",
  "Everett",
  "Fannin",
  "Franklin",
  "Garfield",
  "Garibaldi" ,
  "Genevieve",
  "Glenyon" ,
  "Goat",
  "Gowlland",
  "Grinnell",
  "Grogan Morgan",
  "Haddington",
  "Haihte",
  "Ha-Iltzuk Icefield",
  "Halifax",
  "Hankin",
  "Hartz",
  "Hermit",
  "Hess" ,
  "Homathko Icefield",
  "Ilgachuz",
  "Inglefield",
  "Innuitian",
  "Insular" ,
  "Itcha",
  "Jeffries",
  "Joy",
  "Karmutzen",
  "Kaumajet" ,
  "Kettle River" ,
  "Kiglapait" ,
  "Kitimat" ,
  "Kluane" ,
  "Knorr" ,
  "Kokanee",
  "Kootenay" ,
  "Vermilion",
  "Stanford",
  "Beaverfoot",
  "Krag",
  "Krieger",
  "Lardeau",
  "Lillooet Icecap",
  "Lillooet ",
  "MacDonald" ,
  "McKay",
  "Monashee" ,
  "Nadaleen" ,
  "Nelson",
  "Newcastle",
  "Niut",
  "Norns",
  "North Shore",
  "Ogilvie",
  "Osborn",
  "Pelham",
  "Pelly" ,
  "Pierce",
  "Precipitous",
  "Premier",
  "Prince ",
  "Prince ",
  "Princess Margaret",
  "Purity",
  "Queen Charlotte" ,
  "Quesnel",
  "Rainbow",
  "Refugium",
  "Richardson" ,
  "Rocky" ,
  "Ruby",
  "Saint Elias" ,
  "San Christoval",
  "Sawtooth  ",
  "Scoresby ",
  "Selamiut",
  "Selkirk" ,
  "Selwyn" ,
  "Seymour",
  "Shulaps",
  "Shuswap Highland",
  "Sir Donald",
  "Sir Sandford",
  "Somerset",
  "Sophia",
  "Spearhead",
  "Spectrum",
  "St. Cyr" ,
  "Stokes",
  "Sutton",
  "Swiss",
  "Tantalus",
  "Thorndike Peaks",
  "Tochquonyalla",
  "Torngat",
  "Treuter",
  "Valhalla" ,
  "Valkyr",
  "Vancouver Island" ,
  "Victoria Albert",
  "Waddington",
  "Wernecke" ,
  "Windy",
  "Winston Churchill" ,
  "Amargosa" ,
  "Appalachian" ,
  "Adirondack" ,
  "Allegheny",
  "Shenandoah" ,
  "Appalachian ",
  "Catskill",
  "Blue Ridge",
  "Great Smoky",
  "Green" ,
  "Piercy"  ,
  "Talladega" ,
  "White" ,
  "Arbuckle" ,
  "Beaver Lake" ,
  "Black" ,
  "Black" ,
  "Blue  ",
  "Brooks" ,
  "Baird" ,
  "Davidson" ,
  "De Long" ,
  "Endicott" ,
  "Franklin" ,
  "Phillip Smith" ,
  "Romanzof" ,
  "Schwatka" ,
  "Shubelik" ,
  "Waring" ,
  "Capitan" ,
  "Cascade" ,
  "Cedar" ,
  "Chisos" ,
  "Chugach" ,
  "Granite" ,
  "Robinson" ,
  "Coast" ,
  "Columbia" ,
  "Monashee" ,
  "Kettle River" ,
  "Selkirk" ,
  "Coso" ,
  "Cricket" ,
  "Davis" ,
  "Delamar" ,
  "Delaware" ,
  "Desert" ,
  "Driftless Area",
  "Ocooch" ,
  "East Desert" ,
  "East Humboldt" ,
  "Franklin" ,
  "Gila" ,
  "Guadalupe" ,
  "Huron" ,
  "Klamath" ,
  "Marble" ,
  "Northern Yolla-Bolly" ,
  "Salmon" ,
  "Scott" ,
  "Siskiyou" ,
  "Trinity" ,
  "Trinity" ,
  "Lake" ,
  "Mineral" ,
  "Mineral" ,
  "Misquah Hills",
  "Nulato Hills",
  "Olympic" ,
  "Oquirrh" ,
  "Oregon Coast" ,
  "Organ" ,
  "Ortiz" ,
  "Pahranagat" ,
  "Panamint" ,
  "Pavant" ,
  "Peninsular" ,
  "Laguna" ,
  "San Jacinto" ,
  "Santa Ana" ,
  "Elsinore",
  "Temescal" ,
  "Pinaleno" ,
  "Porcupine" ,
  "Pryor" ,
  "Rocky" ,
  "Absaroka" ,
  "Beartooth" ,
  "Bighorn" ,
  "Bitterroot" ,
  "Beaverhead" ,
  "Bitterroot" ,
  "Centennial" ,
  "Coeur d\'Alène",
  "Saint Joe" ,
  "Boise" ,
  "Boulder" ,
  "Boulder" ,
  "Bridger" ,
  "Bridger" ,
  "Cabinet" ,
  "Castle" ,
  "Clearwater" ,
  "Crazy" ,
  "Elk" ,
  "Elkhorn" ,
  "Flathead" ,
  "Front" ,
  "Gallatin" ,
  "Garnet" ,
  "Granite" ,
  "Green" ,
  "Gros Ventre" ,
  "Henry" ,
  "John Long" ,
  "La Sal" ,
  "Laramie" ,
  "Lemhi" ,
  "Lewis" ,
  "Livingston" ,
  "Madison" ,
  "Medicine Bow" ,
  "Snowy" ,
  "Mosquito" ,
  "Owl Creek" ,
  "Pioneer" ,
  "Pioneer" ,
  "Red" ,
  "Salish" ,
  "Salmon River" ,
  "Salt River" ,
  "San Juan" ,
  "Sangre de Cristo" ,
  "Sawatch" ,
  "Sawtooth" ,
  "Shoshone" ,
  "Smoky" ,
  "Soldier" ,
  "Swan" ,
  "Tenmile" ,
  "Teton" ,
  "Tobacco Root" ,
  "Uinta" ,
  "Wasatch" ,
  "Bear River" ,
  "Washburn" ,
  "White Cloud" ,
  "Whitefish" ,
  "Wind River" ,
  "Wyoming" ,
  "Ruby" ,
  "Sacramento" ,
  "Saint Elias" ,
  "Brabazon" ,
  "Fairweather" ,
  "San Andres" ,
  "San Francisco" ,
  "San Francisco" ,
  "Sandia-Manzano" ,
  "Manzano" ,
  "Sandia" ,
  "Sawtooth" ,
  "Schell Creek" ,
  "Selenite" ,
  "Seward Peninsula" ,
  "Bendeleben" ,
  "Darby",
  "Kigluaik" ,
  "York" ,
  "Sheep" ,
  "Shoshone" ,
  "Shoshone" ,
  "Sierra Nevada" ,
  "Snake" ,
  "Spring" ,
  "Star" ,
  "Superstition" ,
  "Sutter" ,
  "Texas" ,
  "Toiyabe" ,
  "Transverse" ,
  "Chalk" ,
  "Little San Bernardino" ,
  "Pine"  ,
  "Puente" ,
  "San Bernardino" ,
  "San Emigdio" ,
  "San Gabriel" ,
  "San Jose" ,
  "San Rafael" ,
  "San Rafael" ,
  "Santa Monica" ,
  "Santa Susana" ,
  "Santa Ynez" ,
  "Shandin" ,
  "Sierra Pelona" ,
  "Simi" ,
  "Tehachapi" ,
  "Topatopa",
  "Tushar" ,
  "Ouachita" ,
  "Ozark" ,
  "Boston" ,
  "St. Francois" ,
  "Uwharrie" ,
  "Virginia" ,
  "West Humboldt" ,
  "West" ,
  "White" ,
  "White" ,
  "White" ,
  "Wichita" ,
  "Wolf" ,
  "Mexico",
  "Peninsular" ,
  "Sierra de Juarez",
  "Sierra de la Giganta",
  "Sierra de la Laguna",
  "Sierra de San Borja",
  "Sierra de San Francisco",
  "Sierra San Pedro Martir",
  "Sierra Madre de Chiapas",
  "Sierra Madre del Sur",
  "Sierra Madre Occidental",
  "Sierra Huichola",
  "Sierra Tarahumara",
  "Sierra Madre Oriental",
  "Sierra del Burro",
  "Sierra del Carmen",
  "Sierra Norte de Puebla",
  "Trans-Mexican Volcanic",
  "Tuxtla" ,
  "Central",
  "Cerros de Escazú",
  "Cordillera de Guanacaste",
  "Cordillera de Talamanca",
  "Cordillera de Tilarán",
  "Cordillera Isabelia",
  "Cordillera Los Maribios",
  "Cordillera Central",
  "Maya" ,
  "Sierra",
  "Sierra de Chuacús",
  "Sierra de los Cuchumatanes",
  "Sierra del Merendón",
  "Sierra Madre de Chiapas",
  "Caribbean",
  "Blue" ,
  "Cordillera Central",
  "Dry Harbour" ,
  "John Crow" ,
  "Massif du Nord",
  "Mocho" ,
  "Cordillera de los Andes",
  "Cordillera Central",
  "Cordillera Occidental",
  "Cordillera Oriental",
  "Serranía del Perijá",
  "Serranía de los Churumbelos",
  "Cordillera Real",
  "Cordillera Occidental",
  "Cordillera Occidental",
  "Cordillera Blanca",
  "Cordillera Huayhuash",
  "Cordillera Negra",
  "Cordillera Central",
  "Cordillera Oriental",
  "Cordillera Central",
  "Cordillera Real",
  "Cordillera Oriental",
  "Serranía de Charagua",
  "Serranía del Aguaragüe",
  "Cordillera Occidental",
  "Cordillera de Lípez",
  "Cordillera de la Costa",
  "Sierra Vicuña Mackenna",
  "Cordillera Nahuelbuta",
  "Cordillera de Mahuidanchi",
  "Cordillera Pelada",
  "Cordillera del Piuchén",
  "Cordillera de Pirulil",
  "Cordillera Domeyko",
  "Sierra de Famatina",
  "Frontal Cordillera",
  "Principal Cordillera",
  "Sierra de Velasco",
  "Cordillera de Talinay",
  "Cordillera Negra",
  "Cordillera del Paine",
  "Cordillera Sarmiento",
  "Cordillera Riesco",
  "Cordillera Darwin",
  "Martial" ,
  "Dientes de Navarino",
  "Baudó" ,
  "Guiana" ,
  "Serranías Chiquitanas",
  "Serranías de Santiago",
  "Serranía de Macuira",
  "Sierra Nevada de Santa Marta",
  "Serrania de la Macarena",
  "Serra dos Aimorés",
  "Borborema Plateau",
  "Chapada",
  "Chapada do Araripe",
  "Espinhaço" ,
  "Chapada dos Guimarães",
  "Chapada das Mangabeiras",
  "Mantiqueira" ,
  "Serra do Mar",
  "Serra do Cristal",
  "Serra Gaúcha",
  "Serra dos Órgãos",
  "Serra Geral",
  "Serra de Ibiapaba",
  "Serra do Rio do Rastro",
  "Serra do Tiracambu",
  "Ybytyruzú" ,
  "Sierras de Córdoba",
  "Sierra de La Ventana",
  "Cordón Baquedano",
  "Great Dividing" ,
  "Hunter" ,
  "Kaikoura" ,
  "Kaweka" ,
  "MacDonnell" ,
  "Ruahine" ,
  "Southern" ,
  "Tararua" ,
  "Antarctica",
  "Allardyce" ,
  "Imeon" ,
  "Pensacola",
  "Salvesen" ,
  "Tangra" ,
  "Transantarctic",
  "Queen Maud",
  "Bush",
  "Commonwealth",
  "Dominion",
  "Gothic",
  "Herbert",
  "Prince Olav",
  "Hughes",
  "Supporters",
  "Theron",
  "Heimefront" ,
  "Borg Massif",
  "Fimbulheimen",
  "Gburek Peaks",
  "Sverdrup",
  "Gjelsvik",
  "Mühlig-Hofmann",
  "Orvin",
  "Filchner",
  "Drygalski",
  "Kurze",
  "Gagarin",
  "Conrad",
  "Wohlthat",
  "Humboldt",
  "Petermann ",
  "Gruber",
  "Hoel",
  "Weyprecht",
  "Payer",
  "Lomonosov",
  "Sør Rondane" ,
  "Belgica" ,
  "Queen Fabiola" ,
  "Aristotle" ,
  "Pippin Peaks",
  "Stribog" ,
  "Solvay" ,
  "Brugmann" ,
  "Ocean",
  "Emperor Seamounts",
  "Mid-ocean  ",
  "Gakkel Ridge",
  "Mid-Atlantic ",
  "Southwest ",
  "Central ",
  "Southeast ",
  "Pacific-Antarctic ",
  "East Pacific ",
  "Ninety East" 
];