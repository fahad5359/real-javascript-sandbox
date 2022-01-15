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
console.log(persons.info2);

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
                grandotr:"alia",
                grandgrandson: {
                    grandotr:"asma",
                    granddgranddgranddson: {
                        grandotr:"mohra",
                        granddgranddgranddgranddson: {
                            grandotr:"aysha",
                            granddgranddgranddgranddgrandd: {
                                grandotr:"kkaddiga",

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

//when we target an item like paragraph by using the quaryall ,we get all of the paragraphs. but how can we target a spicifc paragraph? we can use  index value ,as we were using in arrayes ,examplles bellow.
// for example we  want to target "lolo" we write:
document.querySelectorAll("p")
// [p#ttst, p#p0, p#p1, p#p2, p#p3, p#wow, p#wow2, p, p, p, p, p]




// we can save the item in a js  varible
const paragraphh=document.querySelectorAll("p");
console.log(paragraphh);
// from this we  can manoplate the elemnt  as  we want...

// another example
const llink=document.querySelector("#Lonk")



// زي ما كنا نقول فوق ان الدوم يعدل على التش تي ام ل و الس اس اس  ناخذ الينك ونغير قيمته
llink.href="https://www.amazon.com/"
console.log(llink);
// yes is working perfictly we manipulated the html by using js
let bao=document.querySelector("#p0")
bao.innerText="changed"
console.log(bao);
// Yes if u go back to the Html file u will see the second p is calledd "ahamd", we seccefully changed it and wrote "changed", usding the dom



// ///////////////////////////////////////////////////////// ///////////////// section 2 ////////////////////////////////////////////////////////////

