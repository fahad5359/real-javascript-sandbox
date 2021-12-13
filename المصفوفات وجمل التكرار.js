// function rop(lefth,righth){
//     if(lefth==="ssr"&&righth==="paper"){
//         return lefth+" "+"sser cuts paper"
//     }else if(lefth==="ssr"&&righth==="rock"){
//         return righth+" "+"rock beats ssr"
//     }else if(lefth==="paper"&&righth==="ssr"){
//         return righth+" "+"sser cuts paper"
//     }
//     else if(lefth==="paper"&&righth==="rock"){
//         return lefth+" "+"paper wins"
//     }
//     else if(lefth==="rock"&&righth==="ssr"){
//         return lefth +" "+"rock win's"
//     }
//     else if(lefth==="rock"&&righth==="paper"){
//         return righth +" "+"paper wins"
//     }else if(lefth==righth){
//         return "U need to pick sapertly"
//     }else{
//         return "u broke the game"
//     }
// }



// var deathw=["falling","got shot","drawning","stabbed"]
// // function coltd(death){
// //     if(death ==="falling"|| death==="got shot"|| death==="stabbed"||death==="drawning"){
// //         return "u are dead"
// //     }
// // }




// ///////////////////////////////////////////////////////////// SECTION 1 /////////////////////////////////////////////////////////
// arrays are used allot in programing :3



// colors[1]="hey"

// console.log(aa);
console.clear()
let arr_1 = ["fahad", "almarri", "swift", "tuwaiq-1000"]
// 1) target the second and forth array elment
arr_1[1]
arr_1[3]
// 2) change "swift" to javascript
arr_1[2] = "javascript"
// 3) give lenth of array 
arr_1.length

// console.log(arr_1);


// ///////////////////////////////////////////////////////////// SECTION 2 /////////////////////////////////////////////////////////


// unshift : to add at the begining of array index
// push : to add at end of array index

// shift : to delet first array index
// pop : to delete  end of array index

let colors_2 = ["green", "red", "blue"]

// a function that adds color at the end of our array and begining

// function del(array){
//      array.shift()
//      return array
// }

// del(colors_2)
// console.log(colors_2);

let ex_2 = ["swift", "33", "ali"]

ex_2.pop()
ex_2.push("fahad")
ex_2.shift()
ex_2.unshift("js")

function arrayadd(arr, elm) {
    arr.unshift(elm)
    return arr
}

function del_elm(a) {
    a.pop()
    return a
}

del_elm(ex_2)
arrayadd(ex_2, "programing")
arrayadd(ex_2, "java")
arrayadd(ex_2, "fad")
// console.log(ex_2);

// ///////////////////////////////////////////////////////////// SECTION 3 /////////////////////////////////////////////////////////
let meharr = ["fahad", "abdullah", "almarri"]
// for (let i=0; i<20; i++){
//     console.log(i);
// }
/*
    if u want to a for loop to access an array, u need to change the amount , to the "array.length"so it will start to access the array and its parameters... 
*/

for (arrelm = 0; arrelm < meharr.length; arrelm++) {
    // the operation of an elment accessing an array is done, soo no output?
    // we want to see the operation.
    // how? 
    // by loging  the elment that we did  inside of our chosen array as will be seen belw 
    console.log(meharr[arrelm]);
}



// ///////////////////////////////////////////////////////////// HW /////////////////////////////////////////////////////////




// 1) a function that takes an  array and return its any given index value


let aray_1 = ["fahad", "abdullah", "bakheet", "almarri"]

function returnany(arr, num) {
    return arr[num]

}

returnany(aray_1, 0)
// fahad

returnany(aray_1, 1)
// abdullah

returnany(aray_1, 2)
// bakheet

returnany(aray_1, 3)
// almarri



// 2) same as the qustion above but with givin index  of 1
let arr_2 = ["ali", "faleh", "kaled", "aldoosri"]
function returnone(arr) {
    return arr[1]
    // for first elemnt u needdd 0 not 1
}
returnone(arr_2)
returnone(aray_1)

// 3) functionthat gives length of array

function lengthar(arr) {
    arr.length
    return arr
}

lengthar(arr_1)
lengthar(arr_2)

// 4) function gives all index of an array

function allindex(arryy) {
    for (i = 0; i < arryy.length; i++) {
        console.log(arryy[i]);
        //    تم تعريف متغير واحد في الدالة وهو المصفوفة المراد اختيارها,ووضع لووب عادي .length

    }
}
allindex(arr_2);

// 5)print nomber larger than 15..

let nuomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 55,]


function largerr(arrayy) {
    //     if (arrayy > 15) {
    //         for (i = 15; i > arrayy.length; i++) {
    //             console.log(arrayy[i]);
    //         }
    //     }
    // }
    for (i = 15; i < arrayy.length; i++) {
        console.log(arrayy[i]);
    }
}
// .length .length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length.length
largerr(nuomb)


