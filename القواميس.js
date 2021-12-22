

// objects/dectinaryes/قواميس/البرمجة الكائنية

// //////////////////////////////////////////////////////////////////// section 1 // /////////////////////////////////////////////////////////////////

let per_3 = {
    fname: "fahad",
    age: 23,
    favfood: "ml5yah",
};
// u can target the object's contnet just like an array.


// console.log(per_3["age"]);
// // let aae=fname
// console.log("fname");

// console.clear()

// Q1) make a function inside of the object to add 100 ryals to salary
// Q2) make a function inside of the object to change the first name to a givin name by the user.
// let persinfo={
//     firname: "fahad",
//     lasname: "almarri",
//     age:  23,
//     favfood: "mlokhya",
//     job: "student",
//     salary: 1000,
//     onee:function(){
//         this.salary=this.salary+100
//         // u must retuen the value for it to work...
//         return this.salary
//     },
//     chngnam:function(namm){
//         this.firname=namm
//         return namm
//     }
// };

// persinfo.onee()



// persinfo.chngnam("kaled")
// persinfo.chngnam("ali")




let profiele = {
    namee: "fahad",
    age: 23,
    hobbie: "prrograming drawing",
    food: "mlo5yah",
    salary: 5000,
    agead: function () {
        this.age = this.age - 3
        return this.age
    },
    salad: function () {
        this.salary = this.salary + 100
        return this.salary
    },
    nomch: function (aa) {
        this.namee = aa
        return aa
    }

};


// let calccc = {
//     num1: 40,
//     num2: 10,
//     num3: 14,
//     num4: 45,
//     num5: 98,
//     addd:function(){
//         return this.num1+this.num2
//     },
// };


// //////////////////////////////////////////////////////////////////// section 2 // /////////////////////////////////////////////////////////////////



// in objects we use for in.

// in arrays we used the normal for loop to access the array , but in here in the dectinary ,we are useing the for in 

let ex_1 = {
    namee: "ali",
    agge: 50,
    foesi: "ad",
}
// u can target the names of the ojects only by writing as bellow
for (const i in ex_1) {
    console.log(i);

}

let eex_2 = {
    cartype: "suv",
    price: 5,
    shape: "good",
}
// u can target the values of the ojects only by writing as bellow
for (let ii in eex_2) {
    console.log(eex_2[ii]);
}




// //////////////////////////////////////////////////////////////////// hw // /////////////////////////////////////////////////////////////////





// 1) A function that takes an object and key and return its and value

let exa = {
    val1: "empty",
    val2: "empty2",
    val3: "empty3",
};

function hhww(obj, kkey) {
    return obj[kkey]
}
hhww(exa, "val1")
hhww(exa, "val2")
hhww(exa, "val3")



// 2) A function that takes a new name and value for an object

function createNewKeyValue(obj, newKey, newValue) {
    // obj[keyName] = -value;
    obj[newKey]=newValue
  }
// 3) A function that takes a new value for the key and return its new value.

function hhww_2(obj,key,newval){
    obj[key]=newval
}


