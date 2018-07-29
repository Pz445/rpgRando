var character = {
  abilityScore: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    luck: 0
  },
  abilityMod: {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
    lck: 0
  },

};
var stats = [];

//Die roller with number of dice
function rollDice (sides, amount) {
  var total = 0;
  for (var i = 1; i <= amount; i++) {
    total += Math.floor(Math.random() * sides + 1)
  }
  return total;
}

//Check arrays for duplicates
function checkForDuplicates (arr) {
  var sorted = arr.slice().sort();
  for (var i = 0; i < arr.length - 1; i++) {
    if (sorted[i] === sorted[i+1]) {
      return true;
    } else {
      return false;
    }
  }
}

//playbook generator
function rollPlaybook () {
  var x = Math.floor((Math.random() * 12) + 1);
  if (x <= 6) {
    character.playbook = "Fighter";
  } else if (x <= 9) {
    character.playbook = "Thief";
  } else if (x <= 11) {
    character.playbook = "Cleric";
  } else {
    character.playbook = "Magic-User";
  }
}

//ability scores generator
function rollAbility () {
  for (j = 0; j < 7; j++) {
    stats[j] = rollDice(6, 3);
  }
  character.abilityScore.strength = stats[0];
  character.abilityScore.dexterity = stats[1];
  character.abilityScore.constitution = stats[2];
  character.abilityScore.intelligence = stats[3];
  character.abilityScore.wisdom = stats[4];
  character.abilityScore.charisma = stats[5];
  character.abilityScore.luck = stats[6];
}

//determine ability Modifier
function determineAbilityMod(abilityScore) {
  var mod = 0;
  if (abilityScore <= 3) {
    mod = -3;
  }
  else if (abilityScore <=5) {
    mod = -2;
  }
  else if (abilityScore <= 8) {
    mod = -1;
  }
  else if (abilityScore <= 12) {
    mod = 0;
  }
  else if (abilityScore <= 15) {
    mod = 1;
  }
  else if (abilityScore <= 17) {
    mod = 2;
  }
  else {
    mod = 3;
  }
  return mod;
}

//heritage generator (by playbook)
function rollHeritage(playbook) {
  character.heritage = '';
  var dieTwelve = rollDice(12, 1);
  if (playbook == "Cleric") {
    if (dieTwelve <= 7) {
      character.heritage = "Human";
    }
    else if (dieTwelve === 8) {
      character.heritage = "Halfling";
    }
    else if (dieTwelve <= 11) {
      character.heritage = "Dwarf";
    }
    else {
      character.heritage = "Elf";
    }
  }
  if (playbook == "Fighter") {
    if (dieTwelve <= 7) {
      character.heritage = "Human";
    }
    else if (dieTwelve === 8) {
      character.heritage = "Halfling";
    }
    else if (dieTwelve <= 11) {
      character.heritage = "Dwarf";
    }
    else {
      character.heritage = "Elf";
    }
  }
  if (playbook == "Thief") {
    if (dieTwelve <= 7) {
      character.heritage = "Human";
    }
    else if (dieTwelve <= 10) {
      character.heritage = "Halfling";
    }
    else if (dieTwelve === 11) {
      character.heritage = "Dwarf";
    }
    else {
      character.heritage = "Elf";
    }
  }
  if (playbook == "Magic-User") {
    if (dieTwelve <= 7) {
      character.heritage = "Human";
    }
    else if (dieTwelve <= 10) {
      character.heritage = "Halfling";
    }
    else if (dieTwelve === 11) {
      character.heritage = "Dwarf";
    }
    else {
      character.heritage = "Elf";
    }
  }
}

//name generator (by heritage)
function getName (heritage) {
  var genderRoll = rollDice(6, 1);
  character.gender = "";
  if (genderRoll > 3) {
    character.gender = "Female";
  } else {
    character.gender = "Male";
  }
  if (heritage === "Human") {
    if (character.gender === "Female") {
      character.name = getHumanFemaleName();
    }
    else if (character.gender === "Male") {
      character.name = getHumanMaleName();
    }
  }
  else if (heritage === "Elf") {
    if (character.gender === "Female") {
      character.name = getElfFemaleName();
    }
    else if (character.gender === "Male") {
      character.name = getElfMaleName();
    }
  }
  else if (heritage === "Halfling") {
    if (character.gender === "Female") {
      character.name = getHalflingFemaleName();
    }
    else if (character.gender === "Male") {
      character.name = getHalflingMaleName();
    }
  }
  else if (heritage === "Dwarf") {
    if (character.gender === "Female") {
      character.name = getDwarfFemaleName();
    }
    else if (character.gender === "Male") {
      character.name = getDwarfMaleName();
    }
  }
}


//appearance generator (by playbook)
function rollAppearance (playbook) {
  if (playbook === "Fighter") {
    character.appearance = rollFighterAppearance();
  }
  if (playbook === "Thief") {
    character.appearance = rollThiefAppearance();
  }
  if (playbook === "Cleric") {
    character.appearance = rollClericAppearance();
  }
  if (playbook === "Magic-User") {
    character.appearance = rollMagicUserAppearance();
  }
}

//hitpoints = hit dice (by plabook) + CON
function rollHP (playbook) {
  var HP = 0;
  var modCon = character.abilityMod.con;
  if (playbook === "Cleric") {
    character.hitDie = "d8";
    character.hitPoints = rollDice(8, 1) + modCon;
  } else if (playbook === "Fighter") {
    character.hitDie = "d10";
    character.hitPoints = rollDice(10, 1) + modCon;
  } else if (playbook === "Thief") {
    character.hitDie = "d6";
    character.hitPoints = rollDice(6, 1) + modCon;
  } else if (playbook === "Magic-User") {
    character.hitDie = "d4";
    character.hitPoints = rollDice(4, 1) + modCon;
  }
  if (character.hitPoints < 1) {
    character.hitPoints = 1;
  }
}


//roll alignment
function rollAlignment(playbook) {
  character.alignment = '';
  var roll = rollDice(12, 1);
  if (playbook === "Thief") {
    if (roll <= 2) {
      character.alignment = "Evil";
    }
    else if (roll <= 6) {
      character.alignment = "Chaotic";
    }
    else if (roll <= 10) {
      character.alignment = "Neutral";
    }
    else {
      character.alignment = "Good";
    }
  }
  if (playbook === "Magic-User") {
    if (roll <= 3) {
      character.alignment = "Evil";
    }
    else if (roll <= 8) {
      character.alignment = "Chaotic";
    }
    else {
      character.alignment = "Good";
    }
  }
  if (playbook === "Fighter") {
    if (roll <= 2) {
      character.alignment = "Evil";
    }
    else if (roll <= 4) {
      character.alignment = "Chaotic";
    }
    else if (roll <= 8) {
      character.alignment = "Neutral";
    }
    else if (roll <= 10) {
      character.alignment = "Lawful"
    }
    else {
      character.alignment = "Good";
    }
  }
  if (playbook === "Cleric") {
    if (roll <= 3) {
      character.alignment = "Evil";
    }
    else if (roll <= 5) {
      character.alignment = "Chaotic";
    }
    else if (roll <= 7) {
      character.alignment = "Neutral";
    }
    else if (roll <= 9) {
      character.alignment = "Lawful"
    }
    else {
      character.alignment = "Good";
    }
  }
}

function alignmentText (alignment) {
  switch (alignment) {
    case "Evil":
      character.alignmentText = "Inflict physical or emotional harm on others for personal gain";
      break;
    case "Chaotic":
      character.alignmentText = "Sow dischord, or destroy a symbol of order";
      break;
    case "Neutral":
      character.alignmentText = "Refuse to take a side when given the opportunity";
      break;
    case "Lawful":
      character.alignmentText = "Maintain order in the face of forces that would undo it";
      break;
    case "Good":
      character.alignmentText = "Help those in need at your own expense";
      break;
    default:
      console.log(error);
      break;
  }
}

//roll traits (based on Alignment)
function rollTraits (alignment) {
  character.vices = [];
  character.virtues = [];
  var align = character.alignment;
  if (align === "Evil") {
    character.vices = getVices(3);
    character.virtues = [];
  }
  else if (align === "Chaotic") {
    character.vices = getVices(2);
    character.virtues = getVirtues(1);
  }
  else if (align === "Neutral") {
    character.vices = getVices(1);
    character.virtues = getVirtues(1);
  }
  else if (align === "Lawful") {
    character.vices = getVices(1);
    character.virtues = getVirtues(2);
  }
  else if (align === "Good") {
    character.virtues = getVirtues(3);
    character.vices = [];
  }
}

//returns array with (num) of Vices
function getVices(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    var roll = rollDice(49, 1)
    arr.push(viceList[roll]);
  }
  if (checkForDuplicates(arr)) {
    for (var i = 0; i < num; i++) {
      var roll = rollDice(49, 1)
      arr.push(viceList[roll]);
    }
  }
  else {
      return arr;
  }
}

//returns array with (num) of Virtues
function getVirtues(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    var roll = rollDice(49, 1)
    arr.push(virtueList[roll]);
  }
  if (checkForDuplicates(arr)) {
    for (var i = 0; i < num; i++) {
      var roll = rollDice(49, 1)
      arr.push(virtueList[roll]);
    }
  }
  else {
      return arr;
  }
}

//roll for gear (by playbook)

//test
function rollCharacter () {
  rollPlaybook();
  rollAbility();
  rollHeritage(character.playbook);
  getName(character.heritage);
  if (character.playbook === "Magic-User") {
    character.wizardName = getWizardName();
  };
  character.abilityMod.str = determineAbilityMod(character.abilityScore.strength);
  character.abilityMod.dex = determineAbilityMod(character.abilityScore.dexterity);
  character.abilityMod.con = determineAbilityMod(character.abilityScore.constitution);
  character.abilityMod.int = determineAbilityMod(character.abilityScore.intelligence);
  character.abilityMod.wis = determineAbilityMod(character.abilityScore.wisdom);
  character.abilityMod.cha = determineAbilityMod(character.abilityScore.charisma);
  character.abilityMod.lck = determineAbilityMod(character.abilityScore.luck);
  rollHP(character.playbook);
  rollAlignment(character.playbook);
  alignmentText(character.alignment);
  rollAppearance(character.playbook);
  for (var i = 0; i < character.appearance.length; i++) {
    if (character.appearance[i] === undefined) {
      rollAppearance(character.playbook);
    }
  }
  rollTraits(character.alignment);
  if (character.vices === undefined) {
    rollTraits(character.alignment);
  }
  rollGear(character.playbook);
  // console.log(character);
}

$("#mtnClick").click(function() {
  rollCharacter();
  $("#charContainer").removeClass("hidden");
  $("#charName").text(character.name);
  if (character.playbook === "Magic-User") {
    $("#wizName").text(character.wizardName);
    $("#wizTitle").removeClass("hidden");
    $("#spellGenerator").removeClass("hidden");
  } else {
    $("#wizTitle").addClass("hidden");
    $("#spellGenerator").addClass("hidden");
  }
  $("#gender").text(character.gender);
  $("#race").text(character.heritage);
  $("#profession").text(character.playbook);
  $("#hitdie").text(character.hitDie);
  $("#alignment").text(character.alignment);
  $("#alignText").text(character.alignmentText);
  if ($("#appearance li").length > 0) {
    $("#appearance").html('');
  }
  for (var i = 0; i < character.appearance.length; i++) {
    $("#appearance").append("<li>" + character.appearance[i] + "</li>");
  }
  if ($("#virtues li").length > 0) {
    $("#virtues").html('');
  }
  for (var i = 0; i < character.virtues.length; i++) {
    $("#virtues").append("<li>" + character.virtues[i] + "</li>");
  }
  if ($("#vices li").length > 0) {
    $("#vices").html('');
  }
  for (var i = 0; i < character.vices.length; i++) {
    $("#vices").append("<li>" + character.vices[i] + "</li>");
  }
  if ($("#gear li").length > 0) {
    $("#gear").html('');
  }
  for (var i = 0; i < character.gear.length; i++) {
    $("#gear").append("<li>" + character.gear[i] + "</li>");
  }
  $("#strScore").text(character.abilityScore.strength);
  $("#dexScore").text(character.abilityScore.dexterity);
  $("#conScore").text(character.abilityScore.constitution);
  $("#intScore").text(character.abilityScore.intelligence);
  $("#wisScore").text(character.abilityScore.wisdom);
  $("#chaScore").text(character.abilityScore.charisma);
  $("#lckScore").text(character.abilityScore.luck);
  $("#strMod").text(character.abilityMod.str);
  $("#dexMod").text(character.abilityMod.dex);
  $("#conMod").text(character.abilityMod.con);
  $("#intMod").text(character.abilityMod.int);
  $("#wisMod").text(character.abilityMod.wis);
  $("#chaMod").text(character.abilityMod.cha);
  $("#lckMod").text(character.abilityMod.lck);
});

$("#spellClick").click(function() {
  $("#spellName").text(getSpell());
});

//list arrays
function getHumanMaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Athelan";
      break;
    case 3:
    case 4:
      return "Aldred";
      break;
    case 5:
    case 6:
      return "Alger";
      break;
    case 7:
    case 8:
      return "Archard";
      break;
    case 9:
    case 10:
      return "Astyrian";
      break;
    case 11:
    case 12:
      return "Bowden";
      break;
    case 13:
    case 14:
      return "Brogan";
      break;
    case 15:
    case 16:
      return "Caden";
      break;
    case 17:
    case 18:
      return "Cerdic";
      break;
    case 19:
    case 20:
      return "Devan";
      break;
    case 21:
    case 22:
      return "Druce";
      break;
    case 23:
    case 24:
      return "Dugal";
      break;
    case 25:
    case 26:
      return "Edlyn";
      break;
    case 27:
    case 28:
      return "Ebis";
      break;
    case 29:
    case 30:
      return "Esward";
      break;
    case 31:
    case 32:
      return "Firman";
      break;
    case 33:
    case 34:
      return "Framar";
      break;
    case 35:
    case 36:
      return "Fugol";
      break;
    case 37:
    case 38:
      return "Garret";
      break;
    case 39:
    case 40:
      return "Gidwen";
      break;
    case 41:
    case 42:
      return "Gord";
      break;
    case 43:
    case 44:
      return "Govannon";
      break;
    case 45:
    case 46:
      return "Greme";
      break;
    case 47:
    case 48:
      return "Grindan";
      break;
    case 49:
    case 50:
      return "Halwen";
      break;
    case 51:
    case 52:
      return "Holt";
      break;
    case 53:
    case 54:
      return "Iden";
      break;
    case 55:
    case 56:
      return "Irbend";
      break;
    case 57:
    case 58:
      return "Kendrick";
      break;
    case 59:
    case 60:
      return "Leor";
      break;
    case 61:
    case 62:
      return "Lufian";
      break;
    case 63:
    case 64:
      return "Nyle";
      break;
    case 65:
    case 66:
      return "Odel";
      break;
    case 67:
    case 68:
      return "Ord";
      break;
    case 69:
    case 70:
      return "Orleg";
      break;
    case 71:
    case 72:
      return "Radan";
      break;
    case 73:
    case 74:
      return "Reged";
      break;
    case 75:
    case 76:
      return "Rowe";
      break;
    case 77:
    case 78:
      return "Scrydan";
      break;
    case 79:
    case 80:
      return "Seaver";
      break;
    case 81:
    case 82:
      return "Shepard";
      break;
    case 83:
    case 84:
      return "Snell";
      break;
    case 85:
    case 86:
      return "Stedman";
      break;
    case 87:
    case 88:
      return "Swift";
      break;
    case 89:
    case 90:
      return "Teon";
      break;
    case 91:
    case 92:
      return "Tobrec";
      break;
    case 93:
    case 94:
      return "Tredan";
      break;
    case 95:
    case 96:
      return "Ware";
      break;
    case 97:
    case 98:
      return "Warian";
      break;
    case 99:
    case 100:
      return "Wulf"
      break;
  }
}

function getHumanFemaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Acca";
      break;
    case 3:
    case 4:
      return "Alodia";
      break;
    case 5:
    case 6:
      return "Andessa";
      break;
    case 7:
    case 8:
      return "Anlis";
      break;
    case 9:
    case 10:
      return "Ara";
      break;
    case 11:
    case 12:
      return "Ardith";
      break;
    case 13:
    case 14:
      return "Berroc";
      break;
    case 15:
    case 16:
      return "Bernia";
      break;
    case 17:
    case 18:
      return "Bodica";
      break;
    case 19:
    case 20:
      return "Brigantia";
      break;
    case 21:
    case 22:
      return "Brimlid";
      break;
    case 23:
    case 24:
      return "Caro";
      break;
    case 25:
    case 26:
      return "Cwen";
      break;
    case 27:
    case 28:
      return "Darel";
      break;
    case 29:
    case 30:
      return "Dawn";
      break;
    case 31:
    case 32:
      return "Diera";
      break;
    case 33:
    case 34:
      return "Dotor";
      break;
    case 35:
    case 36:
      return "Eda";
      break;
    case 37:
    case 38:
      return "Elene";
      break;
    case 39:
    case 40:
      return "Elga";
      break;
    case 41:
    case 42:
      return "Elswyth";
      break;
    case 43:
    case 44:
      return "Elva";
      break;
    case 45:
    case 46:
      return "Elvina";
      break;
    case 47:
    case 48:
      return "Erlina";
      break;
    case 49:
    case 50:
      return "Esma";
      break;
    case 51:
    case 52:
      return "Faradan";
      break;
    case 53:
    case 54:
      return "Freya";
      break;
    case 55:
    case 56:
      return "Garmang";
      break;
    case 57:
    case 58:
      return "Gloris";
      break;
    case 59:
    case 60:
      return "Harmilla";
      break;
    case 61:
    case 62:
      return "Hunnar";
      break;
    case 63:
    case 64:
      return "Juliana";
      break;
    case 65:
    case 66:
      return "Kandara";
      break;
    case 67:
    case 68:
      return "Laralan";
      break;
    case 69:
    case 70:
      return "Lorn";
      break;
    case 71:
    case 72:
      return "Maida";
      break;
    case 73:
    case 74:
      return "Megdas";
      break;
    case 75:
    case 76:
      return "Mercia";
      break;
    case 77:
    case 78:
      return "Mora";
      break;
    case 79:
    case 80:
      return "Ogethas";
      break;
    case 81:
    case 82:
      return "Ossia";
      break;
    case 83:
    case 84:
      return "Pallas";
      break;
    case 85:
    case 86:
      return "Rathet";
      break;
    case 87:
    case 88:
      return "Sibley";
      break;
    case 89:
    case 90:
      return "Sunnivar";
      break;
    case 91:
    case 92:
      return "Tate";
      break;
    case 93:
    case 94:
      return "Udela";
      break;
    case 95:
    case 96:
      return "Viradeca";
      break;
    case 97:
    case 98:
      return "Wilona";
      break;
    case 99:
    case 100:
      return "Zora"
      break;
  }
}

function getHalflingMaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Adaman";
      break;
    case 3:
    case 4:
      return "Adelard";
      break;
    case 5:
    case 6:
      return "Adred";
      break;
    case 7:
    case 8:
      return "Agilward";
      break;
    case 9:
    case 10:
      return "Arnest";
      break;
    case 11:
    case 12:
      return "Balbas";
      break;
    case 13:
    case 14:
      return "Barton";
      break;
    case 15:
    case 16:
      return "Bell";
      break;
    case 17:
    case 18:
      return "Banco";
      break;
    case 19:
    case 20:
      return "Bowman";
      break;
    case 21:
    case 22:
      return "Cal";
      break;
    case 23:
    case 24:
      return "Emmet";
      break;
    case 25:
    case 26:
      return "Erling";
      break;
    case 27:
    case 28:
      return "Fastman";
      break;
    case 29:
    case 30:
      return "Foda";
      break;
    case 31:
    case 32:
      return "Freebern";
      break;
    case 33:
    case 34:
      return "Frid";
      break;
    case 35:
    case 36:
      return "Gerd";
      break;
    case 37:
    case 38:
      return "Hadred";
      break;
    case 39:
    case 40:
      return "Hagar";
      break;
    case 41:
    case 42:
      return "Halbert";
      break;
    case 43:
    case 44:
      return "Hamfast";
      break;
    case 45:
    case 46:
      return "Hildred";
      break;
    case 47:
    case 48:
      return "Huge";
      break;
    case 49:
    case 50:
      return "Isen";
      break;
    case 51:
    case 52:
      return "Jaco";
      break;
    case 53:
    case 54:
      return "Jungo";
      break;
    case 55:
    case 56:
      return "Helm";
      break;
    case 57:
    case 58:
      return "Konner";
      break;
    case 59:
    case 60:
      return "Lambert";
      break;
    case 61:
    case 62:
      return "Leon";
      break;
    case 63:
    case 64:
      return "Linus";
      break;
    case 65:
    case 66:
      return "Marko";
      break;
    case 67:
    case 68:
      return "Matti";
      break;
    case 69:
    case 70:
      return "Mekel";
      break;
    case 71:
    case 72:
      return "Melchior";
      break;
    case 73:
    case 74:
      return "Lesser";
      break;
    case 75:
    case 76:
      return "Nenko";
      break;
    case 77:
    case 78:
      return "Nob";
      break;
    case 79:
    case 80:
      return "Olo";
      break;
    case 81:
    case 82:
      return "Ortwin";
      break;
    case 83:
    case 84:
      return "Otto";
      break;
    case 85:
    case 86:
      return "Paladin";
      break;
    case 87:
    case 88:
      return "Pasco";
      break;
    case 89:
    case 90:
      return "Quintus";
      break;
    case 91:
    case 92:
      return "Sifro";
      break;
    case 93:
    case 94:
      return "Ted";
      break;
    case 95:
    case 96:
      return "Tolman";
      break;
    case 97:
    case 98:
      return "Wilber";
      break;
    case 99:
    case 100:
      return "Wiseman"
      break;
  }
}

function getHalflingFemaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Adelle";
      break;
    case 3:
    case 4:
      return "Agilward";
      break;
    case 5:
    case 6:
      return "Alfreda";
      break;
    case 7:
    case 8:
      return "Amalinde";
      break;
    case 9:
    case 10:
      return "Balba";
      break;
    case 11:
    case 12:
      return "Bella";
      break;
    case 13:
    case 14:
      return "Beryl";
      break;
    case 15:
    case 16:
      return "Bess";
      break;
    case 17:
    case 18:
      return "Camilia";
      break;
    case 19:
    case 20:
      return "Cordelia";
      break;
    case 21:
    case 22:
      return "Daisy";
      break;
    case 23:
    case 24:
      return "Demona";
      break;
    case 25:
    case 26:
      return "Drogga";
      break;
    case 27:
    case 28:
      return "Elanor";
      break;
    case 29:
    case 30:
      return "Ella";
      break;
    case 31:
    case 32:
      return "Elsbeth";
      break;
    case 33:
    case 34:
      return "Elsina";
      break;
    case 35:
    case 36:
      return "Emerly";
      break;
    case 37:
    case 38:
      return "Foda";
      break;
    case 39:
    case 40:
      return "Gilda";
      break;
    case 41:
    case 42:
      return "Gilly";
      break;
    case 43:
    case 44:
      return "Hanna";
      break;
    case 45:
    case 46:
      return "Hilda";
      break;
    case 47:
    case 48:
      return "Hildred";
      break;
    case 49:
    case 50:
      return "Janna";
      break;
    case 51:
    case 52:
      return "Jilly";
      break;
    case 53:
    case 54:
      return "Kat";
      break;
    case 55:
    case 56:
      return "Klare";
      break;
    case 57:
    case 58:
      return "Lily";
      break;
    case 59:
    case 60:
      return "Lobelia";
      break;
    case 61:
    case 62:
      return "Lorna";
      break;
    case 63:
    case 64:
      return "Lucie";
      break;
    case 65:
    case 66:
      return "Magda";
      break;
    case 67:
    case 68:
      return "Marga";
      break;
    case 69:
    case 70:
      return "Mari";
      break;
    case 71:
    case 72:
      return "Marigold";
      break;
    case 73:
    case 74:
      return "Marka";
      break;
    case 75:
    case 76:
      return "Marlyn";
      break;
    case 77:
    case 78:
      return "Mina";
      break;
    case 79:
    case 80:
      return "Olga";
      break;
    case 81:
    case 82:
      return "Ottillia";
      break;
    case 83:
    case 84:
      return "Pansy";
      break;
    case 85:
    case 86:
      return "Pervinca";
      break;
    case 87:
    case 88:
      return "Poppy";
      break;
    case 89:
    case 90:
      return "Rose";
      break;
    case 91:
    case 92:
      return "Rowan";
      break;
    case 93:
    case 94:
      return "Salina";
      break;
    case 95:
    case 96:
      return "Tella";
      break;
    case 97:
    case 98:
      return "Ulrica";
      break;
    case 99:
    case 100:
      return "Noba"
      break;
  }
}

function getDwarfMaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Bagan";
      break;
    case 3:
    case 4:
      return "Banar";
      break;
    case 5:
    case 6:
      return "Belir";
      break;
    case 7:
    case 8:
      return "Besil";
      break;
    case 9:
    case 10:
      return "Boran";
      break;
    case 11:
    case 12:
      return "Darin";
      break;
    case 13:
    case 14:
      return "Dirin";
      break;
    case 15:
    case 16:
      return "Doibur";
      break;
    case 17:
    case 18:
      return "Doigan";
      break;
    case 19:
    case 20:
      return "Fagan";
      break;
    case 21:
    case 22:
      return "Fignus";
      break;
    case 23:
    case 24:
      return "Firin";
      break;
    case 25:
    case 26:
      return "Gesil";
      break;
    case 27:
    case 28:
      return "Glagan";
      break;
    case 29:
    case 30:
      return "Glasil";
      break;
    case 31:
    case 32:
      return "Glenus";
      break;
    case 33:
    case 34:
      return "Goirin";
      break;
    case 35:
    case 36:
      return "Gosil";
      break;
    case 37:
    case 38:
      return "Hanar";
      break;
    case 39:
    case 40:
      return "Heran";
      break;
    case 41:
    case 42:
      return "Hoibur";
      break;
    case 43:
    case 44:
      return "Hoili";
      break;
    case 45:
    case 46:
      return "Hoinar";
      break;
    case 47:
    case 48:
      return "Holir";
      break;
    case 49:
    case 50:
      return "Homli";
      break;
    case 51:
    case 52:
      return "Kimli";
      break;
    case 53:
    case 54:
      return "Koisin";
      break;
    case 55:
    case 56:
      return "Lasin";
      break;
    case 57:
    case 58:
      return "Legan";
      break;
    case 59:
    case 60:
      return "Loilir";
      break;
    case 61:
    case 62:
      return "Mirin";
      break;
    case 63:
    case 64:
      return "Moli";
      break;
    case 65:
    case 66:
      return "Nasil";
      break;
    case 67:
    case 68:
      return "Nefur";
      break;
    case 69:
    case 70:
      return "Neli";
      break;
    case 71:
    case 72:
      return "Nignar";
      break;
    case 73:
    case 74:
      return "Noifur";
      break;
    case 75:
    case 76:
      return "Ramli";
      break;
    case 77:
    case 78:
      return "Regnar";
      break;
    case 79:
    case 80:
      return "Safur";
      break;
    case 81:
    case 82:
      return "Sali";
      break;
    case 83:
    case 84:
      return "Saran";
      break;
    case 85:
    case 86:
      return "Segnar";
      break;
    case 87:
    case 88:
      return "Serin";
      break;
    case 89:
    case 90:
      return "Simli";
      break;
    case 91:
    case 92:
      return "Tasil";
      break;
    case 93:
    case 94:
      return "Teli";
      break;
    case 95:
    case 96:
      return "Tisin";
      break;
    case 97:
    case 98:
      return "Toilin";
      break;
    case 99:
    case 100:
      return "Toinus"
      break;
  }
}

function getDwarfFemaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Berin";
      break;
    case 3:
    case 4:
      return "Bibura";
      break;
    case 5:
    case 6:
      return "Bisil";
      break;
    case 7:
    case 8:
      return "Dagna";
      break;
    case 9:
    case 10:
      return "Delinia";
      break;
    case 11:
    case 12:
      return "Deris";
      break;
    case 13:
    case 14:
      return "Dira";
      break;
    case 15:
    case 16:
      return "Disia";
      break;
    case 17:
    case 18:
      return "Dorinda";
      break;
    case 19:
    case 20:
      return "Faran";
      break;
    case 21:
    case 22:
      return "Fasina";
      break;
    case 23:
    case 24:
      return "Fignis";
      break;
    case 25:
    case 26:
      return "Foifur";
      break;
    case 27:
    case 28:
      return "Foimli";
      break;
    case 29:
    case 30:
      return "Gerda";
      break;
    case 31:
    case 32:
      return "Gestis";
      break;
    case 33:
    case 34:
      return "Ginus";
      break;
    case 35:
    case 36:
      return "Glegna";
      break;
    case 37:
    case 38:
      return "Glelia";
      break;
    case 39:
    case 40:
      return "Glelis";
      break;
    case 41:
    case 42:
      return "Glemlia";
      break;
    case 43:
    case 44:
      return "Gloigas";
      break;
    case 45:
    case 46:
      return "Gloigna";
      break;
    case 47:
    case 48:
      return "Glonara";
      break;
    case 49:
    case 50:
      return "Hegna";
      break;
    case 51:
    case 52:
      return "Hignara";
      break;
    case 53:
    case 54:
      return "Hoimlis";
      break;
    case 55:
    case 56:
      return "Kana";
      break;
    case 57:
    case 58:
      return "Kemlir";
      break;
    case 59:
    case 60:
      return "Keri";
      break;
    case 61:
    case 62:
      return "Keris";
      break;
    case 63:
    case 64:
      return "Kilina";
      break;
    case 65:
    case 66:
      return "Kolina";
      break;
    case 67:
    case 68:
      return "Korana";
      break;
    case 69:
    case 70:
      return "Lifur";
      break;
    case 71:
    case 72:
      return "Loilis";
      break;
    case 73:
    case 74:
      return "Loilina";
      break;
    case 75:
    case 76:
      return "Mamli";
      break;
    case 77:
    case 78:
      return "Milina";
      break;
    case 79:
    case 80:
      return "Moibur";
      break;
    case 81:
    case 82:
      return "Moli";
      break;
    case 83:
    case 84:
      return "Noris";
      break;
    case 85:
    case 86:
      return "Nosi";
      break;
    case 87:
    case 88:
      return "Rana";
      break;
    case 89:
    case 90:
      return "Ribura";
      break;
    case 91:
    case 92:
      return "Sasilia";
      break;
    case 93:
    case 94:
      return "Soirina";
      break;
    case 95:
    case 96:
      return "Soran";
      break;
    case 97:
    case 98:
      return "Toigna";
      break;
    case 99:
    case 100:
      return "Tomlis"
      break;
  }
}

function getElfMaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Amánd";
      break;
    case 3:
    case 4:
      return "Amioril";
      break;
    case 5:
    case 6:
      return "Analad";
      break;
    case 7:
    case 8:
      return "Anin";
      break;
    case 9:
    case 10:
      return "Anumir";
      break;
    case 11:
    case 12:
      return "Calithrambor";
      break;
    case 13:
    case 14:
      return "Calóng";
      break;
    case 15:
    case 16:
      return "Calór";
      break;
    case 17:
    case 18:
      return "Cebrin";
      break;
    case 19:
    case 20:
      return "Cóldor";
      break;
    case 21:
    case 22:
      return "Corfindil";
      break;
    case 23:
    case 24:
      return "Delithran";
      break;
    case 25:
    case 26:
      return "Elithranduil";
      break;
    case 27:
    case 28:
      return "Elverion";
      break;
    case 29:
    case 30:
      return "Eowóril";
      break;
    case 31:
    case 32:
      return "Galithrar";
      break;
    case 33:
    case 34:
      return "Gelith";
      break;
    case 35:
    case 36:
      return "Gladriendil";
      break;
    case 37:
    case 38:
      return "Glamir";
      break;
    case 39:
    case 40:
      return "Glarang";
      break;
    case 41:
    case 42:
      return "Glil-Gang";
      break;
    case 43:
    case 44:
      return "Glundil";
      break;
    case 45:
    case 46:
      return "Gorfilas";
      break;
    case 47:
    case 48:
      return "Góriand";
      break;
    case 49:
    case 50:
      return "Hal";
      break;
    case 51:
    case 52:
      return "Harang";
      break;
    case 53:
    case 54:
      return "Isil-Galith";
      break;
    case 55:
    case 56:
      return "Isilith";
      break;
    case 57:
    case 58:
      return "Isónd";
      break;
    case 59:
    case 60:
      return "Isorfildur";
      break;
    case 61:
    case 62:
      return "Legaraldur";
      break;
    case 63:
    case 64:
      return "Lómebrildur";
      break;
    case 65:
    case 66:
      return "Mil-Gan";
      break;
    case 67:
    case 68:
      return "Náldur";
      break;
    case 69:
    case 70:
      return "Nelith";
      break;
    case 71:
    case 72:
      return "Niol";
      break;
    case 73:
    case 74:
      return "Porfindel";
      break;
    case 75:
    case 76:
      return "Ráldur";
      break;
    case 77:
    case 78:
      return "Silmandil";
      break;
    case 79:
    case 80:
      return "Tand";
      break;
    case 81:
    case 82:
      return "Taralad";
      break;
    case 83:
    case 84:
      return "Tararion";
      break;
    case 85:
    case 86:
      return "Tendil";
      break;
    case 87:
    case 88:
      return "Téril";
      break;
    case 89:
    case 90:
      return "Tildur";
      break;
    case 91:
    case 92:
      return "Tiniomir";
      break;
    case 93:
    case 94:
      return "Unálad";
      break;
    case 95:
    case 96:
      return "Unebrin";
      break;
    case 97:
    case 98:
      return "Unéndil";
      break;
    case 99:
    case 100:
      return "Uriong"
      break;
  }
}

function getElfFemaleName () {
  var nameRoll = rollDice(100, 1);
  switch(nameRoll) {
    case 1:
    case 2:
      return "Amidé";
      break;
    case 3:
    case 4:
      return "Anadriedia";
      break;
    case 5:
    case 6:
      return "Anarania";
      break;
    case 7:
    case 8:
      return "Anebriwien";
      break;
    case 9:
    case 10:
      return "Anilmadith";
      break;
    case 11:
    case 12:
      return "Beliniel";
      break;
    case 13:
    case 14:
      return "Calararith";
      break;
    case 15:
    case 16:
      return "Cebridith";
      break;
    case 17:
    case 18:
      return "Celénia";
      break;
    case 19:
    case 20:
      return "Celil-Gathiel";
      break;
    case 21:
    case 22:
      return "Cidien";
      break;
    case 23:
    case 24:
      return "Eäróndra";
      break;
    case 25:
    case 26:
      return "Eärorfindra";
      break;
    case 27:
    case 28:
      return "Eláthien";
      break;
    case 29:
    case 30:
      return "Eláviel";
      break;
    case 31:
    case 32:
      return "Eleniel";
      break;
    case 33:
    case 34:
      return "Elorfindra";
      break;
    case 35:
    case 36:
      return "Elváwien";
      break;
    case 37:
    case 38:
      return "Eoweclya";
      break;
    case 39:
    case 40:
      return "Eowodia";
      break;
    case 41:
    case 42:
      return "Fórith";
      break;
    case 43:
    case 44:
      return "Gilmadith";
      break;
    case 45:
    case 46:
      return "Gladrieclya";
      break;
    case 47:
    case 48:
      return "Glélindë";
      break;
    case 49:
    case 50:
      return "Gorfinia";
      break;
    case 51:
    case 52:
      return "Hadrieviel";
      break;
    case 53:
    case 54:
      return "Haniel";
      break;
    case 55:
    case 56:
      return "Hebriclya";
      break;
    case 57:
    case 58:
      return "Legithralia";
      break;
    case 59:
    case 60:
      return "Lómithrania";
      break;
    case 61:
    case 62:
      return "Meclya";
      break;
    case 63:
    case 64:
      return "Mélith";
      break;
    case 65:
    case 66:
      return "Módien";
      break;
    case 67:
    case 68:
      return "Paclya";
      break;
    case 69:
    case 70:
      return "Paradien";
      break;
    case 71:
    case 72:
      return "Pedith";
      break;
    case 73:
    case 74:
      return "Pil-Gandra";
      break;
    case 75:
    case 76:
      return "Pirith";
      break;
    case 77:
    case 78:
      return "Porficlya";
      break;
    case 79:
    case 80:
      return "Sithralindë";
      break;
    case 81:
    case 82:
      return "Thrédith";
      break;
    case 83:
    case 84:
      return "Thrilmadith";
      break;
    case 85:
    case 86:
      return "Thrithien";
      break;
    case 87:
    case 88:
      return "Throrfindra";
      break;
    case 89:
    case 90:
      return "Tilmaclya";
      break;
    case 91:
    case 92:
      return "Tilmawen";
      break;
    case 93:
    case 94:
      return "Tinilmania";
      break;
    case 95:
    case 96:
      return "Uradriethiel";
      break;
    case 97:
    case 98:
      return "Urithrarith";
      break;
    case 99:
    case 100:
      return "Urorfiviel"
      break;
  }
}

function rollFighterAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomFighterAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomFighterAppearance();
    arr[2] = randomFighterAppearance();
  }
  return arr;
}

function randomFighterAppearance () {
  var dHundred = rollDice(100, 1);
  switch (dHundred) {
    case 1:
    case 2:
      return "Big Feet";
      break;
    case 3:
    case 4:
      return "Big Mouth";
      break;
    case 5:
    case 6:
      return "Big Mustache";
      break;
    case 7:
    case 8:
      return "Notable Nose";
      break;
    case 9:
    case 10:
      return "Braided Hair";
      break;
    case 11:
    case 12:
      return "Chiseled";
      break;
    case 13:
    case 14:
      return "Clear-eyed";
      break;
    case 15:
    case 16:
      return "Cleft Chin";
      break;
    case 17:
    case 18:
      return "Broken Nose";
      break;
    case 19:
    case 20:
      return "Crooked Teeth";
      break;
    case 21:
    case 22:
      return "Curly Hair";
      break;
    case 23:
    case 24:
      return "Dark Skin";
      break;
    case 25:
    case 26:
      return "Deep Voice";
      break;
    case 27:
    case 28:
      return "Dirty";
      break;
    case 29:
    case 30:
      return "Earrings";
      break;
    case 31:
    case 32:
      return "Gap Teeth";
      break;
    case 33:
    case 34:
      return "Goatee";
      break;
    case 35:
    case 36:
      return "Headband";
      break;
    case 37:
    case 38:
      return "High Cheekbones";
      break;
    case 39:
    case 40:
      return "Hirsute";
      break;
    case 41:
    case 42:
      return "Lantern Jaw";
      break;
    case 43:
    case 44:
      return "Large Ears";
      break;
    case 45:
    case 46:
      return "Large Hands";
      break;
    case 47:
    case 48:
      return "Large Head";
      break;
    case 49:
    case 50:
      return "Long-legged";
      break;
    case 51:
    case 52:
      return "Matted Hair";
      break;
    case 53:
    case 54:
      return "Missing Eye";
      break;
    case 55:
    case 56:
      return "Missing Ear";
      break;
    case 57:
    case 58:
      return "Missing Finger";
      break;
    case 59:
    case 60:
      return "Missing Teeth";
      break;
    case 61:
    case 62:
      return "Notable Boots";
      break;
    case 63:
    case 64:
      return "Notable Helmet";
      break;
    case 65:
    case 66:
      return "Perfect Posture";
      break;
    case 67:
    case 68:
      return "Pockmarked";
      break;
    case 69:
    case 70:
      return "Raspy Voice";
      break;
    case 71:
    case 72:
      return "Rosy Cheeks";
      break;
    case 73:
    case 74:
      return "Sandals";
      break;
    case 75:
    case 76:
      return "Scarred";
      break;
    case 77:
    case 78:
      return "Tattoos";
      break;;
    case 79:
    case 80:
      return "Shaved Head";
      break;
    case 81:
    case 82:
      return "Smelly";
      break;
    case 83:
    case 84:
      return "Smiling";
      break;
    case 85:
    case 86:
      return "Squint";
      break;
    case 87:
    case 88:
      return "Steely Gaze";
      break;
    case 89:
    case 90:
      return "Stubble";
      break;
    case 91:
    case 92:
      return "Tattoos";
      break;
    case 93:
    case 94:
      return "Unsmiling";
      break;
    case 95:
    case 96:
      return "Well-scrubbed";
      break;
    case 97:
    case 98:
      return "Youthful";
      break;
    case 99:
    case 100:
      randomThiefAppearance();
      break;

  }
}

function rollThiefAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomThiefAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomThiefAppearance();
    arr[2] = randomThiefAppearance();
  }
  return arr;
}

function randomThiefAppearance () {
  var dHundred = rollDice(100, 1);
  switch (dHundred) {
    case 1:
    case 2:
      return "Broken Nose";
      break;
    case 3:
    case 4:
      return "Chin Whiskers";
      break;
    case 5:
    case 6:
      return "Clean-shaven";
      break;
    case 7:
    case 8:
      return "Clear-eyed";
      break;
    case 9:
    case 10:
      return "Crooked Teeth";
      break;
    case 11:
    case 12:
      return "Curly Hair";
      break;
    case 13:
    case 14:
      return "Dark Skin";
      break;
    case 15:
    case 16:
      return "Deep Voice";
      break;
    case 17:
    case 18:
      return "Disfigured";
      break;
    case 19:
    case 20:
      return "Disheveled";
      break;
    case 21:
    case 22:
      return "Gap Teeth";
      break;
    case 23:
    case 24:
      return "Gaunt";
      break;
    case 25:
    case 26:
      return "Goatee";
      break;
    case 27:
    case 28:
      return "Hirsute";
      break;
    case 29:
    case 30:
      return "Hooded";
      break;
    case 31:
    case 32:
      return "Limp";
      break;
    case 33:
    case 34:
      return "Little Mouth";
      break;
    case 35:
    case 36:
      return "Long Fingers";
      break;
    case 37:
    case 38:
      return "Matted Hair";
      break;
    case 39:
    case 40:
      return "Missing Eye";
      break;
    case 41:
    case 42:
      return "Missing Finger";
      break;
    case 43:
    case 44:
      return "Missing Teeth";
      break;
    case 45:
    case 46:
      return "Narrowed Eyes";
      break;
    case 47:
    case 48:
      return "Notable Footwear";
      break;
    case 49:
    case 50:
      return "Notable Gloves";
      break;
    case 51:
    case 52:
      return "Notable Cap or Hat";
      break;
    case 53:
    case 54:
      return "Notable Nose";
      break;
    case 55:
    case 56:
      return "Overbite";
      break;
    case 57:
    case 58:
      return "Pale Skin";
      break;
    case 59:
    case 60:
      return "Pencil-thin Mustache";
      break;
    case 61:
    case 62:
      return "Perfect Posture";
      break;
    case 63:
    case 64:
      return "Pockmarked";
      break;
    case 65:
    case 66:
      return "Pointy Chin";
      break;
    case 67:
    case 68:
      return "Poor Posture";
      break;
    case 69:
    case 70:
      return "Raspy Voice";
      break;
    case 71:
    case 72:
      return "Ratty Clothes";
      break;
    case 73:
    case 74:
      return "Red-rimmed Eyes";
      break;
    case 75:
    case 76:
      return "Scarred";
      break;
    case 77:
    case 78:
      return "Shifty Eyes";
      break;;
    case 79:
    case 80:
      return "Small Hands";
      break;
    case 81:
    case 82:
      return "Smelly";
      break;
    case 83:
    case 84:
      return "Squint";
      break;
    case 85:
    case 86:
      return "Stubble";
      break;
    case 87:
    case 88:
      return "Tattoos";
      break;
    case 89:
    case 90:
      return "Unsmiling";
      break;
    case 91:
    case 92:
      return "Unwashed";
      break;
    case 93:
    case 94:
      return "Well-groomed";
      break;
    case 95:
    case 96:
      return "Whispery Voice";
      break;
    case 97:
    case 98:
      return "Widow\'s Peak";
      break;
    case 99:
    case 100:
      randomMagicUserAppearance();
      break;
  }
}

function rollClericAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomClericAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomClericAppearance();
    arr[2] = randomClericAppearance();
  }
  return arr;
}

function randomClericAppearance () {
  var dHundred = rollDice(100, 1);
  switch (dHundred) {
    case 1:
    case 2:
      return "Big Feet";
      break;
    case 3:
    case 4:
      return "Blazing eyes";
      break;
    case 5:
    case 6:
      return "Bushy Eyebrows";
      break;
    case 7:
    case 8:
      return "Circlet";
      break;
    case 9:
    case 10:
      return "Clean-shaven";
      break;
    case 11:
    case 12:
      return "Clear-eyed";
      break;
    case 13:
    case 14:
      return "Cleft Chin";
      break;
    case 15:
    case 16:
      return "Crooked Teeth";
      break;
    case 17:
    case 18:
      return "Curly Hair";
      break;
    case 19:
    case 20:
      return "Dandruff";
      break;
    case 21:
    case 22:
      return "Dark Skin";
      break;
    case 23:
    case 24:
      return "Dirty";
      break;
    case 25:
    case 26:
      return "Earrings";
      break;
    case 27:
    case 28:
      return "Gaunt";
      break;
    case 29:
    case 30:
      return "Goatee";
      break;
    case 31:
    case 32:
      return "Gray Hair";
      break;
    case 33:
    case 34:
      return "Headband";
      break;
    case 35:
    case 36:
      return "Heavyset";
      break;
    case 37:
    case 38:
      return "High Forehead";
      break;
    case 39:
    case 40:
      return "Hirsute";
      break;
    case 41:
    case 42:
      return "Hooded";
      break;
    case 43:
    case 44:
      return "Large Hands";
      break;
    case 45:
    case 46:
      return "Long Beard";
      break;
    case 47:
    case 48:
      return "Missing Teeth";
      break;
    case 49:
    case 50:
      return "Miter";
      break;
    case 51:
    case 52:
      return "Notable Helmet";
      break;
    case 53:
    case 54:
      return "Notable Nose";
      break;
    case 55:
    case 56:
      return "Notable Garb";
      break;
    case 57:
    case 58:
      return "Pale Skin";
      break;
    case 59:
    case 60:
      return "Perfect Posture";
      break;
    case 61:
    case 62:
      return "Perfumed";
      break;
    case 63:
    case 64:
      return "Piercing Gaze";
      break;
    case 65:
    case 66:
      return "Pockmarked";
      break;
    case 67:
    case 68:
      return "Rosy Cheeks";
      break;
    case 69:
    case 70:
      return "Scarred";
      break;
    case 71:
    case 72:
      return "Shaved Head";
      break;
    case 73:
    case 74:
      return "Shining Eyes";
      break;
    case 75:
    case 76:
      return "Smelly";
      break;
    case 77:
    case 78:
      return "Smiling";
      break;;
    case 79:
    case 80:
      return "Square Chin";
      break;
    case 81:
    case 82:
      return "Square Shoulders";
      break;
    case 83:
    case 84:
      return "Strange Marks";
      break;
    case 85:
    case 86:
      return "Stubble";
      break;
    case 87:
    case 88:
      return "Tattoos";
      break;
    case 89:
    case 90:
      return "Thundering Voice";
      break;
    case 91:
    case 92:
      return "Tonsure";
      break;
    case 93:
    case 94:
      return "Unwashed";
      break;
    case 95:
    case 96:
      return "Warty";
      break;
    case 97:
    case 98:
      return "Well-scrubbed";
      break;
    case 99:
    case 100:
      randomFighterAppearance();
      break;
  }
}

function rollMagicUserAppearance () {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(randomMagicUserAppearance());
  }
  while (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    arr[0] = randomMagicUserAppearance();
    arr[2] = randomMagicUserAppearance();
  }
  return arr;
}

function randomMagicUserAppearance () {
  var dHundred = rollDice(100, 1);
  switch (dHundred) {
    case 1:
    case 2:
      return "Acid Scars";
      break;
    case 3:
    case 4:
      return "Aged";
      break;
    case 5:
    case 6:
      return "Bald";
      break;
    case 7:
    case 8:
      return "Black Teeth";
      break;
    case 9:
    case 10:
      return "Booming Voice";
      break;
    case 11:
    case 12:
      return "Burn Scars";
      break;
    case 13:
    case 14:
      return "Bushy Eyebrows";
      break;
    case 15:
    case 16:
      return "Chin Whiskers";
      break;
    case 17:
    case 18:
      return "Crooked Teeth";
      break;
    case 19:
    case 20:
      return "Curly Hair";
      break;
    case 21:
    case 22:
      return "Dark Skin";
      break;
    case 23:
    case 24:
      return "Disfigured";
      break;
    case 25:
    case 26:
      return "Forked Tongue";
      break;
    case 27:
    case 28:
      return "Gaunt";
      break;
    case 29:
    case 30:
      return "Glowing Eyes";
      break;
    case 31:
    case 32:
      return "Gnarled Hands";
      break;
    case 33:
    case 34:
      return "Goatee";
      break;
    case 35:
    case 36:
      return "Gray Hair";
      break;
    case 37:
    case 38:
      return "Haggard";
      break;
    case 39:
    case 40:
      return "Hairless";
      break;
    case 41:
    case 42:
      return "Headband";
      break;
    case 43:
    case 44:
      return "High Cheekbones";
      break;
    case 45:
    case 46:
      return "High Forehead";
      break;
    case 47:
    case 48:
      return "Hooded";
      break;
    case 49:
    case 50:
      return "Limp";
      break;
    case 51:
    case 52:
      return "Long Beard";
      break;
    case 53:
    case 54:
      return "Long Fingernails";
      break;
    case 55:
    case 56:
      return "Long Hair";
      break;
    case 57:
    case 58:
      return "Mismatched Eyes";
      break;
    case 59:
    case 60:
      return "Missing Teeth";
      break;
    case 61:
    case 62:
      return "No Eyebrows";
      break;
    case 63:
    case 64:
      return "Notable Nose";
      break;
    case 65:
    case 66:
      return "Notable Robes";
      break;
    case 67:
    case 68:
      return "Oily Skin";
      break;
    case 69:
    case 70:
      return "Pale Skin";
      break;
    case 71:
    case 72:
      return "Pockmarked";
      break;
    case 73:
    case 74:
      return "Pointy Hat";
      break;
    case 75:
    case 76:
      return "Poor Posture";
      break;
    case 77:
    case 78:
      return "Raspy Voice";
      break;;
    case 79:
    case 80:
      return "Scarred";
      break;
    case 81:
    case 82:
      return "Skeletal Hands";
      break;
    case 83:
    case 84:
      return "Skullcap";
      break;
    case 85:
    case 86:
      return "Smelly";
      break;
    case 87:
    case 88:
      return "Strange Marks";
      break;
    case 89:
    case 90:
      return "Sunken Eyes";
      break;
    case 91:
    case 92:
      return "Tattoos";
      break;
    case 93:
    case 94:
      return "Unwashed";
      break;
    case 95:
    case 96:
      return "Warty";
      break;
    case 97:
    case 98:
      return "White Hair";
      break;
    case 99:
    case 100:
      return "Widow\'s Peak";
      break;
  }
}

var virtueList = [
  "Ambitious",
  "Benevolent",
  "Bold",
  "Brave",
  "Charitable",
  "Chaste",
  "Cautious",
  "Compassionate",
  "Confident",
  "Considerate",
  "Cooperative",
  "Courteous",
  "Creative",
  "Curious",
  "Daring",
  "Defiant",
  "Dependable",
  "Determined",
  "Disciplined",
  "Enthusiastic",
  "Fair",
  "Focused",
  "Forgiving",
  "Friendly",
  "Frugal",
  "Funny",
  "Generous",
  "Gregarious",
  "Helpful",
  "Honest",
  "Honorable",
  "Hopeful",
  "Humble",
  "Idealistic",
  "Just",
  "Kind",
  "Loving",
  "Loyal",
  "Merciful",
  "Orderly",
  "Patient",
  "Persistent",
  "Pious",
  "Resourceful",
  "Respectful",
  "Responsible",
  "Selfless",
  "Steadfast",
  "Tactful",
  "Tolerant"
]

var viceList = [
  "Addict",
  "Aggressive",
  "Alcoholic",
  "Antagonistic",
  "Arrogant",
  "Boastful",
  "Cheater",
  "Covetous",
  "Cowardly",
  "Cruel",
  "Decadent",
  "Deceitful",
  "Disloyal",
  "Doubtful",
  "Egotistical",
  "Envious",
  "Gluttonous",
  "Greedy",
  "Hasty",
  "Hedonist",
  "Impatient",
  "Inflexible",
  "Irritable",
  "Lazy",
  "Lewd",
  "Liar",
  "Lustful",
  "Mad",
  "Malicious",
  "Manipulative",
  "Merciless",
  "Moody",
  "Murderous",
  "Obsessive",
  "Petulant",
  "Prejudiced",
  "Reckless",
  "Resentful",
  "Rude",
  "Ruthless",
  "Self-pitying",
  "Selfish",
  "Snobbish",
  "Stingy",
  "Stubborn",
  "Vain",
  "Vengeful",
  "Wasteful",
  "Wrathful",
  "Zealous"
]

function rollGear(playbook) {
  if (playbook === "Cleric") {
    rollClericGear();
  }
  else if (playbook === "Fighter") {
    rollFighterGear();
  }
  else if (playbook === "Magic-User") {
    rollMagicUserGear();
  }
  else if (playbook === "Thief") {
    rollThiefGear();
  }
}

function rollClericGear() {
  character.gear = [];
  var coin = rollDice(6, 2) + character.abilityMod.lck;
  var weaponRoll = rollDice(6, 1);
  var otherRoll = rollDice(6, 1);
  var weapon = "";
  var otherGear = ""
  switch (weaponRoll) {
    case 1:
    case 2:
      weapon = "Staff (1d4, close, 2-handed, 1wt)";
      break;
    case 3:
    case 4:
      weapon = "Mace (1d6, close, forceful, 1wt)";
      break;
    case 5:
    case 6:
      weapon = "Warhammer (1d6, close, 1 pierce, 1wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
    case 2:
      otherGear = "Shield (+1 armor, 2wt)";
      break;
    case 3:
    case 4:
      otherGear = "Leather Armor (1 armor, 2wt)";
      break;
    case 5:
    case 6:
      otherGear = "Chainmail (2 armor, 3 wt)";
      break;
    }
  character.gear = [
    "Your holy symbol (0wt)",
    "Rations (5 uses, 1wt)",
    coin + " silver pieces",
    weapon,
    otherGear
  ]
}

function rollFighterGear() {
  character.gear = [];
  var coin = rollDice(10, 1) + character.abilityMod.lck;
  var weaponRoll = rollDice(6, 1);
  var otherRoll = rollDice(6, 1);
  var otherRollAgain = rollDice(6, 1);
  var weapon = "";
  var otherGear = ""
  var otherGearAgain = "";
  switch (weaponRoll) {
    case 1:
      weapon = "Leather armor (1 armor, 1wt)";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      weapon = "Chainmail (2 armor, 3wt)";
      break;
    case 6:
      weapon = "Scale mail (3 armor, awkward, 4wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
      otherGear = "Healing potion (heal 1d8 HP, 0wt)";
      break;
    case 2:
      otherGear = "Shield (+1 armor, 2wt)";
      break;
    case 3:
      otherGear = "Poultices & herbs (2 uses mm, slow, 1wt)"
      break;
    case 4:
      otherGear = "Antitoxin (cures poison, 0wt)";
      break;
    case 5:
      otherGear = "Rations (5 uses, 1wt)"
      break;
    case 6:
      otherGear = "Adventuring gear (5 uses, 2wt)";
      break;
    }
    switch (otherRollAgain) {
      case 1:
        otherGearAgain = "Healing potion (heal 1d8 HP, 0wt)";
        break;
      case 2:
        otherGearAgain = "Shield (+1 armor, 2wt)";
        break;
      case 3:
        otherGearAgain = "Poultices & herbs (2 uses mm, slow, 1wt)"
        break;
      case 4:
        otherGearAgain = "Antitoxin (cures poison, 0wt)";
        break;
      case 5:
        otherGearAgain = "Rations (5 uses, 1wt)"
        break;
      case 6:
        otherGearAgain = "Adventuring gear (5 uses, 2wt)";
        break;
      }
  character.gear = [
    "Your favored weapon",
    "Rations (5 uses, 1wt)",
    coin + " silver pieces",
    weapon,
    otherGear,
    otherGearAgain
  ]
}

function rollThiefGear() {
  character.gear = [];
  var coin = rollDice(10, 2) + character.abilityMod.lck;
  var weaponRoll = rollDice(6, 1);
  var otherRoll = rollDice(6, 1);
  var weapon = "";
  var otherGear = ""
  switch (weaponRoll) {
    case 1:
    case 2:
      weapon = "Knife (1d4, precise, hand, 0 wt)";
      break;
    case 3:
    case 4:
      weapon = "Dagger (1d4, 1 pierce, precise, hand, 0 wt)";
      break;
    case 5:
    case 6:
      weapon = "Shortsword (1d6, close, 1 wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
    case 2:
      otherGear = "3 throwing knives (1d4, hand, close, reach, near, precise, 0 wt)";
      break;
    case 3:
    case 4:
      otherGear = "Sling (1d4, near, far, 0 wt) and sling pouch (3 ammo, 1 wt)";
      break;
    case 5:
    case 6:
      weapon = "Shortbow (1d6, near, far, 2-handed, 1 wt) and quiver (3 ammo, 1 wt)";
      break;
    }
  character.gear = [
    "Leather armor (1 armor, 1 wt)",
    "Rations (5 uses, 1wt)",
    coin + " silver pieces",
    weapon,
    otherGear
  ]
}

function rollMagicUserGear() {
  character.gear = [];
  var coin = rollDice(6, 2) + character.abilityMod.lck;
  var weaponRoll = rollDice(6, 1);
  var otherRoll = rollDice(6, 1);
  var weapon = "";
  var otherGear = ""
  switch (weaponRoll) {
    case 1:
    case 2:
      weapon = "Magic wand (+1 power, 0 wt)";
      break;
    case 3:
    case 4:
    case 5:
      weapon = "Magic staff (1d4, close, 2-handed, +1 power, 1 wt)";
      break;
    case 6:
      weapon = "Arcane orb (+2 power, 1 wt)";
      break;
    }
  switch (otherRoll) {
    case 1:
    case 2:
      otherGear = "Bag of books (5 uses, 2 wt)";
      break;
    case 3:
      otherGear = "Dagger (1d4, 1 pierce, precise, hand, 0 wt)";
      break;
    case 4:
      otherGear = "Healing potion (heal 1d8 HP, 0 weight)";
      break;
    case 5:
    case 6:
      otherGear = "Spell components (+1 power, 3 uses, 0 wt)";
      break;
    }
  character.gear = [
    "Your spellbook (1 wt)",
    "Rations (5 uses, 1 wt)",
    coin + " silver pieces",
    weapon,
    otherGear
  ]
}

//spell generator
function getSpell() {
  var roll = rollDice(10, 1);
  switch(roll) {
    case 1:
      return getElement() + " " + getForm();
    case 2:
      return getAdj() + " " + getForm();
    case 3:
      return getAdj() + " " + getElement();
    case 4:
      return getForm() + " of " + getElement();
    case 5:
      return getForm() + " of the " + getAdj() + " " + getForm();
    case 6:
      return getForm() + " of " + getAdj() + " " + getElement();
    case 7:
      return getWizardName() + "\'s " + getAdj() + " " + getForm();
    case 8:
      return getWizardName() + "\'s " + getAdj() + " " + getElement();
    case 9:
      return getWizardName() + "\'s " + getForm() + " of " + getElement();
    case 10:
      return getWizardName() + "\'s " + getElement() + " " + getForm();
  }
}

function getForm() {
  return form[rollDice(form.length - 1, 1)];
};

function getElement() {
  return element[rollDice(element.length - 1, 1)];
};

function getAdj() {
  return adjective[rollDice(adjective.length - 1, 1)];
};

function getWizardName() {
  var roll1 = rollDice(wizName1.length - 1, 1);
  var roll2 = rollDice(wizName1.length - 1, 1);
  return wizName1[roll1] + wizName2[roll2];
};

var form = [
  "Armor",
  "Arrow",
  "Aura",
  "Bane",
  "Beast",
  "Blade",
  "Blast",
  "Blessing",
  "Blob",
  "Blood",
  "Bolt",
  "Bond",
  "Boon",
  "Brain",
  "Burst",
  "Call",
  "Charm",
  "Circle",
  "Claw",
  "Cloak",
  "Cone",
  "Crown",
  "Cube",
  "Cup",
  "Curse",
  "Dagger",
  "Dart",
  "Demon",
  "Disturbance",
  "Door",
  "Eye",
  "Eyes",
  "Face",
  "Fang",
  "Feast",
  "Finger",
  "Fissure",
  "Fist",
  "Gate",
  "Gaze",
  "Glamer",
  "Globe",
  "Golem",
  "Guard",
  "Guide",
  "Guise",
  "Halo",
  "Hammer",
  "Hand",
  "Heart",
  "Helm",
  "Horn",
  "Lock",
  "Mantle",
  "Mark",
  "Memory",
  "Mind",
  "Mouth",
  "Noose",
  "Oath",
  "Oracle",
  "Pattern",
  "Pet",
  "Pillar",
  "Pocket",
  "Portal",
  "Pyramid",
  "Ray",
  "Rune",
  "Scream",
  "Seal",
  "Sentinel",
  "Servant",
  "Shaft",
  "Shield",
  "Sigil",
  "Sign",
  "Song",
  "Spear",
  "Spell",
  "Sphere",
  "Spray",
  "Staff",
  "Storm",
  "Strike",
  "Sword",
  "Tendril",
  "Tongue",
  "Tooth",
  "Trap",
  "Veil",
  "Voice",
  "Wall",
  "Ward",
  "Wave",
  "Weapon",
  "Weave",
  "Whisper",
  "Wings",
  "Word"
];

var element = [
  "Acid",
  "Aether",
  "Air",
  "Anger",
  "Ash",
  "Avarice",
  "Balance",
  "Blight",
  "Blood",
  "Bone",
  "Bones",
  "Brimstone",
  "Clay",
  "Cloud",
  "Copper",
  "Cosmos",
  "Dark",
  "Death",
  "Deceit",
  "Despair",
  "Despair",
  "Dimension",
  "Doom",
  "Dust",
  "Earth",
  "Ember",
  "Energy",
  "Envy",
  "Fear",
  "Fire",
  "Fog",
  "Force",
  "Fury",
  "Glory",
  "Gluttony",
  "Gold",
  "Greed",
  "Hate",
  "Hatred",
  "Health",
  "Heat",
  "History",
  "Hope",
  "Ice",
  "Iron",
  "Justice",
  "Knowledge",
  "Lead",
  "Lies",
  "Life",
  "Light",
  "Lightning",
  "Lore",
  "Love",
  "Lust",
  "Metal",
  "Might",
  "Mist",
  "Moon",
  "Mud",
  "Nature",
  "Oil",
  "Pain",
  "Perception",
  "Plane",
  "Plant",
  "Poison",
  "Quicksilver",
  "Revulsion",
  "Rot",
  "Salt",
  "Shadow",
  "Sight",
  "Silver",
  "Smoke",
  "Soil",
  "Soul",
  "Souls",
  "Sound",
  "Spirit",
  "Stars",
  "Steam",
  "Steel",
  "Stone",
  "Storm",
  "Sun",
  "Terror",
  "Time",
  "Treasure",
  "Truth",
  "Vanity",
  "Venom",
  "Vigor",
  "Void",
  "Water",
  "Will",
  "Wind",
  "Wisdom",
  "Wood",
  "Youth"
];

var adjective = [
  "All-Knowing",
  "All-Seeing",
  "Arcane",
  "Befuddling",
  "Binding",
  "Black",
  "Blazing",
  "Blinding",
  "Bloody",
  "Bright",
  "Cacophonous",
  "Cerulean",
  "Concealing",
  "Confusing",
  "Consuming",
  "Crimson",
  "Damnable",
  "Dark",
  "Deflecting",
  "Delicate",
  "Demonic",
  "Devastating",
  "Devilish",
  "Diminishing",
  "Draining",
  "Eldritch",
  "Empowering",
  "Enlightening",
  "Ensorcelling",
  "Entangling",
  "Enveloping",
  "Erratic",
  "Evil",
  "Excruciating",
  "Expanding",
  "Extra-Planar",
  "Fearsome",
  "Flaming",
  "Floating",
  "Freezing",
  "Glittering",
  "Gyrating",
  "Helpful",
  "Hindering",
  "Icy",
  "Illusory",
  "Incredible",
  "Inescapable",
  "Ingenious",
  "Instant",
  "Invigorating",
  "Invisible",
  "Invulnerable",
  "Liberating",
  "Maddening",
  "Magnificent",
  "Many-Colored",
  "Mighty",
  "Most Excellent",
  "Omnipotent",
  "Oozing",
  "Penultimate",
  "Pestilential",
  "Piercing",
  "Poisonous",
  "Prismatic",
  "Raging",
  "Rejuvenating",
  "Restorative",
  "Screaming",
  "Sensitive",
  "Shimmering",
  "Shining",
  "Silent",
  "Sleeping",
  "Slow",
  "Smoking",
  "Sorcerer\’s",
  "Strange",
  "Stupefying",
  "Terrible",
  "Thirsty",
  "Thundering",
  "Trans-Dimensional",
  "Transmuting",
  "Ultimate",
  "Uncontrollable",
  "Unseen",
  "Unstoppable",
  "Untiring",
  "Vengeful",
  "Vexing",
  "Violent",
  "Violet",
  "Viridian",
  "Voracious",
  "Weakening",
  "White",
  "Wondrous",
  "Yellow"
];

var wizName1 = [
  "A",
  "Ab",
  "Aga",
  "Alha",
  "Appol",
  "Apu",
  "Arne",
  "Asmo",
  "Baha",
  "Bal",
  "Barba",
  "Bol",
  "By",
  "Can",
  "Cinni",
  "Cir",
  "Cyn",
  "Cyto",
  "Dar",
  "Darg",
  "De",
  "Des",
  "Dra",
  "Dul",
  "Elez",
  "Ely",
  "Ez",
  "Fal",
  "Faral",
  "Flo",
  "Fol",
  "Gaili",
  "Garg",
  "Gast",
  "Gil",
  "Gy",
  "Haz",
  "Heca",
  "Her",
  "Hog",
  "Hur",
  "I",
  "Ik",
  "Ilde",
  "In",
  "Jas",
  "Jir",
  "Ju",
  "Krak",
  "Kul",
  "Laf",
  "Long",
  "Ma",
  "Mer",
  "Mercu",
  "Mor",
  "Mune",
  "Munno",
  "Murz",
  "Naf",
  "O",
  "Osh",
  "Pande",
  "Pander",
  "Par",
  "Per",
  "Quel",
  "Ra",
  "Ragga",
  "Rhi",
  "Satan",
  "Satur",
  "Semi",
  "Sera",
  "She",
  "Shrue",
  "Sloo",
  "Sol",
  "T\’",
  "Tcha",
  "Tol",
  "Tub",
  "Tur",
  "U",
  "Vag",
  "Val",
  "Vance",
  "Ver",
  "Vish",
  "Wa",
  "Win",
  "Xa",
  "Yu",
  "Za",
  "Zal",
  "Zan",
  "Zili",
  "Zim",
  "Zuur",
  "Zza"
];

var wizName2 = [
  "ak",
  "alto",
  "ana",
  "anti",
  "aris",
  "ark",
  "asta",
  "balia",
  "bus",
  "by",
  "cas",
  "ce",
  "derol",
  "deus",
  "din",
  "dok",
  "dor",
  "dred",
  "driar",
  "dula",
  "dun",
  "dustin",
  "er",
  "fant",
  "fia",
  "fonse",
  "gad",
  "gax",
  "glana",
  "goria",
  "goth",
  "heer",
  "houlik",
  "ia",
  "iala",
  "iana",
  "ingar",
  "ista",
  "jan",
  "jobulon",
  "kan",
  "kang",
  "konn",
  "lah",
  "leius",
  "leo",
  "leou",
  "lin",
  "lonia",
  "lonius",
  "loo",
  "lume",
  "ma",
  "mas",
  "mast",
  "mia",
  "miel",
  "motto",
  "moulian",
  "mut",
  "nak",
  "nia",
  "nish",
  "nob",
  "o",
  "ol",
  "ool",
  "pa",
  "pheus",
  "phim",
  "por",
  "quint",
  "ramis",
  "rezzin",
  "ro",
  "rrak",
  "ry",
  "sira",
  "sta",
  "te",
  "teria",
  "thakk",
  "thalon",
  "tine",
  "toomb",
  "torr",
  "troya",
  "tur",
  "tuva",
  "u",
  "valva",
  "vance",
  "vilk",
  "wink",
  "xa",
  "yop",
  "zant",
  "zark",
  "zirian",
  "zred"
];
