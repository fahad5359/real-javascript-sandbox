
// let arrrrray = [1, 2, 3, 4, 5, 6, 7]
// function ggf(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(arrrrray[i] +4);
//     }
// }

// ggf(arrrrray)

// ############################################################## section 1 ######################################## ########################################


console.clear()
// es6 //




// arrow function \\ => //

let colors = ["green", "yello", "black", "white"]
let nubeerz = [1, 3, 4, 9, 8, 5, 6]


/*.foreach 
there are two good ways we can loop through this array,
eather we use the calssic 'for loop', or we use 'foreach'

اذ نبي نسوي عمليات على الفور لوب نروح نسوي عملياتنا على
console.log(arrrrray[i] "هنا نسوي العمليات");

اما في الفور ايتش
الباراميتر اللي حطيناه يكفي..

examples bellow
*/

nubeerz.forEach((myelm) => {
    console.log(myelm + 5);
    // شايف كيف نقدر نعدل عليها بسهولة..
})




/* .Filter
فنكشن الفلتر ,بمعنى الكلمة يفلتر , طبعا الفلتر  طريقت كتابته لازم بكندشن او شرطز
بمعنا ,عندنا فنكشن يحتوي دالة فلتر, وعندنا اراي, داخل الفلتر حطينا شرط انه يمشي على الاراي و اي عدد اقل من 20 لا يجيبه, يروح يعطينا بس قيمت اللي فوق العشرين

it contains a for loop.
example bellow
*/

nubeerz.filter((eellm) => {
    return eellm >= 5
})



// ############################################################## examples  ######################################## ########################################

// 1) function tha recives a string array and print avrything insidde of it 
let loarry = ["fahadd", "fhd", "asma", "ad", "ali", "mha"]
function printalString(arry) {
    arry.forEach((arelm) => {
        console.log(arelm);
    })

}
printalString(loarry)

// 2) function that takes array andd * ther number of 2

let nmbrz = [10, 20, 1, 2, 3, 4, 40]

function moloftwo(array) {
    array.forEach((eelm) => {
        console.log(eelm * 2);
    })
}

moloftwo(nmbrz)

// 3) fucntion takes array and returns only string larger than 4 charechters only.

function charlength(arrayy) {
    let outbut = arrayy.filter((eelm) => {

        return eelm.length > 4
    })
    return outbut
    // make the filter insidde of a varibale , so u can return it inside of the same function  

}
charlength(loarry)


// 4) fucntion takes array and returns only string larger than 2 charechters only.

function largerthentwo(array) {
    let oout = array.filter((elm) => {
        return elm.length > 2
    })
    return oout
}

largerthentwo(loarry)
// ads

// ############################################################## section 2 ######################################## ########################################









