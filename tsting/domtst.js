// let aaa=document.querySelectorAll("p")
// aaa[2].innerText="wlk any chnged"
// console.log(aaa[2]);
// console.log(aaa[1]);
// console.log(aaa[1]);
// from the p in the html files pick and change there values.

// Pick the 3ed value by using the qurlselctorall

// let bb
// bb=document.querySelectorAll(".oom")[2]

// console.log(bb);

let bbtn = document.querySelector("#btn")
let passwordd=document.querySelector("#basword")
// bass.addEventListener("click", mehFunction ) 
function mehFunction() {
    // boss.setAttribute("type","text")
    if(passwordd.getAttribute("type")==="password"){
        // passwordd.setAttribute("type","text")
        passwordd.type ="text"
    } else if(passwordd.getAttribute("type")==="text"){
        // passwordd.setAttribute("type","password")
        passwordd.type ="password"
    }
 
}
