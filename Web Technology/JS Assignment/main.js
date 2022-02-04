document.getElementById("submit").onclick = function()
{
    
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var image = row.insertCell(0);
    var name = row.insertCell(1);
    var stock = row.insertCell(2);
    var price = row.insertCell(3);
    var description = row.insertCell(4);
    var qty = row.insertCell(5);
    var cart = row.insertCell(6);
    var remove = row.insertCell(7);

    //for image
    im = document.getElementById("productImage");
    const files = im.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load",function(){
        image.innerHTML = '<img class="product_img" src="'+ this.result + '"/>'; 
    });
    

    //image.innerHTML = document.getElementById("productImage").value;
    name.innerHTML = document.getElementById("productName").value;
    stock.innerHTML = document.getElementById("productQty").value;
    price.innerHTML = document.getElementById("productPrice").value;
    description.innerHTML = document.getElementById("productInfo").value;
    qty.innerHTML ="<input type='number' min='1' name='qty'>";
    cart.innerHTML = "<button class='btn btn-primary' name='addCart' onclick='addToCart()'>Add To Cart</button>";
    remove.innerHTML = "<button class='btn btn-danger' name='remove' onclick='removeProduct()'>Remove</button>";
    return false;
}

function addToCart(){
    //for cart table
    var tablecart = document.getElementById("tableCart");
    var row = tablecart.insertRow(-1);
    var c_image = row.insertCell(0);
    var c_name = row.insertCell(1);
    var c_qty = row.insertCell(2);
    var c_price = row.insertCell(3);
    var remove = row.insertCell(4);
    
    var td = event.target.parentNode;
    var tr = td.parentNode;

    c_image.innerHTML = tr.cells[0].innerHTML;
    c_name.innerHTML = tr.cells[1].innerHTML;
    var qty= parseInt(tr.cells[5].children[0].value);
    var price = parseFloat(tr.cells[3].innerHTML);
    c_qty.innerHTML = qty + " * " + price;    
    price = price * qty;
    c_price.innerHTML = price;
    remove.innerHTML = "<button class='btn btn-danger' name='removeCart' onclick='removeProduct()'>Remove</button>";

    //for decrease from stock
    var stock = parseInt(tr.cells[2].innerHTML);
    stock = stock - qty;
    tr.cells[2].innerHTML = stock;
}

function removeProduct(){
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

