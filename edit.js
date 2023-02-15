var proId = JSON.parse(window.localStorage.getItem("productId"));
console.log(proId);
var products = JSON.parse(window.localStorage.getItem("products"));
var edit = products.find((obj) => proId == obj.productId);
console.log(edit);

function onEdit() {
  document.getElementById("productId").value = edit.productId;
  document.getElementById("productName").value = edit.productName;
  document.getElementById("image").value = edit.image;
  document.getElementById("price").value = edit.price;
  document.getElementById("description").value = edit.description;
}

onEdit();

//updateData method
function updateData() {
  var productId = document.getElementById("productId").value;
  var productName = document.getElementById("productName").value;
  var image = document.getElementById("image").value;
  var price = document.getElementById("price").value;
  var description = document.getElementById("description").value;

  for (var i = 0; i < products.length; i++) {
    if (products[i].productId == productId) {
      products[i].productName = productName;
      products[i].image = image;
      products[i].price = price;
      products[i].description = description;
    }
  }

  window.localStorage.setItem("products", JSON.stringify(products));
  alert("Product Updated Successfully!");
}
