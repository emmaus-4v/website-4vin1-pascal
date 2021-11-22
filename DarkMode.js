var isDarkMode = true;

var Dark = document.styleSheets(styles.css)

function switchColors() {
    if(isDarkMode) {
        disableStylesheet()
    }
}

function disableStylesheet(SHEET) {
    SHEET.media = 'none';
}

function enableStylesheet(SHEET) {
    SHEET.media = 'visible';
}


/*
<link rel="stylesheet" href="main.css">
<link rel="stylesheet" href="light.css" media="none" id="light">
<link rel="stylesheet" href="dark.css"  media="none" id="dark">

<script>
function enableStylesheet (node) {
  node.media = '';
}

function disableStylesheet (node) {
  node.media = 'none';
}