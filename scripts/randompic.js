
function diffImg(){
    var myCollection =  new Array ("images/1.jpg" , "images/2.jpg" , "images/3.jpg", "images/4.jpg") 
    var randomImage = Math.floor(Math.random()*myCollection.length)
    alert("Random number is" + randomImage);
    document.getElementById("randomImages").src=myCollection[randomImage];
    }
    
 