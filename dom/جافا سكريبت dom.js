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
