/*

DARK-/LIGHTMODE SWITCHER

*/

//Initial setup
var ROOT = document.documentElement;
var isDarkMode = true;

var LightMode = document.getElementById("LightMode");
var DarkMode = document.getElementById("DarkMode");
 
//MainSwitchColors
function switchColors() {
    //Switch variable
    isDarkMode = !isDarkMode;
    
    //Change css file
    if(isDarkMode === false) {
        enableStylesheet(LightMode);
        disableStylesheet(DarkMode);
    } 
    else {
        enableStylesheet(DarkMode);
        disableStylesheet(LightMode);
    }

    //Debug
    console.log("isDarkMode = " + isDarkMode);
}

//SwitchColor functions
function enableStylesheet (style) {
    style.media = '';
}

function disableStylesheet (style) {
    style.media = 'none';
}

/*

CHARACTERS V2 INFO SHOW ON HOVER


*/

//initial setup
var lastHovered = 0;
var ROOT = document.querySelector(':root')
var height = document.querySelector('.CV2DivText:not(.hidden)').offsetheight;

//Main Functions
function HoverImageKnights() {
    console.log("Hovered Knights");
    document.getElementById('KnightsDivText').style.visibility = "visible";
    lastHovered = 1;
}

function HoverImageVikings() {
    console.log("Hovered Vikings")
    document.getElementById('VikingsDivText').style.visibility = "visible";
    lastHovered = 2;
}

function HoverImageSamurai() {
    console.log("Hovered Samurai")
    document.getElementById('SamuraiDivText').style.visibility = "visible";
    lastHovered = 3;
}

function HoverImageWuLin() {
    console.log("Hovered Wu Lin")
    document.getElementById('WuLinDivText').style.visibility = "visible";
    lastHovered = 4;
}


//Reload function
function reloadImages() {
    if(lastHovered !== 1) {
    document.getElementById('KnightsDivText').style.visibility = "hidden";
    HeightCorrectionCV2DTD();
    }
    if(lastHovered !== 2) {
    document.getElementById('VikingsDivText').style.visibility = "hidden";
    }
    if(lastHovered !== 3) {
    document.getElementById('SamuraiDivText').style.visibility = "hidden";
    }
    if(lastHovered !== 4) {
    document.getElementById('WuLinDivText').style.visibility = "hidden";
    }

    console.log("Last Hovered = " + lastHovered)
}

//Make text get right position

function HeightCorrectionCV2DTD() {
    ROOT.style.setProperty("--CV2DivHeight", "height");
}