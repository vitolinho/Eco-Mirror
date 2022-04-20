
// Fixer les entrées par map et non en dehors.

let map = document.querySelector(".maps");
let mapImage = document.querySelector("#image-map");

let dialogueContainer = document.querySelector("#dialogue-container");
console.log("URL de la map est: " + mapImage.src)

let hero = document.querySelector(".hero");
let heroImage = document.querySelector(".hero img");

// URL of the hero different position when moving
heroImageURL = {
    fromSky: 'ressources/hero/hero-face.png',
    right: 'ressources/hero/hero-right.png',
    left: 'ressources/hero/hero-left.png',
    up: 'ressources/hero/hero-back.png',
    down: 'ressources/hero/hero-face.png'
}

heroImage.src = heroImageURL.fromSky;

// URL of images 
let mapShipURL = 'ressources/maps/map_1_ship.png';
let mapCrashURL = 'ressources/maps/map_2_crash.png';
let mapBeforeCampURL = 'ressources/maps/map_3bis_before_camp.png';
let mapCampURL = 'ressources/maps/map_4_camp.png';
let mapBeforeFinalURL = 'ressources/maps/map_3_before_final.png';
let mapFinalURL = 'ressources/maps/map_final.png';
let endGameURL = 'ressources/maps/EarthPhoto.jpeg';

let mapSeaURL = 'ressources/maps/map_2bis_sea.png';

// Entry points from html elements
let mapShipEntry = document.querySelector("#enter-map-ship");
let mapCrashEntry = document.querySelector("#enter-map-crash");
let mapBeforeCampEntry = document.querySelector("#enter-map-before-camp");
let mapCampEntry = document.querySelector("#enter-map-camp");
let mapBeforeFinalEntry = document.querySelector("#enter-map-before-final");
let mapFinalEntry = document.querySelector("#enter-map-final");
let mapFromCampEntry = document.querySelector("#enter-map-from-camp");

// Exit points from html elements
let mapShipExit = document.querySelector("#exit-map-ship");
let mapCrashExit = document.querySelector("#exit-map-crash");
let mapCrashToCampExit = document.querySelector("#exit-map-to-camp");
let mapBeforeCampExit = document.querySelector("#exit-map-before-camp");
let mapCampExit = document.querySelector("#exit-map-camp");
let mapBeforeFinalExit = document.querySelector("#exit-map-before-final");
let mapFinalExit = document.querySelector("#exit-map-final");

// PNJ positions
let pnj01 = document.querySelector("#pnj-1");
let pnj02 = document.querySelector("#pnj-2");
let pnj03 = document.querySelector("#pnj-3");

// Objects positions
let object01 = document.querySelector("#object-1");
let object02 = document.querySelector("#object-2");
let object03 = document.querySelector("#object-3");

let ligne = 1;
let colonne = 1;

function LoadGame() {

    map.style.display = "grid";
    mapImage.src = mapShipURL;
    mapShipEntry.style.display = "grid";
    mapShipExit.style.display = "grid";
    ligne = 10;
    colonne = 8;
   
    hero.style.gridRow = 10;
    hero.style.gridColumn = 8;

    console.log("la map est chargée!");
    console.log("url de la map chargée:"+mapImage.src)
    document.addEventListener('keyup', moveHeroMapShip);

    }


function GetGridPositionHero(hero) {

    let heroGridPositionRow = getComputedStyle(hero).gridRow;
    let heroGridPositionColumn = getComputedStyle(hero).gridColumn;

    let arrayHeroGridPosition = [heroGridPositionRow, heroGridPositionColumn];
    let heroGridPosition = arrayHeroGridPosition.join("").toString();
    return heroGridPosition;
}

function GetEntryGridPosition(mapName) {

    switch (mapName) {
        case "ship":
            var EntryRow = getComputedStyle(mapShipEntry).gridRow;
            var EntryCol = getComputedStyle(mapShipEntry).gridColumn;
            break;

        case "crash":
            var EntryRow = getComputedStyle(mapCrashEntry).gridRow;
            var EntryCol = getComputedStyle(mapCrashEntry).gridColumn;
            break;

        case "beforeFinal":
            var EntryRow = getComputedStyle(mapBeforeFinalEntry).gridRow;
            var EntryCol = getComputedStyle(mapBeforeFinalEntry).gridColumn;
            break;

        case "beforeCamp":
            var EntryRow = getComputedStyle(mapBeforeCampEntry).gridRow;
            var EntryCol = getComputedStyle(mapBeforeCampEntry).gridColumn;
            break;

        case "fromCamp":
            var EntryRow = getComputedStyle(mapFromCampEntry).gridRow;
            var EntryCol = getComputedStyle(mapFromCampEntry).gridColumn;
            break;
        
        case "camp":
            var EntryRow = getComputedStyle(mapCampEntry).gridRow;
            var EntryCol = getComputedStyle(mapCampEntry).gridColumn;
            break;

        case "final":
            var EntryRow = getComputedStyle(mapFinalEntry).gridRow;
            var EntryCol = getComputedStyle(mapFinalEntry).gridColumn;
            break;

        default:
            var EntryRow = getComputedStyle(mapCrashEntry).gridRow;
            var EntryCol = getComputedStyle(mapCrashEntry).gridColumn;
            break;
    }

    let ArrayEntryPosition = [EntryRow, EntryCol];
    let EntryStringPosition = ArrayEntryPosition.join("").toString();
    return EntryStringPosition

}


function GetExitGridPosition(mapName) {

    switch (mapName) {
        case "ship":
            var ExitRow = getComputedStyle(mapShipExit).gridRow;
            var ExitCol = getComputedStyle(mapShipExit).gridColumn;
            break;

        case "crash":
            var ExitRow = getComputedStyle(mapCrashExit).gridRow;
            var ExitCol = getComputedStyle(mapCrashExit).gridColumn;
            break;

        case "toCamp":
            var ExitRow = getComputedStyle(mapCrashToCampExit).gridRow;
            var ExitCol = getComputedStyle(mapCrashToCampExit).gridColumn;
            break;

        case "beforeFinal":
            var ExitRow = getComputedStyle(mapBeforeFinalExit).gridRow;
            var ExitCol = getComputedStyle(mapBeforeFinalExit).gridColumn;
            break;

        case "beforeCamp":
            var ExitRow = getComputedStyle(mapBeforeCampExit).gridRow;
            var ExitCol = getComputedStyle(mapBeforeCampExit).gridColumn;
            break;
        
        case "camp":
            var ExitRow = getComputedStyle(mapCampExit).gridRow;
            var ExitCol = getComputedStyle(mapCampExit).gridColumn;
            break;

        case "final":
            var ExitRow = getComputedStyle(mapFinalExit).gridRow;
            var ExitCol = getComputedStyle(mapFinalExit).gridColumn;
            break;

        default:
            var ExitRow = getComputedStyle(mapCrashExit).gridRow;
            var ExitCol = getComputedStyle(mapCrashExit).gridColumn;
            break;
    }

    let ArrayExitPosition = [ExitRow, ExitCol];
    let ExitStringPosition = ArrayExitPosition.join("").toString();
    return ExitStringPosition
}

function setObjectPosition(mapNumber) {

    switch (mapNumber) {

        case "1":
            object01.style.gridRow = 3;
            object01.style.gridColumn = 2;
            object02.style.gridRow = 4;
            object02.style.gridColumn = 3;
            object03.style.gridRow = 2;
            object03.style.gridColumn = 7;
            break;

        case "2":
            object01.style.gridRow = 2;
            object01.style.gridColumn = 2;
            object02.style.gridRow = 4;
            object02.style.gridColumn = 4;
            object03.style.gridRow = 6;
            object03.style.gridColumn = 6;
            break;

        case "3":
            object01.style.gridRow = 6;
            object01.style.gridColumn = 8;
            object02.style.gridRow = 9;
            object02.style.gridColumn = 10;
            object03.style.gridRow = 12;
            object03.style.gridColumn = 4;
            break;

        case "4":
            obstacle01.style.gridRow = 1;
            obstacle01.style.gridColumn = 1;
            obstacle02.style.gridRow = 3;
            obstacle02.style.gridColumn = 3;
            obstacle03.style.gridRow = 8;
            obstacle03.style.gridColumn = 8;
            break;
        
        case "5":
            obstacle01.style.gridRow = 1;
            obstacle01.style.gridColumn = 1;
            obstacle02.style.gridRow = 3;
            obstacle02.style.gridColumn = 3;
            obstacle03.style.gridRow = 8;
            obstacle03.style.gridColumn = 8;
            break;

        default:
            object01.style.display = "none";
            object02.style.display = "none";
            object03.style.display = "none";
            break;
    }
}

function setPnjPosition(mapNumber) {

    switch (mapNumber) {

        case "1":
            pnj01.style.gridRow = 3;
            pnj01.style.gridColumn = 3;
            pnj02.style.gridRow = 3;
            pnj02.style.gridColumn = 6;
            pnj03.style.gridRow = 3;
            pnj03.style.gridColumn = 8;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap;
            break;

        case "2":
            pnj01.style.gridRow = 2;
            pnj01.style.gridColumn = 2;
            pnj02.style.gridRow = 4;
            pnj02.style.gridColumn = 4;
            pnj03.style.gridRow = 6;
            pnj03.style.gridColumn = 6;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap;
            break;

        case "3":
            pnj01.style.gridRow = 6;
            pnj01.style.gridColumn = 8;
            pnj02.style.gridRow = 9;
            pnj02.style.gridColumn = 10;
            pnj03.style.gridRow = 12;
            pnj03.style.gridColumn = 4;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap;
            break;

        case "4":
            pnj01.style.gridRow = 1;
            pnj01.style.gridColumn = 1;
            pnj02.style.gridRow = 3;
            pnj02.style.gridColumn = 3;
            pnj03.style.gridRow = 8;
            pnj03.style.gridColumn = 8;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap;
            break;
        
        case "5":
            pnj01.style.gridRow = 1;
            pnj01.style.gridColumn = 1;
            pnj02.style.gridRow = 3;
            pnj02.style.gridColumn = 3;
            pnj03.style.gridRow = 8;
            pnj03.style.gridColumn = 8;
            pnjPositionMap = [pnj01, pnj02, pnj03];
            return pnjPositionMap;
            break;

        default:
            pnj01.style.display = "none";
            pnj02.style.display = "none";
            pnj03.style.display = "none";
            break;
    }
}

function changeMap() {

    heroPosition = GetGridPositionHero(hero);
    
    if (heroPosition === GetExitGridPosition("ship")) {
        console.log("ICI LA SORTIE de map ship");
        
        ligne = 8;
        colonne = 8;
        hero.style.gridRow = 8;
        hero.style.gridColumn = 8;

        mapImage.src = mapCrashURL;

        mapShipExit.style.display = "none";
        mapShipEntry.style.display = "none";
        mapCrashExit.style.display = "grid";
        mapCrashEntry.style.display = "grid";

        setObjectPosition("2");
        setPnjPosition("2");

        document.removeEventListener('keyup', moveHeroMapShip, false);
        document.removeEventListener('keyup', moveHeroMapShip, true);
        document.addEventListener('keyup', moveHeroMapCrash);



    } else if (heroPosition === GetExitGridPosition("crash")) {
        console.log("ICI LA SORTIE de map crash");
        
        ligne = 9;
        colonne = 1;
        hero.style.gridRow = 9;
        hero.style.gridColumn = 1;
        mapImage.src = mapBeforeFinalURL;

        mapCrashExit.style.display = "none";
        mapCrashEntry.style.display = "none";
        mapBeforeFinalExit.style.display = "grid";
        mapBeforeFinalEntry.style.display = "grid";
       
        document.removeEventListener('keyup', moveHeroMapCrash, false);
        document.removeEventListener('keyup', moveHeroMapCrash, true);
        document.addEventListener('keyup', moveHeroMapBeforeFinal);


    } else if (heroPosition === GetExitGridPosition("toCamp")) {
        console.log("ICI LA SORTIE de map crash");
       
        ligne = 1;
        colonne = 8;
        hero.style.gridRow = 1;
        hero.style.gridColumn = 8;

        mapImage.src = mapBeforeCampURL;
        mapBeforeFinalExit.style.display = "none";
        mapBeforeFinalEntry.style.display = "none";
        mapFinalExit.style.display = "grid";
        mapFinalEntry.style.display = "grid";

        document.removeEventListener('keyup', moveHeroMapCrash, false);
        document.removeEventListener('keyup', moveHeroMapCrash, true);
        document.addEventListener('keyup', moveHeroMapBeforeCamp);


    } else if (heroPosition === GetExitGridPosition("beforeCamp")) {
        console.log("ICI LA SORTIE de map before camp");
      
        ligne = 1;
        colonne = 9;
        hero.style.gridRow = 1;
        hero.style.gridColumn = 9;

        mapImage.src = mapCampURL;
        mapCrashExit.style.display = "none";
        mapCrashEntry.style.display = "none";
        mapCrashToCampExit.style.display = "grid";
        mapCrashToCampEntry.style.display = "grid";

        document.removeEventListener('keyup', moveHeroMapBeforeCamp, false);
        document.removeEventListener('keyup', moveHeroMapBeforeCamp, true);
        document.addEventListener('keyup', moveHeroMapCamp);

    } else if (heroPosition === GetExitGridPosition("camp")) {
        console.log("ICI LA SORTIE de map camp");
       
        ligne = 1;
        colonne = 8;
        hero.style.gridRow = 1;
        hero.style.gridColumn = 8;
        mapImage.src = mapBeforeCampURL;

        mapCrashToCampExit.style.display = "none";
        mapCrashToCampEntry.style.display = "none";
        mapCampExit.style.display = "grid";
        mapCampEntry.style.display = "grid";
        
        document.removeEventListener('keyup', moveHeroMapCamp, false);
        document.removeEventListener('keyup', moveHeroMapCamp, true);
        document.addEventListener('keyup', moveHeroMapBeforeCamp);

    } else if (heroPosition === GetExitGridPosition("toCrash")) {
        console.log("ICI LA SORTIE de map before camp");

        ligne = 15;
        colonne = 11;
        hero.style.gridRow = 15;
        hero.style.gridColumn = 11;

        mapImage.src = mapCrashURL;
        mapCrashExit.style.display = "none";
        mapCrashEntry.style.display = "none";
        mapCrashToCampExit.style.display = "grid";
        mapCrashToCampEntry.style.display = "grid";

        document.removeEventListener('keyup', moveHeroMapBeforeCamp, false);
        document.removeEventListener('keyup', moveHeroMapBeforeCamp, true);
        document.addEventListener('keyup', moveHeroMapCrash);

    } else if (heroPosition === GetExitGridPosition("beforeFinal")) {
        console.log("ICI LA SORTIE de map beforeFinal");

        ligne = 1;
        colonne = 8;
        hero.style.gridRow = 1;
        hero.style.gridColumn = 8;
        mapImage.src = mapFinalURL;

        mapCrashToCampExit.style.display = "none";
        mapCrashToCampEntry.style.display = "none";
        mapCampExit.style.display = "grid";
        mapCampEntry.style.display = "grid";
        
        document.removeEventListener('keyup', moveHeroMapBeforeFinal, false);
        document.removeEventListener('keyup', moveHeroMapBeforeFinal, true);
        document.addEventListener('keyup', moveHeroMapFinal);
    
    
    } else if (heroPosition === GetExitGridPosition("final")) {
        alert("fin du jeu");
        mapFourExit.style.display = "none";
        mapFourEntry.style.display = "none";
        hero.style.display = "none";
    
        mapImage.src = endGameURL;

    }

    // Once I enter the new map : 

    if (heroPosition === GetEntryGridPosition("crash")) {

        hero.style.gridColumn = 8;
        hero.style.gridRow = 8;
        colonne = 8;
        ligne = 8;

    } else if (heroPosition === GetEntryGridPosition("beforeFinal")) {

        colonne = 1;
        ligne = 9;
        hero.style.gridColumn = 1;
        hero.style.gridRow = 9;
        

    } else if (heroPosition === GetEntryGridPosition("final")) {
        colonne = 8;
        ligne = 1;
        hero.style.gridColumn = 8;
        hero.style.gridRow = 1;

    } else if (heroPosition === GetEntryGridPosition("beforeCamp")) {
        colonne = 8;
        ligne = 1;
        hero.style.gridColumn = 8;
        hero.style.gridRow = 1;

    } else if (heroPosition === GetEntryGridPosition("camp")) {
        colonne = 1;
        ligne = 9;
        hero.style.gridColumn = 8;
        hero.style.gridRow = 1;

    } else if (heroPosition === GetEntryGridPosition("fromCamp")) {
        colonne = 8;
        ligne = 1;
        hero.style.gridColumn = 8;
        hero.style.gridRow = 1;

    } else {
        hero.style.gridColumn = colonne;
        hero.style.gridRow = ligne;
    }

}

// Fonctions principales de mouvement


function moveHeroMapShip(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)

    obstacle = ["",""];
    pnjMeetArray = ["",""];
    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        ligne++;
                    }
                }

            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        ligne--;
                    }
                }
            }
        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne++;
                    }
                }
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne--;
                    }
                }
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the ship")

}



function moveHeroMapCrash(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstaclePurpleTrees = [
        "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c9", "r1c10", "r1c11", "r1c12", "r1c13", "r1c14", "r1c15",
        "r14c1", "r14c2", "r14c3", "r14c4", "r14c5", "r14c6", "r14c7", "r14c10", "r14c11", "r14c12", "r14c13", "r14c14", "r14c15",
        "r15c1", "r15c2", "r15c3", "r15c4", "r15c5", "r15c6", "r15c7", "r15c10", "r15c11", "r15c12", "r15c13", "r15c14", "r15c15",
        "r13c1", "r13c2", "r13c14", "r13c15", "r12c1", "r12c2", "r12c14", "r12c15", "r11c1", "r11c2", "r11c14", "r11c15", "r10c14", "r11c15",
        "r9c14", "r9c15", "r8c14", "r8c15",
        "r8c1", "r7c1", "r6c1", "r5c1", "r4c1", "r3c1", "r2c1"
    ];

    obstacleDeadTree = [
        "r3c4", "r3c10", "r3c7", "r3c11",
        "r6c2", "r6c5",
        "r8c4",
        "r6c15",
        "r10c10", "r10c11",
        "r11c3", "r11c13",
    ];

    obstacle = obstaclePurpleTrees.concat(obstacleDeadTree);


    pnjMeetArray = ["r3c3", "r3c6", "r3c8"];
    objectFoundArray = ["r3c2","r4c3","r2c7"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        ligne++;
                    }
                }

            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        ligne--;
                    }
                }
            }
        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne++;
                    }
                }
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;

                if (pnjMeetArray.includes(`r${ligne}c${colonne}`)) {
                    dialogueContainer.style.display = "block";
                    mapImage.style.opacity = 0.2;
                    pnj01.style.opacity = 0.2;
                    pnj02.style.opacity = 0.2;
                    pnj03.style.opacity = 0.2;
                    object01.style.opacity = 0.2;
                    object02.style.opacity = 0.2;
                    object03.style.opacity = 0.2;

                    if (dialogueContainer.style.display == "block") {
                        colonne--;
                    }
                }
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the crash map")

}

function moveHeroMapBeforeCamp(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = ["r2c4"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("You are on the map that is before the camp")
}


function moveHeroMapCamp(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = ["r3c4"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("Be careful, you are in \"transhuman\" camp, could be dangerous...")
}


function moveHeroMapBeforeFinal(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)

    obstacle = ["r4c4"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("IT IS MAP 4")
}


function moveHeroMapFinal(event) {

    // Enter/Exit from map to map :
    changeMap();

    let touche = event.key;

    // console.log("============ PNJ MANAGEMENT =============")


    console.log("===== HERO MOVEMENTS =======")
    console.log("--- touche pressée: ---------")
    console.log(touche)
    console.log("==== MAP URL =======")
    console.log(mapImage.src)


    obstacle = ["r3c4"];

    // fleche haut
    if (touche == "ArrowUp") {
        if (ligne > 1) {

            if ((!obstacle.includes(`r${ligne - 1}c${colonne}`))) {
                ligne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.up;
            }
        }

    }

    // fleche bas
    else if (touche == "ArrowDown") {
        if (ligne < 15) {

            if ((!obstacle.includes(`r${ligne + 1}c${colonne}`))) {
                ligne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.down;
            }

        }
    }

    // fleche gauche
    else if (touche == "ArrowLeft") {
        if (colonne > 1) {

            if ((!obstacle.includes(`r${ligne}c${colonne - 1}`))) {
                colonne--;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.left;
            }
        }
    }

    // fleche droite
    else if (touche == "ArrowRight") {
        if (colonne < 15) {

            if ((!obstacle.includes(`r${ligne}c${colonne + 1}`))) {
                colonne++;
                console.log(ligne.toString())
                heroImage.src = heroImageURL.right;
            }
        }

    }

    hero.style.gridColumn = colonne;
    hero.style.gridRow = ligne;
    console.log("IT IS MAP 3")
}






// L'évènement sur le document
window.addEventListener("load", LoadGame);






