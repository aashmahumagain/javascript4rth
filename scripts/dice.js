
function ranImage(){
    var myCollection =  new Array ("images/a.png" , "images/b.png" , "images/c.png","images/d.png", "images/e.png","images/f.png") 
    var randomImage = Math.floor(Math.random()*myCollection.length)
    alert("Random number is" + randomImage);
    document.getElementById("randomImages").src=myCollection[randomImage];
    }
    
    