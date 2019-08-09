// number of squares/colors
var num_square = 6;
var colors = []; //generateRandomColors(num_square);
var picked_color;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var color_to_guess = document.getElementById("color_to_guess");
var msg_display = document.querySelector("#msg_display");

var reset_btn = document.querySelector("#reset");
var mode_btns = document.querySelectorAll(".mode");

init();

function init() {
    setupModeBtn();
    setupSquares();
    reset();
}

function setupModeBtn() {
    //  mode button event listeners
    for (var i = 0; i < mode_btns.length; i++) {
        mode_btns[i].addEventListener("click", function() {
            // remove all
            mode_btns[0].classList.remove("selected");
            mode_btns[1].classList.remove("selected");
            // select current btn
            this.classList.add("selected");
            this.textContent === "Easy" ? num_square = 3 : num_square = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // always use backgroundColor instead of background, the latter might not work in some browsers
        // add click listeners
        squares[i].addEventListener("click", function() {
            if (this.style.backgroundColor == picked_color) {
                changeAllColor(picked_color);
                h1.style.backgroundColor = picked_color;
                msg_display.textContent = "Correct!";
                reset_btn.textContent = "Play Again?";

            } else {
                this.style.backgroundColor = "white";
                msg_display.textContent = "Try Again";
            }
        });
    }
}

color_to_guess.textContent = picked_color;

reset_btn.addEventListener("click", reset);

function reset() {
    // reset message and h1 background
    msg_display.textContent = "";
    h1.style.backgroundColor = "skyblue";

    colors = generateRandomColors(num_square);
    picked_color = pickColor();
    color_to_guess.textContent = picked_color;

    // set colors to each square
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    reset_btn.textContent = "New Colors";
}


// generate random color
function getRandomColor() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(Math.floor(Math.random() * 256));
    }
    return "rgb(" + arr.join(", ") + ")";
}

// generate colors
function generateRandomColors(num) {
    // make an array
    var arr = [];
    // generate colors
    for (var i = 0; i < num; i++) {
        arr.push(getRandomColor());
    }
    return arr;
}

// pick one color out of the six randomly
function pickColor() {
    var random_color = Math.floor(Math.random() * colors.length);
    return colors[random_color];
}

// once the correct color is selected, change all squares to that color
function changeAllColor(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}