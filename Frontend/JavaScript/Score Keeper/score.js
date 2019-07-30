var p1_btn = document.querySelector("#p1");
var p2_btn = document.getElementById("p2");

var reset_btn = document.getElementById("reset");
var num_input = document.querySelector('input[type="number"]');
var num_display = document.querySelector("p span");

var p1_display = document.querySelector("#p1Display");
var p2_display = document.getElementById("p2Display");

var p1_score = 0;
var p2_score = 0;

var gameOver = false;
var winning_score = 5;

p1_btn.addEventListener("click", function() {
    if (!gameOver) {
        p1_score++;
        if (p1_score === winning_score) {
            gameOver = true;
            p1_display.classList.add("winner");
        }
        p1_display.textContent = p1_score;
        p1_display.textContent.fontcolor = "green";
    } else {

    }

});

p2_btn.addEventListener("click", function() {
    if (!gameOver) {
        p2_score++;
        if (p2_score === winning_score) {
            gameOver = true;
            p2_display.classList.add("winner");
        }
        p2_display.textContent = p2_score;
    }
});

reset_btn.addEventListener("click", reset);

function reset() {
    p1_score = 0;
    p2_score = 0;

    p1_display.textContent = 0;
    p2_display.textContent = 0;

    p1_display.classList.remove("winner");
    p2_display.classList.remove("winner");

    gameOver = false;
};

num_input.addEventListener("change", function() {
    // input.value is a string, need to convert into a number otherwise === will fail
    winning_score = Number(this.value);
    num_display.textContent = this.value;

    // reset everytime we change winning score
    // otherwise if current score > winning score, it will never end.
    reset();
});