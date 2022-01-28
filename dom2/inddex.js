// /////////////////////////// section 1 ///////////////////////////////////////////////////////

// simmilar to gettrs and setters when we want to change an attrbute , like an id ,class  ... we use getAttribute andd setAtrribute  

// Atributes are "HTML attributes are special words used inside the opening tag to control the element's behaviour", so we target them by get and setAtribute , and start manippulating its value


// getAttribute: is bringing the attribute to us like,"eturns the value of a specified attribute on the element"

// setAtrribute: is setting  the atribute with a new value."If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value."


// Here we are getting differant attributes
let barr = document.querySelector("#a1")
console.log(barr.getAttribute("id"));
console.log(barr.getAttribute("class"));

// Here we are setting differant attributes
barr.setAttribute("id", "b1")
console.log(barr.getAttribute("id"));

// as shown above we seccfully set some attributes of the id ,so setAtrribute and getAttribute is a good way to manipulte the attributes of files.

// let okf=document.querySelectorAll(".wa")
// okf[1].setAttribute("class","we")
// console.log(okf[1].getAttribute("class"));
// // class is "we"!!!   noice.



// A great example of get and set is the option when entring a password ,to choose to show the password or to hide it .


pass.setAttribute("type", "password")
// let pass=document.querySelector("#pass")
// let btn=document.querySelector("#botn")

// if(btn.onclick==true){
//     pass.setAttribute("type","text")
// }


// /////////////////// examples 1/////////////////

// قم بتغي ير الرابط src الموجود بالوسم img
let imgg = document.querySelector("#soorah")
imgg.setAttribute("src", "/dom2/marc-kleen-fLRb01yh5tI-unsplash.jpg")

// قم بتغي ير الرابط ال alt الموجود بالوسم img
imgg.setAttribute("alt", "a better imge")
console.log(imgg.getAttribute("alt"));
// output= "a better imge"

// change the id in a
let rabt=document.querySelector("#aa")
rabt.setAttribute("id","raaab6")
console.log(rabt.getAttribute("id"));
// // output= "raaab6"


// قم بتغي ير الرابط href الموجود بالوسم a

rabt.setAttribute("href","https://www.google.com/search?q=smile+meme&tbm=isch&source=iu&ictx=1&vet=1&fir=0dmtdmI6FlIJxM%252CxGhCX8mRcjM8lM%252C_%253BbgIYu1FE-THfzM%252CPgO5-KoUHqoyRM%252C_%253B-uePZXizRDtICM%252CUdx5GLtDVRzHmM%252C_%253BsdctHdKcKjdlYM%252CZiHludXctUXiAM%252C_%253BHl5Cf0RD2W_ADM%252CxULQvdAvUlGWgM%252C_%253B-dGaEqC_jGZOGM%252CXtIDHcEUmjAH6M%252C_%253BSFFpbE2r97uaLM%252CNDn7CDsH1TggDM%252C_%253BpGweeARSEOGvpM%252CcT2ZBtmI8X7BzM%252C_%253B5cHvAVIAnrbHdM%252CDKFl6ejSz99PRM%252C_%253BVW-Us4UyFXhQlM%252CLdP7Qivg5LQYxM%252C_%253BNexNQmXdMZct5M%252Cnr5wKteFkOWo9M%252C_%253BPIFxRn0WWeVoNM%252CFdrmVre3H35aRM%252C_%253By-t92DPnlEoQnM%252CmxNRdZ7FAiZXhM%252C_%253BlYDYXFatoAm6eM%252Cjit-OEeWRKHyJM%252C_%253BdY4lrkucsu2oUM%252CI4dojcUihFULfM%252C_&usg=AI4_-kQ9sX4DP5UjtwML9wyt7a9WiogpDA&sa=X&ved=2ahUKEwinjqm03M31AhWlBGMBHURYBDAQ9QF6BAgFEAE&biw=1280&bih=577&dpr=1.5#imgrc=xfjoVWcxtrr9JM")


// ///////////////////////////////////////////////////// section 2 //////////////////////////////////////

