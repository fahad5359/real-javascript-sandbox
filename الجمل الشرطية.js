// //////////////////////////////////////section1////////////////////////////////////////
function checkage(age) {
    if (age >= 20) {
        return "u are an adult"
    }
    return "nah"
}

checkage(30)


// function to check if ur name iz fahad or not..
function checkIfFahad(name) {
    if (name != "fahad") {
        return " ur name is not fahad "
    }
    return "hello fahad"
}

checkIfFahad("ahmd")

/*
    A function to check if one of these number is larger,if they are eql return "both arer eql"
*/
function largeval(a, b) {
    if (a > b) {
        // u can also retrun a or b
        return a + "the nomber on the left is larger"
    }
    if (b > a) {
        return "the nomber on the right is larger"
    }
    if (a == b) {
        return "both are equal"
    }
}
largeval(10, 5)
largeval(10, 50)
largeval(50, 50)


// if the user input = javascript print welcome else print good bye
function ttxtcheck(ttxt) {
    if (ttxt !== "javascript") {
        return "goodbye"
    }
    return "Welcome"
}

ttxtcheck("fahad")
ttxtcheck("asd")
ttxtcheck("javascript")

// ////////////////////////////////////// section2 ////////////////////////////////////////




/*
    A function to check if one of these number is larger,if they are eql return "both arer eql" (if ealse)
*/
let aa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function chk(nom1, nom2) {
    if (nom1 > nom2) {
        return nom1 + " " + "Is bigger"
    } else {
        if (nom2 > nom1) {
            return nom2 + " " + "Is bigger"
        } else {
            if (nom1 === nom2) {
                return "both" + " " + nom1 + " " + nom2 + " " + "are equal"
            }
        }
    }

}

chk(10, 1)
chk(10, 12)
chk(10, 10)




// if user input

function jobttl(smthng) {
    if (smthng === "javascript") {
        return " u are a web developer"

    } else if (smthng === "swift") {
        return " u r an ios developer"

    } else if (smthng === "kotlin") {
        return "android dev"
    } else {
        return "jobless"
    }
}


// /////////////////////////////////////////////////################ hw ######################///////////////////////////////////////////////

// 1)  A function that if his age is grater than or eql 18  return his name else if age is less than 18 return age

function agechk(nom, nam) {

    if (nom >= 18) {
        // uuuuu caaaaan re tuuurn a variablllllleeee with out giving it a condetion !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        return nam;
    } else if (nom < 18) {
        return "ur age is" + " " + nom + " " + "ur still ahild"
    }
}

function chekk(age, nameee) {
    if (age >= 18) {
        return nameee
    } else if (age < 18) {
        return age
    }
}




/* 2) a grading function:
if grade greater than or eql 70 return "greate"
and return "good" if grade is less than 70 and greater than 50.
and return "faild" if eql or less than 50
*/


function ggrading(grade) {
    if (grade >= 70) {
        return "greate"
    } else if (grade < 70 && grade > 50) {
        // نستطيع تطبيق شرطين في نفس قوس الاف
        // as u can see i used two  conditios in one if
        return "good"
    } else if (grade <= 50) {
        return "faild"
    }
}

ggrading(70)
ggrading(60)
ggrading(50)



/* 3) function takes 3 parameters


*/

function calc(nm1, alm, nm2) {
    if (alm == "-") {
        return nm1 - nm2
    } else if (alm == "+") {
        return nm1 + nm2
    } else if (alm == "/") {
        return nm1 / nm2
    } else if (alm == "*") {
        return nm1 * nm2
    } else if(alm == "%"){
        return nm1 % nm2
    }else{
        return "there iz somthing wrong"
    }
}
calc(10,"-",10)
calc(10,"+",10)
calc(10,"/",10)
calc(10,"*",10)
calc(10,"%",10)

// ///////////////////////////////////////////////  HW finshed ///////////////////////////////////////////////////////////////////




























