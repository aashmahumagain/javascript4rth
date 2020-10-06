function validateForm(){
    var firstname = document.login.fname.value;
    var lastname = document.login.lname.value;
    var email = document.login.eml.value;
    var pass = document.login.password.value;
    var emailfilter =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    var passfilter = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var finalEm=emailfilter.test(email)
    var finalPass = passfilter.test(pass)
    if( finalEm == "" && finalPass == "" && firstname =="" && lastname=="")
   {
    document.getElementById("errorMessage").innerHTML = "Fill all the required Field ";  
    document.login.fname.focus();
    return false;
   }else if(firstname == ""){
    document.getElementById("errorMessage").innerHTML = "Name is Required";  
    document.login.fname.focus(); b 
    return false;
   }
   else if(lastname == ""){
    document.getElementById("errorMessage").innerHTML = "Lastname is Required";  
    document.login.lname.focus();
    return false;
   }

   else if(finalEm  == ""){
    document.getElementById("errorMessage").innerHTML = "Email is Required";  
    document.login.eml.focus();
    return false;
   }
   else if(finalPass == ""){
    document.getElementById("errorMessage").innerHTML = "Password is Required";  
    document.login.password.focus();
    return false;
   }
   
  else if(finalEm==true  && finalPass == true)
  {
    window.location.href = "\welcome.html";
    return false;
  }
  else {

    document.getElementById("errorMessage").innerHTML = "email and password Not Valid";  
    document.login.eml.focus();
    return false;
  }
return true;
}
 