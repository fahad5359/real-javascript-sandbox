// let ar = [2, 4, 9, 23, 435]
// function oopp(array) {

//     let bl=array[0]+array[1]+array[2]+array[3]+array[4]
//     return(bl/array.length);
// }

// console.log( oopp(ar));



// let ar = [2, 4, 9, 23, 435]

// function abb(po) {
//     for (i = 0; i < po.length; i++) {
//         // console.log(po[i]);
//         for (let index = 0; index < po.length; index++) {console.log(po[index],po[i]);


//         }
//     }
// }

// abb(ar)

// let ab = "ads"
// let abb = "adaass"
// // function ConcatNames(name1, name2) {
//     // write your code here
//     let ab
//     ab = name1.concat(name2)
//     return ab
// // }


// function sim(nm1,nm2){
//     if(nm1===nm2){
//         return "yes they are"+nm1+nm2
//     }else{
//         return "no"
//     }
// }

let nums = [1, 2, 100, 3, 4, 50]

function larg_small(nums, numss) {
    let larj = 0
    let larjj = 0

    for (let i = 0; i < nums.length; i++) {
        let lloop_indx = nums[i]
        // console.log(lloop_indx);
        // if (lloop_indx > larj) {
        //     larj = lloop_indx
        // }
        if (lloop_indx < larj) {
            larj = lloop_indx
        }
    }

    return larj
}

console.log(larg_small(nums));




