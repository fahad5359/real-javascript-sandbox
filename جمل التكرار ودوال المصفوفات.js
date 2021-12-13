

// #################################################section 1############################################

let stodent = ["fahad", "kaledd", "ahamad", "aziz"]


//  a function thats welcomes each student 
function pwelcomm(a) {
    for (let i = 0; i < a.length; i++) {
        console.log("welocme" + " " + a[i]);
    }
}
pwelcomm(stodent)



let numn = [1, 2, 3, 4, 5, 67, 6]
// a function that takes eacth elmnt in an array and (- 3) of it 
// function mins(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         arr[index] = arr[index] - 3;
//     }
// }
for (let i = 0; i < numn.length; i++) {
    numn[i] = numn[i] - 5
}

console.log(numn);

/* for(the loop){
    inside the loop we can do many things not only return the i...
}
*/


// #################################################################################section 2############################################


let ex_1 = ["raghad", "khaledd", "suhaib", "asma"]

// 1) display each index length of an array

function eex1(arrray) {
    for (i = 0; i < arrray.length; i++) {
        console.log(arrray[i].length);
    }
}

eex1(ex_1)

// 2) change array elmment and add it to it..

function eex2(ary) {
    for (let i = 0; i < ary.length; i++) {
        console.log("Welcome" + " " + ary[i]);
    }
}

eex2(ex_1)

// 3) function that prints only the array elment who can be dvided on 3

let ex_2222 = [17, 15, 8, 12, 7, 25, 24]

function eex3(aryy) {
    for (let i = 0; i < aryy.length; i++) {
        // console.log("Welcome" + " " + ary[i]);
        // if(aryy[i] === 15,12,24){
        //     return aryy[i]
        // } بعد ما تحددها تحط العملية اللي تبي, array[i] لو تلاحض ان العملية غالبا تدور حول 
        if (aryy[i] % 3 === 0) {
            console.log(aryy[i]);
        }
    }
}
eex3(ex_2222)



// let ora = [3, 6, 12, 4, 5, 55, 33, 45, 43, 66, 62, 63, 24]

// function ads(b) {
//     for (let pp = 0; pp < b.length; pp++) {
//         if (b[pp] % 3 === 0) {
//             console.log(b[pp]);
//         }
//     }
// }
// ads(ora)


// #################################################################################section 3 ############################################




/* 
    فيه عمليات واجد تصير على الارايز منها عمليات راح تذكر تحت
*/

console.clear()

let ary_1 = ["ali", "asma"]
let ary_2 = ["kaled", "fahad"]
// ===============
// 1) concating(): is to add two arrays together.

let ary_3 = ary_1.concat(ary_2)

console.log(ary_3);
// ===============
// 2) reverse: is to the given array.
console.log(ary_3.reverse);

// ===============
// 3) includes(): is to look for elment in an array.
let ut_1 = console.log(ary_1.includes("fahad"));
let ut_2 = console.log(ary_2.includes("fahad"));



// ===============
// 4) join: is to  make an array a String.
let aoae = ary_3.join(' ,')
console.log(aoae);
console.log(typeof aoae);



// ===============
// 5) split: is to  make a string an array.

let spolit = aoae.split('-')
let spolit2 = aoae.split('a')
console.log(spolit);
console.log(spolit2);



// ################################################################################hw #######################################.#####



// 1) A function that takes an array and a string

let arraay_1 = ["ali", "fahad", "mohammed", "khaled", "sultan"]

function a_1(ary, wrd) {
    for (i = 0; i < ary.length; i++) {
        console.log(wrd + " " + ary[i]);
    }
}

a_1(arraay_1, "مرحبا")
console.log(a_1(arraay_1, "hello"));
console.log(a_1(arraay_1, "my name is"));

// 2) A function that takes an array and delet its last elment (we use pop).. 

function a_2(ary) {
    ary.pop();
    return ary
}
a_2(arraay_1)

// 3) A function that takes an array and a word ,and informs u if the givin word is in the array or not.


function checkIfThere(ary,wrd){
    if(ary.includes(wrd)){
        return "the Word is there"
    }else{
        return "no it is not there"
    }
}

checkIfThere(arraay_1,"ali")
// 4) A function that takes an array and do this operation (array*2) 

let mynumb=[1,2,3,4,5,6,7,10]
function drb(ary){
    /* Rule:
    if u want to pass on each index in an array use (forloop & .length)
    */
    for(let i=0;i<ary.length;i++){
        console.log(ary[i]*2);
    }
}
drb(mynumb)


// 5) A function that takes string and reterns it with split() fucctionality

let myword="how are you";
function sblt(wrd){
    wrd.split(' ')
    return wrd
}

sblt("asd asd asd")
