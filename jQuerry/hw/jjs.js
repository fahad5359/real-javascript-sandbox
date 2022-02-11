// we can call the array if objects  by the index value
$(document).ready(function () {


    const Users = [{ user: "moh", password: "1234" },
    { user: "jouza", password: "5678" },
    { user: "fad", password: "1122" },
    { user: "abdullah", password: "4445" }]

    // تشبيك
    // IDs
    let card = $("#cardd")
    let usrnm = $("#userName")
    let pass = $("#password")
    let btn = $("#btn")
    // varible.val() "to  take the input of field"


    // varibles



    // let  useron=Users[0]
    btn.click(() => {

        for (let i = 0; i < Users.length; i++) {
            // console.log("sefd");
            // Users[i] makse  triversing the array  more esair and we can make millons ofrecords without an effort.
            if (Users[i].user === usrnm.val() && Users[i].password === pass.val()) {
                card.css("background-color","#85ccb1")
                console.log("correct");
                // return  to stop the loop from triversing more and  checking all of the   Users  array , so when thg shar6 is good stop.
                return;
            } else if (usrnm.val() !== Users[i].user && usrnm.val() !== Users[i].password) {
                console.log("wrong");
            }

        }




        // e.preventDefault();
    });
});
