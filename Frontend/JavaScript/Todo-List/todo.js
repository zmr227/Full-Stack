var elems = document.querySelectorAll("li");

elems.forEach(elem => {
    // add hover effect, turn to green when selected
    // it would be better to use add/remove classes instead of hardcoding the style
    elem.addEventListener("mouseover", function() {
        this.classList.add("selected");
    });

    elem.addEventListener("mouseout", function() {
        this.classList.remove("selected");
    })

    elem.addEventListener("click", function() {
        this.classList.toggle("finish");
    })
});