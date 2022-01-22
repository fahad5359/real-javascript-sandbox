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


let sttyle7 = getComputedStyle(pic[6]);
//2) قم بتغي ير لون الخط الموجود بالوسم الأول والوسم الثالث
pik[1].style.color="red"


console.log(Hhhate);




//3)قم بتغي ير نوع الخط الموجود بالوسم الثاني والوسم الرابع
//4) قم بتغي ير حجم الخط الموجود بالوسم الخامس والوسم السابع
//5)قم بتغي ير لون الخلفية الموجود بالوسم السادس
