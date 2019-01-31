

var clicky = document.getElementById("clicky");
clicky.addEventListener("click", function() {
    $("#name").text(" ");
    $("#name").append(randomArrayElement(firstNameArray) + " " + randomArrayElement(lastNameArray));
    $("#personality").text(" ");
    $("#personality").text("The " + randomArrayElement(descriptor) + " " + randomArrayElement(occupation));
});


function randomArrayElement(array) {
  return array[Math.floor(Math.random()*array.length)];
};


var firstNameArray = [
  "JAMES",
  "JOHN",
  "ROBERT",
  "MICHAEL",
  "WILLIAM",
  "DAVID",
  "RICHARD",
  "CHARLES",
  "JOSEPH",
  "THOMAS",
  "CHRISTOPHER",
  "DANIEL",
  "PAUL",
  "MARK",
  "DONALD",
  "GEORGE",
  "KENNETH",
  "STEVEN",
  "EDWARD",
  "BRIAN",
  "RONALD",
  "ANTHONY",
  "KEVIN",
  "JASON",
  "MATTHEW",
  "GARY",
  "TIMOTHY",
  "JOSE",
  "LARRY",
  "JEFFREY",
  "FRANK",
  "SCOTT",
  "ERIC",
  "STEPHEN",
  "ANDREW",
  "RAYMOND",
  "GREGORY",
  "JOSHUA",
  "JERRY",
  "DENNIS",
  "WALTER",
  "PATRICK",
  "PETER",
  "HAROLD",
  "DOUGLAS",
  "HENRY",
  "CARL",
  "ARTHUR",
  "RYAN",
  "ROGER",
  "JOE",
  "JUAN",
  "JACK",
  "ALBERT",
  "JONATHAN",
  "JUSTIN",
  "TERRY",
  "GERALD",
  "KEITH",
  "SAMUEL",
  "WILLIE",
  "RALPH",
  "LAWRENCE",
  "NICHOLAS",
  "ROY",
  "BENJAMIN",
  "BRUCE",
  "BRANDON",
  "ADAM",
  "HARRY",
  "FRED",
  "WAYNE",
  "BILLY",
  "STEVE",
  "LOUIS",
  "JEREMY",
  "AARON",
  "RANDY",
  "HOWARD",
  "EUGENE",
  "CARLOS",
  "RUSSELL",
  "BOBBY",
  "VICTOR",
  "MARTIN",
  "ERNEST",
  "PHILLIP",
  "TODD",
  "JESSE",
  "CRAIG",
  "ALAN",
  "SHAWN",
  "CLARENCE",
  "SEAN",
  "PHILIP",
  "CHRIS",
  "JOHNNY",
  "EARL",
  "JIMMY",
  "ANTONIO",
  "DANNY",
  "BRYAN",
  "TONY",
  "LUIS",
  "MIKE",
  "STANLEY",
  "LEONARD",
  "NATHAN",
  "DALE",
  "MANUEL",
  "RODNEY",
  "CURTIS",
  "NORMAN",
  "ALLEN",
  "MARVIN",
  "VINCENT",
  "GLENN",
  "JEFFERY",
  "TRAVIS",
  "JEFF",
  "CHAD",
  "JACOB",
  "LEE",
  "MELVIN",
  "ALFRED",
  "KYLE",
  "FRANCIS",
  "BRADLEY",
  "JESUS",
  "HERBERT",
  "FREDERICK",
  "RAY",
  "JOEL",
  "EDWIN",
  "DON",
  "EDDIE",
  "RICKY",
  "TROY",
  "RANDALL",
  "BARRY",
  "ALEXANDER",
  "BERNARD",
  "MARIO",
  "LEROY",
  "FRANCISCO",
  "MARCUS",
  "MICHEAL",
  "THEODORE",
  "CLIFFORD",
  "MIGUEL",
  "OSCAR",
  "JAY",
  "JIM",
  "TOM",
  "CALVIN",
  "ALEX",
  "JON",
  "RONNIE",
  "BILL",
  "LLOYD",
  "TOMMY",
  "LEON",
  "DEREK",
  "WARREN",
  "DARRELL",
  "JEROME",
  "FLOYD",
  "LEO",
  "ALVIN",
  "TIM",
  "WESLEY",
  "GORDON",
  "DEAN",
  "GREG",
  "JORGE",
  "DUSTIN",
  "PEDRO",
  "DERRICK",
  "DAN",
  "LEWIS",
  "ZACHARY",
  "COREY",
  "HERMAN",
  "MAURICE",
  "VERNON",
  "ROBERTO",
  "CLYDE",
  "GLEN",
  "HECTOR",
  "SHANE",
  "RICARDO",
  "SAM",
  "RICK",
  "LESTER",
  "BRENT",
  "RAMON",
  "CHARLIE",
  "TYLER",
  "GILBERT",
  "GENE",
  "MARC",
  "REGINALD",
  "RUBEN",
  "BRETT",
  "ANGEL",
  "NATHANIEL",
  "RAFAEL",
  "LESLIE",
  "EDGAR",
  "MILTON",
  "RAUL",
  "BEN",
  "CHESTER",
  "CECIL",
  "DUANE",
  "FRANKLIN",
  "ANDRE",
  "ELMER",
  "BRAD",
  "GABRIEL",
  "RON",
  "MITCHELL",
  "ROLAND",
  "ARNOLD",
  "HARVEY",
  "JARED",
  "ADRIAN",
  "KARL",
  "CORY",
  "CLAUDE",
  "ERIK",
  "DARRYL",
  "JAMIE",
  "NEIL",
  "JESSIE",
  "CHRISTIAN",
  "JAVIER",
  "FERNANDO",
  "CLINTON",
  "TED",
  "MATHEW",
  "TYRONE",
  "DARREN",
  "LONNIE",
  "LANCE",
  "CODY",
  "JULIO",
  "KELLY",
  "KURT",
  "ALLAN",
  "NELSON",
  "GUY",
  "CLAYTON",
  "HUGH",
  "MAX",
  "DWAYNE",
  "DWIGHT",
  "ARMANDO",
  "FELIX",
  "JIMMIE",
  "EVERETT",
  "JORDAN",
  "IAN",
  "WALLACE",
  "KEN",
  "BOB",
  "JAIME",
  "CASEY",
  "ALFREDO",
  "ALBERTO",
  "DAVE",
  "IVAN",
  "JOHNNIE",
  "SIDNEY",
  "BYRON",
  "JULIAN",
  "ISAAC",
  "MORRIS",
  "CLIFTON",
  "WILLARD",
  "DARYL",
  "ROSS",
  "VIRGIL",
  "ANDY",
  "MARSHALL",
  "SALVADOR",
  "PERRY",
  "KIRK",
  "SERGIO",
  "MARION",
  "TRACY",
  "SETH",
  "KENT",
  "TERRANCE",
  "RENE",
  "EDUARDO",
  "TERRENCE",
  "ENRIQUE",
  "FREDDIE",
  "WADE",
  "MARY",
  "PATRICIA",
  "LINDA",
  "BARBARA",
  "ELIZABETH",
  "JENNIFER",
  "MARIA",
  "SUSAN",
  "MARGARET",
  "DOROTHY",
  "LISA",
  "NANCY",
  "KAREN",
  "BETTY",
  "HELEN",
  "SANDRA",
  "DONNA",
  "CAROL",
  "RUTH",
  "SHARON",
  "MICHELLE",
  "LAURA",
  "SARAH",
  "KIMBERLY",
  "DEBORAH",
  "JESSICA",
  "SHIRLEY",
  "CYNTHIA",
  "ANGELA",
  "MELISSA",
  "BRENDA",
  "AMY",
  "ANNA",
  "REBECCA",
  "VIRGINIA",
  "KATHLEEN",
  "PAMELA",
  "MARTHA",
  "DEBRA",
  "AMANDA",
  "STEPHANIE",
  "CAROLYN",
  "CHRISTINE",
  "MARIE",
  "JANET",
  "CATHERINE",
  "FRANCES",
  "ANN",
  "JOYCE",
  "DIANE",
  "ALICE",
  "JULIE",
  "HEATHER",
  "TERESA",
  "DORIS",
  "GLORIA",
  "EVELYN",
  "JEAN",
  "CHERYL",
  "MILDRED",
  "KATHERINE",
  "JOAN",
  "ASHLEY",
  "JUDITH",
  "ROSE",
  "JANICE",
  "KELLY",
  "NICOLE",
  "JUDY",
  "CHRISTINA",
  "KATHY",
  "THERESA",
  "BEVERLY",
  "DENISE",
  "TAMMY",
  "IRENE",
  "JANE",
  "LORI",
  "RACHEL",
  "MARILYN",
  "ANDREA",
  "KATHRYN",
  "LOUISE",
  "SARA",
  "ANNE",
  "JACQUELINE",
  "WANDA",
  "BONNIE",
  "JULIA",
  "RUBY",
  "LOIS",
  "TINA",
  "PHYLLIS",
  "NORMA",
  "PAULA",
  "DIANA",
  "ANNIE",
  "LILLIAN",
  "EMILY",
  "ROBIN",
  "PEGGY",
  "CRYSTAL",
  "GLADYS",
  "RITA",
  "DAWN",
  "CONNIE",
  "FLORENCE",
  "TRACY",
  "EDNA",
  "TIFFANY",
  "CARMEN",
  "ROSA",
  "CINDY",
  "GRACE",
  "WENDY",
  "VICTORIA",
  "EDITH",
  "KIM",
  "SHERRY",
  "SYLVIA",
  "JOSEPHINE",
  "THELMA",
  "SHANNON",
  "SHEILA",
  "ETHEL",
  "ELLEN",
  "ELAINE",
  "MARJORIE",
  "CARRIE",
  "CHARLOTTE",
  "MONICA",
  "ESTHER",
  "PAULINE",
  "EMMA",
  "JUANITA",
  "ANITA",
  "RHONDA",
  "HAZEL",
  "AMBER",
  "EVA",
  "DEBBIE",
  "APRIL",
  "LESLIE",
  "CLARA",
  "LUCILLE",
  "JAMIE",
  "JOANNE",
  "ELEANOR",
  "VALERIE",
  "DANIELLE",
  "MEGAN",
  "ALICIA",
  "SUZANNE",
  "MICHELE",
  "GAIL",
  "BERTHA",
  "DARLENE",
  "VERONICA",
  "JILL",
  "ERIN",
  "GERALDINE",
  "LAUREN",
  "CATHY",
  "JOANN",
  "LORRAINE",
  "LYNN",
  "SALLY",
  "REGINA",
  "ERICA",
  "BEATRICE",
  "DOLORES",
  "BERNICE",
  "AUDREY",
  "YVONNE",
  "ANNETTE",
  "JUNE",
  "SAMANTHA",
  "MARION",
  "DANA",
  "STACY",
  "ANA",
  "RENEE",
  "IDA",
  "VIVIAN",
  "ROBERTA",
  "HOLLY",
  "BRITTANY",
  "MELANIE",
  "LORETTA",
  "YOLANDA",
  "JEANETTE",
  "LAURIE",
  "KATIE",
  "KRISTEN",
  "VANESSA",
  "ALMA",
  "SUE",
  "ELSIE",
  "BETH",
  "JEANNE",
  "VICKI",
  "CARLA",
  "TARA",
  "ROSEMARY",
  "EILEEN",
  "TERRI",
  "GERTRUDE",
  "LUCY",
  "TONYA",
  "ELLA",
  "STACEY",
  "WILMA",
  "GINA",
  "KRISTIN",
  "JESSIE",
  "NATALIE",
  "AGNES",
  "VERA",
  "WILLIE",
  "CHARLENE",
  "BESSIE",
  "DELORES",
  "MELINDA",
  "PEARL",
  "ARLENE",
  "MAUREEN",
  "COLLEEN",
  "ALLISON",
  "TAMARA",
  "JOY",
  "GEORGIA",
  "CONSTANCE",
  "LILLIE",
  "CLAUDIA",
  "JACKIE",
  "MARCIA",
  "TANYA",
  "NELLIE",
  "MINNIE",
  "MARLENE",
  "HEIDI",
  "GLENDA",
  "LYDIA",
  "VIOLA",
  "COURTNEY",
  "MARIAN",
  "STELLA",
  "CAROLINE",
  "DORA",
  "JO",
  "VICKIE",
  "MATTIE",
  "TERRY",
  "MAXINE",
  "IRMA",
  "MABEL",
  "MARSHA",
  "MYRTLE",
  "LENA",
  "CHRISTY",
  "DEANNA",
  "PATSY",
  "HILDA",
  "GWENDOLYN",
  "JENNIE",
  "NORA",
  "MARGIE",
  "NINA",
  "CASSANDRA",
  "LEAH",
  "PENNY",
  "KAY",
  "PRISCILLA",
  "NAOMI",
  "CAROLE",
  "BRANDY",
  "OLGA",
  "BILLIE",
  "DIANNE",
  "TRACEY",
  "LEONA",
  "JENNY",
  "FELICIA",
  "SONIA",
  "MIRIAM",
  "VELMA",
  "BECKY",
  "BOBBIE",
  "VIOLET",
  "KRISTINA",
  "TONI",
  "MISTY",
  "MAE",
  "SHELLY",
  "DAISY",
  "RAMONA",
  "SHERRI",
  "ERIKA",
  "KATRINA"
];

var lastNameArray = [
  "SMITH",
  "JOHNSON",
  "WILLIAMS",
  "BROWN",
  "JONES",
  "MILLER",
  "DAVIS",
  "GARCIA",
  "RODRIGUEZ",
  "WILSON",
  "MARTINEZ",
  "ANDERSON",
  "TAYLOR",
  "THOMAS",
  "HERNANDEZ",
  "MOORE",
  "MARTIN",
  "JACKSON",
  "THOMPSON",
  "WHITE",
  "LOPEZ",
  "LEE",
  "GONZALEZ",
  "HARRIS",
  "CLARK",
  "LEWIS",
  "ROBINSON",
  "WALKER",
  "PEREZ",
  "HALL",
  "YOUNG",
  "ALLEN",
  "SANCHEZ",
  "WRIGHT",
  "KING",
  "SCOTT",
  "GREEN",
  "BAKER",
  "ADAMS",
  "NELSON",
  "HILL",
  "RAMIREZ",
  "CAMPBELL",
  "MITCHELL",
  "ROBERTS",
  "CARTER",
  "PHILLIPS",
  "EVANS",
  "TURNER",
  "TORRES",
  "PARKER",
  "COLLINS",
  "EDWARDS",
  "STEWART",
  "FLORES",
  "MORRIS",
  "NGUYEN",
  "MURPHY",
  "RIVERA",
  "COOK",
  "ROGERS",
  "MORGAN",
  "PETERSON",
  "COOPER",
  "REED",
  "BAILEY",
  "BELL",
  "GOMEZ",
  "KELLY",
  "HOWARD",
  "WARD",
  "COX",
  "DIAZ",
  "RICHARDSON",
  "WOOD",
  "WATSON",
  "BROOKS",
  "BENNETT",
  "GRAY",
  "JAMES",
  "REYES",
  "CRUZ",
  "HUGHES",
  "PRICE",
  "MYERS",
  "LONG",
  "FOSTER",
  "SANDERS",
  "ROSS",
  "MORALES",
  "POWELL",
  "SULLIVAN",
  "RUSSELL",
  "ORTIZ",
  "JENKINS",
  "GUTIERREZ",
  "PERRY",
  "BUTLER",
  "BARNES",
  "FISHER",
  "HENDERSON",
  "COLEMAN",
  "SIMMONS",
  "PATTERSON",
  "JORDAN",
  "REYNOLDS",
  "HAMILTON",
  "GRAHAM",
  "KIM",
  "GONZALES",
  "ALEXANDER",
  "RAMOS",
  "WALLACE",
  "GRIFFIN",
  "WEST",
  "COLE",
  "HAYES",
  "CHAVEZ",
  "GIBSON",
  "BRYANT",
  "ELLIS",
  "STEVENS",
  "MURRAY",
  "FORD",
  "MARSHALL",
  "OWENS",
  "MCDONALD",
  "HARRISON",
  "RUIZ",
  "KENNEDY",
  "WELLS",
  "ALVAREZ",
  "WOODS",
  "MENDOZA",
  "CASTILLO",
  "OLSON",
  "WEBB",
  "WASHINGTON",
  "TUCKER",
  "FREEMAN",
  "BURNS",
  "HENRY",
  "VASQUEZ",
  "SNYDER",
  "SIMPSON",
  "CRAWFORD",
  "JIMENEZ",
  "PORTER",
  "MASON",
  "SHAW",
  "GORDON",
  "WAGNER",
  "HUNTER",
  "ROMERO",
  "HICKS",
  "DIXON",
  "HUNT",
  "PALMER",
  "ROBERTSON",
  "BLACK",
  "HOLMES",
  "STONE",
  "MEYER",
  "BOYD",
  "MILLS",
  "WARREN",
  "FOX",
  "ROSE",
  "RICE",
  "MORENO",
  "SCHMIDT",
  "PATEL",
  "FERGUSON",
  "NICHOLS",
  "HERRERA",
  "MEDINA",
  "RYAN",
  "FERNANDEZ",
  "WEAVER",
  "DANIELS",
  "STEPHENS",
  "GARDNER",
  "PAYNE",
  "KELLEY",
  "DUNN",
  "PIERCE",
  "ARNOLD",
  "TRAN",
  "SPENCER",
  "PETERS",
  "HAWKINS",
  "GRANT",
  "HANSEN",
  "CASTRO",
  "HOFFMAN",
  "HART",
  "ELLIOTT",
  "CUNNINGHAM",
  "KNIGHT",
  "BRADLEY",
  "CARROLL",
  "HUDSON",
  "DUNCAN",
  "ARMSTRONG",
  "BERRY",
  "ANDREWS",
  "JOHNSTON",
  "RAY",
  "LANE",
  "RILEY",
  "CARPENTER",
  "PERKINS",
  "AGUILAR",
  "SILVA",
  "RICHARDS",
  "WILLIS",
  "MATTHEWS",
  "CHAPMAN",
  "LAWRENCE",
  "GARZA",
  "VARGAS",
  "WATKINS",
  "WHEELER",
  "LARSON",
  "CARLSON",
  "HARPER",
  "GEORGE",
  "GREENE",
  "BURKE",
  "GUZMAN",
  "MORRISON",
  "MUNOZ",
  "JACOBS",
  "OBRIEN",
  "LAWSON",
  "FRANKLIN",
  "LYNCH",
  "BISHOP",
  "CARR",
  "SALAZAR",
  "AUSTIN",
  "MENDEZ",
  "GILBERT",
  "JENSEN",
  "WILLIAMSON",
  "MONTGOMERY",
  "HARVEY",
  "OLIVER",
  "HOWELL",
  "DEAN",
  "HANSON",
  "WEBER",
  "GARRETT",
  "SIMS",
  "BURTON",
  "FULLER",
  "SOTO",
  "MCCOY",
  "WELCH",
  "CHEN",
  "SCHULTZ",
  "WALTERS",
  "REID",
  "FIELDS",
  "WALSH",
  "LITTLE",
  "FOWLER",
  "BOWMAN",
  "DAVIDSON",
  "MAY",
  "DAY",
  "SCHNEIDER",
  "NEWMAN",
  "BREWER",
  "LUCAS",
  "HOLLAND",
  "WONG",
  "BANKS",
  "SANTOS",
  "CURTIS",
  "PEARSON",
  "DELGADO",
  "VALDEZ",
  "PENA",
  "RIOS",
  "DOUGLAS",
  "SANDOVAL",
  "BARRETT",
  "HOPKINS",
  "KELLER",
  "GUERRERO",
  "STANLEY",
  "BATES",
  "ALVARADO",
  "BECK",
  "ORTEGA",
  "WADE",
  "ESTRADA",
  "CONTRERAS",
  "BARNETT",
  "CALDWELL",
  "SANTIAGO",
  "LAMBERT",
  "POWERS",
  "CHAMBERS",
  "NUNEZ",
  "CRAIG",
  "LEONARD",
  "LOWE",
  "RHODES",
  "BYRD",
  "GREGORY",
  "SHELTON",
  "FRAZIER",
  "BECKER",
  "MALDONADO",
  "FLEMING",
  "VEGA",
  "SUTTON",
  "COHEN",
  "JENNINGS",
  "PARKS",
  "MCDANIEL",
  "WATTS",
  "BARKER",
  "NORRIS",
  "VAUGHN",
  "VAZQUEZ",
  "HOLT",
  "SCHWARTZ",
  "STEELE",
  "BENSON",
  "NEAL",
  "DOMINGUEZ",
  "HORTON",
  "TERRY",
  "WOLFE",
  "HALE",
  "LYONS",
  "GRAVES",
  "HAYNES",
  "MILES",
  "PARK",
  "WARNER",
  "PADILLA",
  "BUSH",
  "THORNTON",
  "MCCARTHY",
  "MANN",
  "ZIMMERMAN",
  "ERICKSON",
  "FLETCHER",
  "MCKINNEY",
  "PAGE",
  "DAWSON",
  "JOSEPH",
  "MARQUEZ",
  "REEVES",
  "KLEIN",
  "ESPINOZA",
  "BALDWIN",
  "MORAN",
  "LOVE",
  "ROBBINS",
  "HIGGINS",
  "BALL",
  "CORTEZ",
  "LE",
  "GRIFFITH",
  "BOWEN",
  "SHARP",
  "CUMMINGS",
  "RAMSEY",
  "HARDY",
  "SWANSON",
  "BARBER",
  "ACOSTA",
  "LUNA",
  "CHANDLER",
  "DANIEL",
  "BLAIR",
  "CROSS",
  "SIMON",
  "DENNIS",
  "OCONNOR",
  "QUINN",
  "GROSS",
  "NAVARRO",
  "MOSS",
  "FITZGERALD",
  "DOYLE",
  "MCLAUGHLIN",
  "ROJAS",
  "RODGERS",
  "STEVENSON",
  "SINGH",
  "YANG",
  "FIGUEROA",
  "HARMON",
  "NEWTON",
  "PAUL",
  "MANNING",
  "GARNER",
  "MCGEE",
  "REESE",
  "FRANCIS",
  "BURGESS",
  "ADKINS",
  "GOODMAN",
  "CURRY",
  "BRADY",
  "CHRISTENSEN",
  "POTTER",
  "WALTON",
  "GOODWIN",
  "MULLINS",
  "MOLINA",
  "WEBSTER",
  "FISCHER",
  "CAMPOS",
  "AVILA",
  "SHERMAN",
  "TODD",
  "CHANG",
  "BLAKE",
  "MALONE",
  "WOLF",
  "HODGES",
  "JUAREZ",
  "GILL",
  "FARMER",
  "HINES",
  "GALLAGHER",
  "DURAN",
  "HUBBARD",
  "CANNON",
  "MIRANDA",
  "WANG",
  "SAUNDERS",
  "TATE",
  "MACK",
  "HAMMOND",
  "CARRILLO",
  "TOWNSEND",
  "WISE",
  "INGRAM",
  "BARTON",
  "MEJIA",
  "AYALA",
  "SCHROEDER",
  "HAMPTON",
  "ROWE",
  "PARSONS",
  "FRANK",
  "WATERS",
  "STRICKLAND",
  "OSBORNE",
  "MAXWELL",
  "CHAN",
  "DELEON",
  "NORMAN",
  "HARRINGTON",
  "CASEY",
  "PATTON",
  "LOGAN",
  "BOWERS",
  "MUELLER",
  "GLOVER",
  "FLOYD",
  "HARTMAN",
  "BUCHANAN",
  "COBB",
  "FRENCH",
  "KRAMER",
  "MCCORMICK",
  "CLARKE",
  "TYLER",
  "GIBBS",
  "MOODY",
  "CONNER",
  "SPARKS",
  "MCGUIRE",
  "LEON",
  "BAUER",
  "NORTON",
  "POPE",
  "FLYNN",
  "HOGAN",
  "ROBLES",
  "SALINAS",
  "YATES",
  "LINDSEY",
  "LLOYD",
  "MARSH",
  "MCBRIDE",
  "OWEN",
  "SOLIS",
  "PHAM",
  "LANG",
  "PRATT",
  "LARA",
  "BROCK",
  "BALLARD",
  "TRUJILLO",
  "SHAFFER",
  "DRAKE",
  "ROMAN",
  "AGUIRRE",
  "MORTON",
  "STOKES",
  "LAMB",
  "PACHECO",
  "PATRICK",
  "COCHRAN",
  "SHEPHERD",
  "CAIN",
  "BURNETT",
  "HESS",
  "LI",
  "CERVANTES",
  "OLSEN",
  "BRIGGS",
  "OCHOA",
  "CABRERA",
  "VELASQUEZ",
  "MONTOYA",
  "ROTH",
  "MEYERS",
  "CARDENAS",
  "FUENTES",
  "WEISS",
  "WILKINS",
  "HOOVER",
  "NICHOLSON",
  "UNDERWOOD",
  "SHORT",
  "CARSON",
  "MORROW",
  "COLON",
  "HOLLOWAY",
  "SUMMERS",
  "BRYAN",
  "PETERSEN",
  "MCKENZIE",
  "SERRANO",
  "WILCOX",
  "CAREY",
  "CLAYTON",
  "POOLE",
  "CALDERON",
  "GALLEGOS",
  "GREER",
  "RIVAS",
  "GUERRA",
  "DECKER",
  "COLLIER",
  "WALL",
  "WHITAKER",
  "BASS",
  "FLOWERS",
  "DAVENPORT",
  "CONLEY",
  "HOUSTON",
  "HUFF",
  "COPELAND",
  "HOOD",
  "MONROE",
  "MASSEY",
  "ROBERSON",
  "COMBS",
  "FRANCO",
  "LARSEN",
  "PITTMAN",
  "RANDALL",
  "SKINNER",
  "WILKINSON",
  "KIRBY",
  "CAMERON",
  "BRIDGES",
  "ANTHONY",
  "RICHARD",
  "KIRK",
  "BRUCE",
  "SINGLETON",
  "MATHIS",
  "BRADFORD",
  "BOONE",
  "ABBOTT",
  "CHARLES",
  "ALLISON",
  "SWEENEY",
  "ATKINSON",
  "HORN",
  "JEFFERSON",
  "ROSALES",
  "YORK",
  "CHRISTIAN",
  "PHELPS",
  "FARRELL",
  "CASTANEDA",
  "NASH",
  "DICKERSON",
  "BOND",
  "WYATT",
  "FOLEY",
  "CHASE",
  "GATES",
  "VINCENT",
  "MATHEWS",
  "HODGE",
  "GARRISON",
  "TREVINO",
  "VILLARREAL",
  "HEATH",
  "DALTON",
  "VALENCIA",
  "CALLAHAN",
  "HENSLEY",
  "ATKINS",
  "HUFFMAN",
  "ROY",
  "BOYER",
  "SHIELDS",
  "LIN",
  "HANCOCK",
  "GRIMES",
  "GLENN",
  "CLINE",
  "DELACRUZ",
  "CAMACHO",
  "DILLON",
  "PARRISH",
  "ONEILL",
  "MELTON",
  "BOOTH",
  "KANE",
  "BERG",
  "HARRELL",
  "PITTS",
  "SAVAGE",
  "WIGGINS",
  "BRENNAN",
  "SALAS",
  "MARKS",
  "RUSSO",
  "SAWYER",
  "BAXTER",
  "GOLDEN",
  "HUTCHINSON",
  "LIU",
  "WALTER",
  "MCDOWELL",
  "WILEY",
  "RICH",
  "HUMPHREY",
  "JOHNS",
  "KOCH",
  "SUAREZ",
  "HOBBS",
  "BEARD",
  "GILMORE",
  "IBARRA",
  "KEITH",
  "MACIAS",
  "KHAN",
  "ANDRADE",
  "WARE",
  "STEPHENSON",
  "HENSON",
  "WILKERSON",
  "DYER",
  "MCCLURE",
  "BLACKWELL",
  "MERCADO",
  "TANNER",
  "EATON",
  "CLAY",
  "BARRON",
  "BEASLEY",
  "ONEAL",
  "SMALL",
  "PRESTON",
  "WU",
  "ZAMORA",
  "MACDONALD",
  "VANCE",
  "SNOW",
  "MCCLAIN",
  "STAFFORD",
  "OROZCO",
  "BARRY",
  "ENGLISH",
  "SHANNON",
  "KLINE",
  "JACOBSON",
  "WOODARD",
  "HUANG",
  "KEMP",
  "MOSLEY",
  "PRINCE",
  "MERRITT",
  "HURST",
  "VILLANUEVA",
  "ROACH",
  "NOLAN",
  "LAM",
  "YODER",
  "MCCULLOUGH",
  "LESTER",
  "SANTANA",
  "VALENZUELA",
  "WINTERS",
  "BARRERA",
  "ORR",
  "LEACH",
  "BERGER",
  "MCKEE",
  "STRONG",
  "CONWAY",
  "STEIN",
  "WHITEHEAD",
  "BULLOCK",
  "ESCOBAR",
  "KNOX",
  "MEADOWS",
  "SOLOMON",
  "VELEZ",
  "ODONNELL",
  "KERR",
  "STOUT",
  "BLANKENSHIP",
  "BROWNING",
  "KENT",
  "LOZANO",
  "BARTLETT",
  "PRUITT",
  "BUCK",
  "BARR",
  "GAINES",
  "DURHAM",
  "GENTRY",
  "MCINTYRE",
  "SLOAN",
  "ROCHA",
  "MELENDEZ",
  "HERMAN",
  "SEXTON",
  "MOON",
  "HENDRICKS",
  "RANGEL",
  "STARK",
  "LOWERY",
  "HARDIN",
  "HULL",
  "SELLERS",
  "ELLISON",
  "CALHOUN",
  "GILLESPIE",
  "MORA",
  "KNAPP",
  "MCCALL",
  "MORSE",
  "DORSEY",
  "WEEKS",
  "NIELSEN",
  "LIVINGSTON",
  "LEBLANC",
  "MCLEAN",
  "BRADSHAW",
  "GLASS",
  "MIDDLETON",
  "BUCKLEY",
  "SCHAEFER",
  "FROST",
  "HOWE",
  "HOUSE",
  "MCINTOSH",
  "HO",
  "PENNINGTON",
  "REILLY",
  "HEBERT",
  "MCFARLAND",
  "HICKMAN",
  "NOBLE",
  "SPEARS",
  "CONRAD",
  "ARIAS",
  "GALVAN",
  "VELAZQUEZ",
  "HUYNH",
  "FREDERICK",
  "RANDOLPH",
  "CANTU",
  "FITZPATRICK",
  "MAHONEY",
  "PECK",
  "VILLA",
  "MICHAEL",
  "DONOVAN",
  "MCCONNELL",
  "WALLS",
  "BOYLE",
  "MAYER",
  "ZUNIGA",
  "GILES",
  "PINEDA",
  "PACE",
  "HURLEY",
  "MAYS",
  "MCMILLAN",
  "CROSBY",
  "AYERS",
  "CASE",
  "BENTLEY",
  "SHEPARD",
  "EVERETT",
  "PUGH",
  "DAVID",
  "MCMAHON",
  "DUNLAP",
  "BENDER",
  "HAHN",
  "HARDING",
  "ACEVEDO",
  "RAYMOND",
  "BLACKBURN",
  "DUFFY",
  "LANDRY",
  "DOUGHERTY",
  "BAUTISTA",
  "SHAH",
  "POTTS",
  "ARROYO",
  "VALENTINE",
  "MEZA",
  "GOULD",
  "VAUGHAN",
  "FRY",
  "RUSH",
  "AVERY",
  "HERRING",
  "DODSON",
  "CLEMENTS",
  "SAMPSON",
  "TAPIA",
  "BEAN",
  "LYNN",
  "CRANE",
  "FARLEY",
  "CISNEROS",
  "BENTON",
  "ASHLEY",
  "MCKAY",
  "FINLEY",
  "BEST",
  "BLEVINS",
  "FRIEDMAN",
  "MOSES",
  "SOSA",
  "BLANCHARD",
  "HUBER",
  "FRYE",
  "KRUEGER",
  "BERNARD",
  "ROSARIO",
  "RUBIO",
  "MULLEN",
  "BENJAMIN",
  "HALEY",
  "CHUNG",
  "MOYER",
  "CHOI",
  "HORNE",
  "YU",
  "WOODWARD",
  "ALI",
  "NIXON",
  "HAYDEN",
  "RIVERS",
  "ESTES",
  "MCCARTY",
  "RICHMOND",
  "STUART",
  "MAYNARD",
  "BRANDT",
  "OCONNELL",
  "HANNA",
  "SANFORD",
  "SHEPPARD",
  "CHURCH",
  "BURCH",
  "LEVY",
  "RASMUSSEN",
  "COFFEY",
  "PONCE",
  "FAULKNER",
  "DONALDSON",
  "SCHMITT",
  "NOVAK",
  "COSTA",
  "MONTES",
  "BOOKER",
  "CORDOVA",
  "WALLER",
  "ARELLANO",
  "MADDOX",
  "MATA",
  "BONILLA",
  "STANTON",
  "COMPTON",
  "KAUFMAN",
  "DUDLEY",
  "MCPHERSON",
  "BELTRAN",
  "DICKSON",
  "MCCANN",
  "VILLEGAS",
  "PROCTOR",
  "HESTER",
  "CANTRELL",
  "DAUGHERTY",
  "CHERRY",
  "BRAY",
  "DAVILA",
  "ROWLAND",
  "MADDEN",
  "LEVINE",
  "SPENCE",
  "GOOD",
  "IRWIN",
  "WERNER",
  "KRAUSE",
  "PETTY",
  "WHITNEY",
  "BAIRD",
  "HOOPER",
  "POLLARD",
  "ZAVALA",
  "JARVIS",
  "HOLDEN",
  "HENDRIX",
  "HAAS",
  "MCGRATH",
  "BIRD",
  "LUCERO",
  "TERRELL",
  "RIGGS",
  "JOYCE",
  "ROLLINS",
  "MERCER",
  "GALLOWAY",
  "DUKE",
  "ODOM",
  "ANDERSEN",
  "DOWNS",
  "HATFIELD",
  "BENITEZ",
  "ARCHER",
  "HUERTA",
  "TRAVIS",
  "MCNEIL",
  "HINTON",
  "ZHANG",
  "HAYS",
  "MAYO",
  "FRITZ",
  "BRANCH",
  "MOONEY",
  "EWING",
  "RITTER",
  "ESPARZA",
  "FREY",
  "BRAUN",
  "GAY",
  "RIDDLE",
  "HANEY",
  "KAISER",
  "HOLDER",
  "CHANEY",
  "MCKNIGHT",
  "GAMBLE",
  "VANG",
  "COOLEY",
  "CARNEY",
  "COWAN",
  "FORBES",
  "FERRELL",
  "DAVIES",
  "BARAJAS",
  "SHEA",
  "OSBORN",
  "BRIGHT",
  "CUEVAS",
  "BOLTON",
  "MURILLO",
  "LUTZ",
  "DUARTE",
  "KIDD",
  "KEY",
  "COOKE"
];

var descriptor = [
    "Adventurous",
    "Agreeable",
    "Aspiring",
    "Attractive",
    "Blind",
    "Charismatic",
    "Charming",
    "Cheerful",
    "Courageous",
    "Courteous",
    "Cultured",
    "Curious",
    "Daring",
    "Elegant",
    "Energetic",
    "Enthusiastic",
    "Forceful",
    "Forthright",
    "Freethinking",
    "Friendly",
    "Fun-loving",
    "Generous",
    "Gentle",
    "Idealistic",
    "Imaginative",
    "Kind",
    "Lovable",
    "Meticulous",
    "Optimistic",
    "Perfectionist",
    "Romantic",
    "Scholarly",
    "Sexy",
    "Shrewd",
    "Suave",
    "Absentminded",
    "Ambitious",
    "Authoritarian",
    "Chummy",
    "Competitive",
    "Emotional",
    "Freewheeling",
    "Glamorous",
    "Intense",
    "Mellow",
    "Proud",
    "Self-conscious",
    "Stubborn",
    "Angry",
    "Argumentative",
    "Arrogant",
    "Bizarre",
    "Clumsy",
    "Conceited",
    "Cowardly",
    "Crazy",
    "Crude",
    "Cruel",
    "Dishonest",
    "Egocentric",
    "Excitable",
    "Extravagant",
    "Fearful",
    "Fiery",
    "Flamboyant",
    "Forgetful",
    "Greedy",
    "Gullible",
    "Impatient",
    "Impractical",
    "Impulsive",
    "Insulting",
    "Lazy",
    "Miserable",
    "Money-minded",
    "Naive",
    "Narcissistic",
    "Obnoxious",
    "Obsessive",
    "Overimaginative",
    "Paranoid",
    "Power-hungry",
    "Pretentious",
    "Rowdy",
    "Shy",
    "Superstitious",
    "Thievish",
    "Uncooperative",
    "Zany",
    "Famous",
    "Kleptomaniac",
    "Stoned"
];

var occupation = [
  "Accountant",
  "Actor",
  "Acupuncturist",
  "Aeronautical Engineer",
  "Airplane Pilot",
  "Air Traffic Controller",
  "Archaeologist",
  "Architect",
  "Army Officer",
  "Art Teacher",
  "Author",
  "Baker",
  "Banker",
  "Bartendar",
  "Barista",
  "Tattoo Artist",
  "Botanist",
  "Bus Driver",
  "Butcher",
  "Cardiologist",
  "Carpenter",
  "Mob Boss",
  "Drug Dealer",
  "Chef",
  "Chemist",
  "Chiropractor",
  "Computer Engineer",
  "Confectionery Maker",
  "Cook",
  "Court Bailiff",
  "Cattle Farmer",
  "Dancer",
  "Drag Queen",
  "Debt Collector",
  "Delivery Driver",
  "Dental Assistant",
  "Dentist",
  "Dermatologist",
  "Dog Handler",
  "Driving Instructor",
  "Embalmer",
  "Entrepreneur",
  "Farmer",
  "Fashion Designer",
  "Fire Fighter",
  "Fitness Instructor",
  "Flight Attendant",
  "Florist",
  "Forensic Scientist",
  "Funeral Director",
  "Game Developer",
  "Geologist",
  "Hairdresser",
  "Handyperson",
  "Helicopter Pilot",
  "Historian",
  "Horse Trainer",
  "Insurance Agent",
  "Interior Designer",
  "Interpreter",
  "Jockey",
  "Journalist",
  "Judge",
  "Librarian",
  "Lifeguard",
  "Locksmith",
  "Make up Artist",
  "Marine Biologist",
  "Massage Therapist",
  "Mathematician",
  "Meteorologist",
  "Microbiologist",
  "Model",
  "Mechanic",
  "Musician",
  "Nanny",
  "Navy Sailor",
  "Neurosurgeon",
  "Nurse",
  "Optometrist",
  "Outdoor Adventure Guide",
  "Park Ranger",
  "Pastrycook",
  "Pet Groomer",
  "Photographer",
  "Politician",
  "Physical Education Teacher",
  "Physicist",
  "Plumber",
  "Podiatrist",
  "Police Officer",
  "Private Investigator",
  "Psychiatrist",
  "Psychologist",
  "Public Relations Professional",
  "Radio DJ",
  "School Principal",
  "Soldier",
  "Stunt Performer",
  "Surgeon ",
  "Athlete",
  "Talent agent",
  "Taxi driver",
  "Teacher",
  "Truck driver",
  "Veterinarian",
  "Waiter/Waitress",
  "Blogger",
  "Politician",
  "Wine maker",
  "Zoologist",
  "Hot Dog Vendor"
];

var quirk = [];
