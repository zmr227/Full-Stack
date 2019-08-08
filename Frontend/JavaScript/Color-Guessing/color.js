var colors = generateRandomColors(6);

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var color_to_guess = document.getElementById("color_to_guess");
var msg_display = document.querySelector("#msg_display");

var picked_color = pickColor();
color_to_guess.textContent = picked_color;

var reset_btn = document.querySelector("#reset");
reset_btn.addEventListener("click", function() {
    // reset message and h1 background
    msg_display.textContent = "";
    h1.style.backgroundColor = "gray";

    colors = generateRandomColors(6);
    picked_color = pickColor();
    color_to_guess.textContent = picked_color;

    // set colors to each square
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    reset_btn.textContent = "New Colors";
});

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


for (var i = 0; i < squares.length; i++) {
    // always use backgroundColor instead of background, the latter might not work in some browsers
    squares[i].style.backgroundColor = colors[i];

    // add click listeners
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor == picked_color) {
            changeAllColor(picked_color);
            h1.style.backgroundColor = picked_color;
            msg_display.textContent = "Correct!";
            reset_btn.textContent = "Play Again?";

        } else {
            this.style.backgroundColor = "gray";
            msg_display.textContent = "Try Again";
        }
    });

}