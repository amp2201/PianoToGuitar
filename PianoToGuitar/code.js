
// toggle the visibility of buttons that have the right octave and note
function toggleButton(octave, note) {

    var buttons = document.querySelectorAll('[data-octave="' + octave + '"][data-note="' + note + '"]');

    if (buttons[0].style.visibility == "hidden") {

        // toggle buttons to be visible
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "visible";
        }
        playSound(octave, note);

    } else {

        // toggle buttons to be hidden
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "hidden";
        }
    }
}

// space out the buttons along one guitar string
function spaceGuitarStringButtons(string) {

    var guitarButtons = document.querySelectorAll('[data-string="' + string + '"');
    var spacing = 0;

    for (var i = 0; i < guitarButtons.length; i++) {

        // space out each fret button manually since spacing between
        // frets is not constant
      	if (i == 0) {
      	    spacing = 0;
      	} else if (i == 1) {
      	    spacing = 3.8;
      	} else if (i == 2) {
      	    spacing = 10.75;
      	} else if (i == 3) {
      	    spacing = 17;
      	} else if (i == 4) {
      	    spacing = 22.7;
      	} else if (i == 5) {
      	    spacing = 28.35;
      	} else if (i == 6) {
      	    spacing = 33.5;
      	} else if (i == 7) {
      	    spacing = 38.5;
      	} else if (i == 8) {
      	    spacing = 43.15;
      	} else if (i == 9) {
      	    spacing = 47.5;
      	} else if (i == 10) {
      	    spacing = 51.5;
      	} else if (i == 11) {
      	    spacing = 55.25;
      	} else if (i == 12) {
      	    spacing = 59.1;
      	} else if (i == 13) {
      	    spacing = 62.6;
      	} else if (i == 14) {
      	    spacing = 65.75;
      	} else if (i == 15) {
      	    spacing = 68.77;
      	} else if (i == 16) {
      	    spacing = 71.52;
      	} else if (i == 17) {
      	    spacing = 74.18;
      	} else if (i == 18) {
      	    spacing = 76.72;
      	} else if (i == 19) {
      	    spacing = 79.25;
      	} else if (i == 20) {
      	    spacing = 81.53;
      	} else if (i == 21) {
      	    spacing = 83.55;
      	} else if (i == 22) {
      	    spacing = 85.35;
      	} else if (i == 23) {
      	    spacing = 87.05;
      	} else if (i == 24) {
      	    spacing = 88.8;
      	}

	      guitarButtons[i].style.left = spacing + "vw";
    }
}

// called when the page loads to space out all the buttons both for the guitar and piano
// and to set button visibility to hidden
function spaceAllButtons() {

    spaceGuitarStringButtons(0);
    spaceGuitarStringButtons(1);
    spaceGuitarStringButtons(2);
    spaceGuitarStringButtons(3);
    spaceGuitarStringButtons(4);
    spaceGuitarStringButtons(5);
    spaceWhiteKeyButtons();
    spaceBlackKeyButtons();

    // set button visibility to hidden
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {

        buttons[i].style.visibility = "hidden";
    }
}

// plays an audio file corresponding to the note that was clicked
function playSound(octave, note) {

    var audio = new Audio("Audio/" + octave + "," + note + ".mp3");
    audio.play();
}

// space the buttons on the white piano keys
function spaceWhiteKeyButtons() {

    var whiteKeyButtons = document.querySelectorAll('[data-key-color="white"]');
    var spacing = 6; // initial spacing of first white key button

    for (var i = 0; i < whiteKeyButtons.length; i++) {
        // whiteKeyButtons[i].style.visibility = "hidden";
	      whiteKeyButtons[i].style.left = spacing + "vw";
	      spacing = spacing + 2.573; // there is always 2.573vw spacing between 2 white key buttons
    }
}

// space the buttons on the black piano keys
function spaceBlackKeyButtons() {

    var blackKeyButtons = document.querySelectorAll('[data-key-color="black"]');
    var spacing = 9.95;

    for (var i = 0; i < blackKeyButtons.length; i = i + 5) {

        // space 5 black key buttons at a time; space one group of 3, then one group of 2
	      blackKeyButtons[i].style.left = spacing + "vw";
	      spacing = spacing + 2.562;
	      blackKeyButtons[i + 1].style.left = spacing + "vw";
        spacing = spacing + 2.562;
	      blackKeyButtons[i + 2].style.left = spacing + "vw";
        spacing = spacing + 5.13;    // larger gap between groups of black keys
	      blackKeyButtons[i + 3].style.left = spacing + "vw";
        spacing = spacing + 2.562;
	      blackKeyButtons[i + 4].style.left = spacing + "vw";
        spacing = spacing + 5.17;   // larger gap between groups of black keys
    }
}
