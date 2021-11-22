
//Initial setup
var ROOT = document.documentElement;
var isDarkMode = true;

//MainSwitchColors
function switchColors() {
    //Switch variable
    switchVariable(isDarkMode);

    //Change colors
    SwitchSecondaryColor();
    SwitchTersiaryColor();
    Switch4thColor();
    SwitchTextColor();

    //Debug
    console.log("isDarkMode = " + isDarkMode);
}

function switchVariable(Var) {
    Var= !Var;

    console.log(`Switched var to ${Var}`);
}

//SwitchColor functions
function SwitchSecondaryColor() {
    if(isDarkMode = false) {
        ROOT.style.setProperty("--SecondaryColor", "rgb(40,40,40)");
    }
    else if(isDarkMode = true) {
        ROOT.style.setProperty("--SecondaryColor", "rgb(215,215,215)");
    }
}

function SwitchTersiaryColor() {
    if(isDarkMode = false) {
        ROOT.style.setProperty("--TersiaryColor", "rgb(5,5,5)");
    }
    else if(isDarkMode = true) {
        ROOT.style.setProperty("--TesiaryColor", "rgb(250,250,250)");
    }
}

function Switch4thColor() {
    if(isDarkMode = false) {
        ROOT.style.setProperty("--4thColor", "rgb(20,20,20)");
    }
    else if(isDarkMode = true) {
        ROOT.style.setProperty("--4thColor", "rgb(235,235,235)");
    }
}

function SwitchTextColor() {
    if(isDarkMode = false) {
        ROOT.style.setProperty("--TextColor", "rgb(210,210,210)");
    }
    else if(isDarkMode = true) {
        ROOT.style.setProperty("--TextColor", "rgb(45,45,45)");
    }
}

