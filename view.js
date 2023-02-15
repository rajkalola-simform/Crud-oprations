var productId = JSON.parse(window.localStorage.getItem("productId")) || [];
console.log(productId);
var products = JSON.parse(window.localStorage.getItem("products")) || [];
var edit = products.find((obj) => productId == obj.productId);
console.log(edit);

function onView() {
  document.getElementById("productId").value = edit.productId;
  document.getElementById("productName").value = edit.productName;
  document.getElementById("image").innerHTML = `<img src="${edit.image}">`;
  document.getElementById("price").value = edit.price;
  document.getElementById("description").value = edit.description;
}

onView();


