// simmilar to gettrs and setters when we want to change an attrbute , like an id ,class  ... we use getAttribute andd setAtrribute  


// getAttribute: is bringing the attribute to us like,"eturns the value of a specified attribute on the element"

// setAtrribute: is setting  the atribute with a new value."If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value."


// Here we are getting differant attributes
let barr=document.querySelector("#a1")
console.log(barr.getAttribute("id"));
console.log(barr.getAttribute("class"));

// Here we are setting differant attributes
barr.setAttribute("id","b1")
console.log(barr.getAttribute("id"));

// as shown above we seccfully set some attributes of the id ,so setAtrribute and getAttribute is a good way to manipulte the attributes of files.

// let okf=document.querySelectorAll(".wa")
// okf[1].setAttribute("class","we")
// console.log(okf[1].getAttribute("class"));
// // class is "we"!!!   noice.
