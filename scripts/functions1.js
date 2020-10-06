function start(){
    var array1 = [ [1,2,3],
    [4,5,6] ];
    var array2 = [[1,2],
    [3],
    [4,5,6]];
  outputArray("values in array1 by row", array1,
   document.getElementById("output1"));
  outputArray("values in array2 by row", array2,
   document.getElementById("output2"));
}

function outputArray(heading, theArray, output ){
    var results = "";
    for(var row in theArray){
        results += "<ol>";
    
    for(var column  in theArray[ row ]){
        results += "<li>"+ theArray [ row ][ column ] +"</li>";
    }
    results += "</ol>";
}
output.innerHtml = results;
}
window.addEventListener("load",start,false);