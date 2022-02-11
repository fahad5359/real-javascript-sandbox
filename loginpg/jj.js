// ddo many users ,with name and pass inside of array [{nme:"adsd",pass:"asd"},{},{},{}]
// for loop insidde of them and check..
// and do check password

// side challenge 
let usrs = [{ namee: "fahad", password: "5359" }, { namee: "ali", password: "1122" }]

// تشبيك
let nm = document.querySelector("#name")

let pass = document.querySelector("#pass")


let btn = document.querySelector("#bbtn")
let showbtn = document.querySelector("#show")


showbtn.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.setAttribute("type", "number")
    }
    else if (pass.type === "number") {
        pass.setAttribute("type", "password")

    }

})

btn.addEventListener("click", () => {
    for (let i = 0; i < usrs.length; i++) {

        if (nm.value === usrs[i].namee && pass.value == usrs[i].password) {
            console.log("nm pass is correct");
        } else {
            console.log("wrong");
        }
    }

})