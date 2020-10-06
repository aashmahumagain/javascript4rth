function validateForm(){

    var email = document.login.eml.value;
    var pass = document.login.password.value;
    var checkat = email.indexOf("@");
    var checkdot = email.lastIndexOf(".");
    
    if (checkat >= 1 && checkdot >= 1){
        document.getElementById("errorMessage").innerHTML="valid Email";
        return false;
    }
else{
    document.getElementById("errorMessage").innerHTML="Email Not valid";
    return false;
}
return true;
}
