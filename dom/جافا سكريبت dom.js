// ///////////////////////////////////////////////////////// ///////////////// section 1 ////////////////////////////////////////////////////////////
// we Use  the dom to manipulate  html and css by js
// the dom is an object.
// bellow  an example of  an object.
let persons = {
    info1: {
        namee: "fahad",
        age: 40,
        job: "student"
    },
    info2: {
        namee: "ali",
        age: 40,
        job: "piolet",
        family: {
            son: "khaled",
            doughter: "asma",
        },
    },
}
// console.log(persons.info2);

// example
/*
زي ما قلنا عن الدوم انها اوبجكت هنا عطانا مثال :

حطلي شجرة عايلة وجبلي خامس ولد.
 كلها بالوبجكت
*/


const Famillytree = {
    father: {
        son: {
            grandson: {
                grandotr: "alia",
                grandgrandson: {
                    grandotr: "asma",
                    granddgranddgranddson: {
                        grandotr: "mohra",
                        granddgranddgranddgranddson: {
                            grandotr: "aysha",
                            granddgranddgranddgranddgrandd: {
                                grandotr: "kkaddiga",

                            }
                        }
                    }
                }
            }
        }
    }
}
// from the above examplle if we wanted to pick "aysha" we would have wrote 
// Famillytree.father.son.grandson.grandgrandson.granddgranddgranddson.granddgranddgranddgranddson.grandotr
console.log(Famillytree.father.son.grandson.grandgrandson.granddgranddgranddson.granddgranddgranddgranddson.grandotr);

// ///////////////////////////////////////////////////////////

/*
if  u go to the browser and oopend  the console and  write "document", inside of it will appear the the whole html file.
So "document"  by using it we can  access the html 
*/

// ///////////////////////////////////////////////////////////

/* there are many ways we can target a spessific  elmint in the html file :
for example we  can target it by id ,by  class, and quary.and many more...
*/

document.querySelector("p")
// to select all ites with the same name we write "all"
document.querySelectorAll("p")

// ||||||| 

//when we target an item like paragraph by using the quaryall ,we get all of the paragraphs. but how can we target a spicifc paragraph? we can use  i value ,as we were using in arrayes ,examplles bellow.
// for example we  want to target "lolo" we write:
document.querySelectorAll("p")
// [p#ttst, p#p0, p#p1, p#p2, p#p3, p#wow, p#wow2, p, p, p, p, p]




// we can save the item in a js  varible
const paragraphh = document.querySelectorAll("p");
// console.log(paragraphh);
// from this we  can manoplate the elemnt  as  we want...

// another example
const llink = document.querySelector("#Lonk")



// زي ما كنا نقول فوق ان الدوم يعدل على التش تي ام ل و الس اس اس  ناخذ الينك ونغير قيمته
llink.href = "https://www.amazon.com/"
// console.log(llink);
// yes is working perfictly we manipulated the html by using js
let bao = document.querySelector("#p0")
bao.innerText = "changed"
// console.log(bao);
// Yes if u go back to the Html file u will see the second p is calledd "ahamd", we seccefully changed it and wrote "changed", usding the dom.


//#### exampples:


// 1) print all p for html

let pp1 = document.querySelector("#don")
console.log(pp1);
let pp2 = document.querySelector("#don2")
console.log(pp2);
let pp3 = document.querySelector("#don3")
console.log(pp3);
let pp4 = document.querySelector("#don4")
console.log(pp4);
let pp5 = document.querySelector("#don5")
console.log(pp5);

// 2) cahnge the second to "I am Learning dom"
pp2.innerText = "I am learing the dom"

// 3) cange the 4th to "Txt changed"
pp3.innerText = "Txt changed"


// the bellow example expalins that it counts as an array so we  can ddo the same array operations to them
let opp = document.querySelectorAll("#op")
console.log(opp);
for (let i = 0; i < opp.length; i++) {
    console.log(opp[i].innerText);
}
opp[0].innerText = "afsds"


// ///////////////////////////////////////////////////////// ///////////////// section 2 ////////////////////////////////////////////////////////////

// mostly will change in css 
// we want to manipulate the css with our js
const fahad = document.querySelector("#lolo1")
let sotyle = getComputedStyle(fahad)
// sotyle.color= rgb(255, 145, 0)
// fahad.style.color="black"
fahad.style.backgroundColor = "red"
fahad.style.fontSize = "50px"
// As shown above we were maniipulating "fahad",and palying aroundd with its properties, by using the js to maniipulating css.

//#### exampples:


// 1) print all of the p's we have  given in exa 2

// let lam=document.querySelector("#lam")
// for (let i = 0; i < lam.length; i++) {
//     console.log(lam.children[i]);
// }
console.clear()

// لا تنسا تحفظ كل الملفات قبل تطبق
let hh1=document.querySelectorAll(".hola")



