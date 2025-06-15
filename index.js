
//myloctn is for my location



let myloctn = "Muterere, Bugiri";
document.getElementById("myloctn").textContent = `Location: ${myloctn}`;

let mytel="+256 77-943-9017";
document.getElementById("mytel").textContent = `Tell: ${mytel}`;

let myemail = "smautogarage@outlook.com";
document.getElementById("myemail").textContent = `Email: ${myemail}`;

//this code is for yes and no button
const mycheckbox = document.getElementById("mycheckbox");
const mcheckbox = document.getElementById("mcheckbox");
const nxtbtn = document.getElementById("nxtbtn");
const result = document.getElementById("result");

nxtbtn.onclick = function(){

if(mycheckbox.checked){
    result.textContent = `Fill in the spaces below.`;
}
else if(mcheckbox.checked){
    result.textContent = `Thanks for visiting our webpage!`;
}
else{
    result.textContent = `Thanks for visiting our webpage!`;
}

}

const myname = document.getElementById("myname");
const mymail = document.getElementById("mymail");
const myage = document.getElementById("myage");
const sbt = document.getElementById("sbt");
const myresult = document.getElementById("myresult");

sbt.onclick = function(){

    if( myname.value && myage.value && mymail.value){
        myresult.textContent = 'You are enrolled at SM Auto Garage';
    }
    else{
        myresult.textContent = 'You should fill all the spaces above!';
    }

}