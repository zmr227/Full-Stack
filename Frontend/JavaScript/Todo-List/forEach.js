// 1. define func
function myForEach1(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

// colors = ["red", "green", "blue"]
// myForEach1(colors, alert);

// myForEach1(colors, function(color) {
//     alert(color);
// })


// 2. use prototype
Array.prototype.myForEach(function(func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
})

// colors.myForEach(function(color) {
//     console.log("I love" + color);
// })
var person = {
    name: "Max",
    age: 32,
    city: "Mountain View"
};

console.log(person.name);
console.log(person["name"]);