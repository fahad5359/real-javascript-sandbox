const Users=[{user:"moh",password:"1234"},{user:"jouza",password:"5359"}]
// /////// Here we navigate and choose exactly our exact values :like for example i want exactly the user2 in the array, that is callled "jouza", what should i write to reach it ,and put it insidde of a varible so i can use it laiter?: the correct way is :let usertwo=Users[1].password  

// User1[0]
let useroneid=Users[0].user
let userpass=Users[0].password  

// User2[1]
let usertwoid=Users[1].user
let usertwopass=Users[1].password

// تشبيك
let email=document.querySelector("#eml")
let password=document.querySelector("#password")
let btn=document.querySelector("#btn")


btn.addEventListener("click",varify)

function varify(){
   if(email.value===useroneid&&password.value===userpass){
       btn.style.color="green"
   }else{
       console.log("wrong");
   }
}