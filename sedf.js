// short test:

/*
q1) how to access arrays
    and loop it
q2) how to access objects
    and loop it
*/

// array
arry_1=[1,"hello",2,10,"ali"]

// object/dectionary
let obj_1={
    gametype:"action",
    gameprice:"100 ryals",
    coop:"yes",
};

// a1)
// u may addd an another varible in the function to target spicfic locations odd an array.
function arra_access(ari){
    for(let i=0;i<ari.length;i++){
        console.log(ari[i]);

    }
}

arra_access(arry_1)

// a2) 
function obj_access(obj){
    for (const i in obj) {
        console.log(i,obj[i]);
      
    }
}

obj_access(obj_1)