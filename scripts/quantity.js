function getTotal(){
    var qty = document.getElementById("qty").value;
    var price = document.getElementById("price").value;
    var total = qty * price;
    document.getElementById("nettotal").innerHTML = total;
}