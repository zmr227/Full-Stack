// check if jQuery sucessfully loaded
if (jQuery){
    alert("jQuery loaded!");
}

$("div").css("backgroundColor", "purple");

$(".highlight").css("width", "200px");

$("#third").css("border", "2px dashed orange");

// :first is slower than :first-of-type 
// because :first-of-type is built-in css selector while :first is jQuery shortcut
$("div:first-of-type").css("color", "pink"); 
$("div").last().css("color", "pink"); 