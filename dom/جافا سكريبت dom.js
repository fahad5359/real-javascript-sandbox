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
زي ما قلنا عن الدوم انها اوبجكت هنا عطنا مثال :

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

//if we want to specfy a child we can use inddex as shown bellow
// for example we  want to target "lolo" we write:
document.querySelectorAll("p")[4]
