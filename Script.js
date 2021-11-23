
//Initial setup
var ROOT = document.documentElement;
var isDarkMode = false;

var LightMode = document.styleSheets[2];
var DarkMode = document.styleSheets[1];
 
//MainSwitchColors
function switchColors() {
    //Switch variable
    isDarkMode = !isDarkMode;
    
    //Change css file
    if(isDarkMode) {
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

