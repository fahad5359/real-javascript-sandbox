let pic = document.querySelectorAll("p")
let pik = document.querySelectorAll(".sopn")


// 1)اطبع لون أو نوع أو حجم خط أو لون خلفية الموجود بداخل كل عنصر

let sttyle1 = getComputedStyle(pic[0]);
console.log(sttyle1.color);

let sttyle2 = getComputedStyle(pic[1]);
console.log(sttyle2.fontSize)


let sttyle3 = getComputedStyle(pic[2]);

console.log(sttyle3.fontFamily);
let sttyle4 = getComputedStyle(pic[3]);


let sttyle5 = getComputedStyle(pic[4]);
console.log(sttyle2.fontSize)

let sttyle6 = getComputedStyle(pic[5]);
console.log(sttyle6.fontFamily);



//2) قم بتغي ير لون الخط الموجود بالوسم الأول والوسم الثالث
pik[0].style.color="red"
pik[1].style.color="yellow"

pic[0].style.color="red"
pic[1].style.color="red"



//3)قم بتغي ير نوع الخط الموجود بالوسم الثاني والوسم الرابع
pic[1].style.fontFamily = "Impact,Charcoal,sans-serif";
pik[1].style.fontFamily = "Impact,Charcoal,sans-serif";

//4) قم بتغي ير حجم الخط الموجود بالوسم الخامس والوسم السابع
pic[4].style.fontSize="40px"
pik[4].style.fontSize="30px"
//5)قم بتغي ير لون الخلفية الموجود بالوسم السادس

pic[6].style.backgroundColor="red"
pik[6].style.backgroundColor="red"
