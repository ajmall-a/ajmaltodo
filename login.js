var form = document.getElementById("form");
var username = document.getElementById("username");
var pwd = document.getElementById("password");

var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");



function validate(){
    let usercheck = /^admin$/ ;
   
    let passcheck = /^12345$/ ;

    let isValid= true;


    if(usercheck.test(username.value)){
        err1.innerHTML=" ";
      
    }

    else{
        err1.innerHTML=" Username is invalid";
        err1.style.color="red";
        return false;
    }

    if(passcheck.test(pwd.value)){
        err2.innerHTML=" ";
    }
    else{
        err2.innerHTML=" Password is invalid";
        err2.style.color="red";
        return false;
    }



    
    return isValid;
    }