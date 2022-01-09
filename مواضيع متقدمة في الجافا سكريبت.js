
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
// let orrr1 = [40, 3, 90, 10, 88, 1, 2, 3, 4, 10, 6, 7]
// let orrr2 = ["fahad", "sfiudhi", "aaa", "aa", "bbb", "a", "n", "kkkk", "llll", "pp"]
// function fad(mm) {
//     mm.forEach((ellm)=>{
//         console.log(ellm+2);
//     })
// }

// fad(orrr1)
// ############################################################## section 2 ######################################## ########################################

/*
    In section two we are going to talke abbot "map" and  "find" 
*/

/* map
الماب ترجع اراي جديد مع تطبيق الشرط اللي حطيناه
*/
let orrr1 = [40, 3, 90, 10, 88, 1, 2, 3, 4, 10, 6, 7]

orrr1.map((elm) => {
    return elm - 50
})

// orrr1.filter((elm)=>{
//     return  elm-50
// })



/* find
الفايند يرجع  اول قيمة  عنصر تطبق الشرط  اللي حطيناه.
*/


orrr1.find((elm) => {
    return elm > 10
})
//  زي ما هو واضح فوق ,رجع اول قيمة طاببقت الشرط 

// ############################################################## examples 2  ######################################## ########################################

// 1)  دالة تقوم باستقبال مصفوفة  تتكون من أرقام وترجع مصفوفة جديدة تتكون من العنصر *2

let ex1 = [40, 3, 90, 10, 88, 1, 2, 3, 4, 10, 6, 7]

function fuunn(aaray) {
    let bb = aaray.map((elm) => {
        return elm * 2
    })
    return bb

}

fuunn(ex1)

// 2)  same as above but + 4 insead of *2
function fuunn_to(aaray) {
    let bb = aaray.map((elm) => {
        return elm * 4
    })
    return bb

}

fuunn_to(ex1)
// console.log(funn(ex_1));





// 3)) retrun first numbber of array that accespts  mulltiplecation on 5 .


function fuunn_the(array) {
    let gg= array.find((eelm) => {
        // اذا كنا نريد معرفت  ان هذا الرقم يقبل القسمة على رقم اخر  ,نستعمل باقي القسمة ,اذا كان =0 يقبل اذا=1 لا يقبل
        return eelm % 5 === 0
    })
    return gg
}
fuunn_the(ex1)

//  4)  function  takes  array  and  returns the first string  that eql to 4
let orrr2 = ["fahad", "sfiudhi", "aaa", "aa", "bbb", "a", "n", "kkkk", "llll", "pp"]

function fuunn_fo(array) {
    let gg = array.find((eelm) => {
        return eelm.length === 4
    })
    return gg
}
fuunn_fo(orrr2)

