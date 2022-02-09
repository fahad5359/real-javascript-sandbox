// jqry is a llibrary to deal with dom html css
// why use jqry ? :jqry can replace the satandrd  js operations , is make the development proccess faster.
// when using the jQury selector it works for jQury objects ,

/* best parctice is  to write the code inside 
$(document).ready(function (){
 // CODE HERE
    $(selector).method()
        I

})
*/
$(document).ready(function () {
    let ii=$("#oo");

    ii.css("color","green");
    $("#mm").css("background-color","green");
    console.log(ii);
});

$(document).ready(()=> {
    // blow i ppicked  the h3 "my name  ahmad" and i  selected it using all of the css selectors, and  they all worked at the same time 
    $(".hhh3").css("color","green")
    $("#hh3").css("color","pink")
    $("h3").css("color","red")
    
});