/*
 * use on("click") rather than click()
 * we can only add listener using jQuery 
 * on the existed element when the code is run the first time
 */

// check and uncheck a todo (not removing), trigger when click any <li> inside a <ul>
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// click on <span> to delete a todo <li>
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// create a new todo
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var todo = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todo + "</li>");

        console.log(todo);
    }
});

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
})
