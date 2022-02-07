// jqry is a llibrary to deal with dom html css
// when using the jQury selector it works for jQury objects ,

/* best parctice is  to write the code inside 
$(document).ready(function (){
 // CODE HERE
    $(selector).method()
        I

})
*/

$(document).ready(() => {


    let ii = $("#mm")
    let oo = $("#oo")
    oo.css("color", "green")
    //bellow is an example on how to change value of jQuery  
    console.log(ii.text("hello"));
})