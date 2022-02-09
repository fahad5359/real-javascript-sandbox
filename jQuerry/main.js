// jqry is a llibrary to deal with dom html css
// why use jqry ? :jqry can replace the satandrd  js operations , is make the development proccess faster.
// when using the jQury selector it works for jQury objects ,

/* best parctice is  to write the code inside 
$(document).ready(function (){
 // CODE HERE
    $(selector).method()
        I
///////////////////////////////////  section 1///////////////////////////////////////
})
*/
// $(document).ready(function () {
//     let ii=$("#oo");

//     ii.css("color","green");
//     $("#mm").css("background-color","green");
//     console.log(ii);
// });

$(document).ready(()=> {
    // blow i ppicked  the h3 "my name  ahmad" and i  selected it using all of the css selectors, and  they all worked at the same time 
    $(".hhh3").css("color","green")
    $("#hh3").css("color","pink")
    $("h3").css("color","red")


//    let aaa=$(".hey").css("color","green")
//    aaa[1].css("color","pink")
    $("#oo").siblings().css("color","black")
});
// ///////////////////////////////////////excrsices  1/////////////////


// 3. قم بإنشاء وسم من نوع img وa كتابة في ملف HTML

// با. قم بتغي ير الرابط src الموجود بالوسم img
//  same as get elment and set elmint
// attr() is used t chnage the attribute same like "get attribute" 


// 5. قم بتغي ير ال alt الموجود بالوسم img
let img=$("#iimg").attr("alt","dog")
console.log(img);
// 6. قم بتغي ير ال id الموجود بالوسم a
let aaa=$("a").attr("id","your a")
console.log(aaa.attr("id"));

// 7. قم بتغي ير الرابط href الموجود بالوسم a
let aa=$("a").attr("href","https://login.yahoo.com/?.src=ym&lang=en-GB&done=https%3A%2F%2Fmail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAACTzPUBW94n4_JyiSz1abQdGtuEY20z0l0jPDu9k_vOUfeHpEXe0Yi4arv8-oJi2cqYk4egSTyXMVQVZS5P5yVoNy6JUlEAqP7vvH3FAl5wZE_zuCvV6_j1clJE8hVtm1V9C2K85RzusyHXN9cA_ddNDXbhXJMEA1EhPcNOxb5Um")


