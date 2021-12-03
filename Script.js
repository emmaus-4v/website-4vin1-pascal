

/*

DARK-/LIGHTMODE SWITCHER

*/

//Initial setup
const ROOT = document.documentElement;
var isDarkMode = true;

const LightMode = document.getElementById("LightMode");
const DarkMode = document.getElementById("DarkMode");

 
//MainSwitchColors
function switchColors() {
    //Switch variable
    isDarkMode = !isDarkMode;

    //Switch name
    
    
    //Change css file
    if(isDarkMode == false) {
        enableStylesheet(LightMode);
        disableStylesheet(DarkMode);

        //Switch Button name
        document.getElementById("FooterButtonID").innerHTML = "Dark Mode";
    } 
    else {
        enableStylesheet(DarkMode);
        disableStylesheet(LightMode);

        //Switch Button name
        document.getElementById("FooterButtonID").innerHTML = "Light Mode";
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
var height = String;

//Main Functions

//If you hover over an image, show text + change var
function HoverImageKnights() {
    console.log("Hovered Knights");
    document.getElementById('KnightsDivText').style.display = "block";
    lastHovered = 9;

    document.getElementById('TemporaryText').style.display = "none";
}

function HoverImageVikings() {
    console.log("Hovered Vikings")
    document.getElementById('VikingsDivText').style.display = "block";
    lastHovered = 7;

    document.getElementById('TemporaryText').style.display = "none";
}

function HoverImageSamurai() {
    console.log("Hovered Samurai")
    document.getElementById('SamuraiDivText').style.display = "block";
    lastHovered = 8;

    document.getElementById('TemporaryText').style.display = "none";
}

function HoverImageWuLin() {
    console.log("Hovered Wu Lin")
    document.getElementById('WuLinDivText').style.display = "block";
    lastHovered = 5;

    document.getElementById('TemporaryText').style.display = "none";
}


//Reload function
function reloadImages() {

    //If lasthovered isnt an image, hide the text of image
    if(lastHovered !== 9) {
    document.getElementById('KnightsDivText').style.display = "none";
    }

    if(lastHovered !== 7) {
    document.getElementById('VikingsDivText').style.display = "none";
    }

    if(lastHovered !== 8) {
    document.getElementById('SamuraiDivText').style.display = "none";
    }

    if(lastHovered !== 5) {
    document.getElementById('WuLinDivText').style.display = "none";
    }

    console.log("Last Hovered = " + lastHovered)

    //1 Row pixels * amount of rows
    height = ((37 * lastHovered) + 70);

    //Convert to useable string
    height = height + "px";
    console.log("Div height = " + height);

    //Change height of div
    document.getElementById('CV2DivTextDiv').style.height = height;

    /*
    document.getElementById('KnightsDivText').style.height = height;
    document.getElementById('VikingsDivText').style.height = height;
    document.getElementById('SamuraiDivText').style.height = height;
    document.getElementById('WuLinDivText').style.height = height;
    */
}
