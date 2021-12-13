// ////////////////////////////////////////////////////////////Section1///////////////////////////////////////////


/* AND gate اذا هي دبل ترو نحط ترو غيره فولس

 OR gate اذا كانت فولس فولس ترجع فولس غيرها ترو

 Not

*/
let ex1_a1 = (false && false) || true;
/*
    notes:
        Students Ansr:  
            (false && false) || true
            false || true
            true

        Real Ansr: true
*/
let ex1_a2 = (false && false) || false;
/*
    notes:
        Students Ansr:
            (false && false) || false
            false || false
            false

        Real Ansr: -false-
*/
let ex1_a3 = 10 > 25 * 12 || false;
/*
    notes:
        Students Ansr:
            10 > 25 * 12 || false
            false || false
            false

        Real Ansr:
*/
let ex1_a4 = true || (17 * 1 > 4 && true);
/*
    notes:
        Students Ansr:  
            true || (17 * 1 > 4 && true)
            true || (17 > 4 && true)
            true || (true && true)
            true || true
             true

        Real Ansr: true
*/
let ex1_a5 = (!false && true) || !false;
/*
    notes:
        Students Ansr:
             (!false && true) || !false;
             (true && true) || true;
             true || true;
             true;

        Real Ansr: true
*/
let ex1_a6 = 3 * 7 + 4 <= 6 || (true && 7 > 8);
/*
    notes:
        Students Ansr:
            3 * 7 + 4 <= 6 || (true && 7 > 8);
            false || (true && 7 > 8);
            false || (true && false);
            false || false
            false

        Real Ansr: false
*/

let ex = (10 != 20 || (false && true)) && (false || (50 != "10"));
/*
        (10 != 20 || (false && true)) && (false||(50!="10"));
        (true || (false)) && (false||(true));
        true && false || true 
        false || true
        true 


*/
let ex1_a7 = (true && (true || false) || false);
/*
    notes:
        Students Ansr:
            (true && (true || false) || false)
            (true && true  || false)
            true  || false)
            true 

        Real Ansr: true

*/
let ex1_a8 = (false && true) || true || true;
/*
    notes:
        Students Ansr:
            (false && true) || true || true
            false || true || true
            true || true
             true


        Real Ansr: true
*/
let ex1_a9 = (15 % 3) + 6 > 10 || 40 < 7;
/*
    notes:
        Students Ansr:
            (15 % 3) + 6 > 10 || 40 < 7
            0 + 6 > 10 || 40 < 7
            false || 40 < 7
            false || false
            false

        Real Ansr: false
*/
let ex1_a10 = 9 + 6 > 10 && 13 <= 33;
/*
    notes:
        Students Ansr: 
            9 + 6 > 10 && 13 <= 33
            15 > 10 && 13 <= 33
            true && true
            true

        Real Ansr: true
*/


// ////////////////////////////////////////////////////////////Section2///////////////////////////////////////////

function printee() {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
}
function printee2() {
    console.log("he4qllo");
    console.log("qwe");
    console.log("ew");
    console.log("asd");
    console.log("qe");
}
// console.log(printee2());

function naaMe(name,age) {
    // name is  a varibel inside of our fuunction called parameter..
    console.log("Is your name" + " " + name + " " + "?");
    console.log("Are u"+" "+ age+" "+"years old ?");
}

naaMe("mohammed",50);
naaMe("khaled",60);
naaMe("ali",10);



function additionn(a,b){
    console.log(a+b);
}

additionn(50,10);

function addd(aa,bb){
    // only one return can happen in a function
}

// ///////////////////////////////////////////////////hw////////////////////////////////////////////
// 1
function  infoo(name,age){
    return  "my name  is"+name+"and my age  is"+" "+age;
}

infoo("fahad",20);
infoo("kaled",60);
infoo("ali",9);

// 2
function subb(a,b){
    return a-b;
}

subb(50,10);
subb(532,40);
subb(51,15);

// 3
function subb(p,s){
    return p*s;
}

subb(50,10);
subb(532,40);
subb(51,15);

// 4
function ontrhee(num){
    return num / 3;
}

function lls(num){
    return num < 10;
}
lls(20);

console.log(ontrhee(50));
// 5

function lonlen(vaarr){
    return vaarr.length
}

lonlen("fahad");
lonlen("Almarri")
// ansr 7

// 6
function frstch(lr){
    // we can use inddex value to target a cirtin location of our string..
    return lr[0];
}

frstch("fahad");
frstch("almarri");


// //////////////////////////// finshd////////////////////////////////////

