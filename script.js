var products = JSON.parse(window.localStorage.getItem("products")) || [];
var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  console.log(formData);
  if (selectedRow == null) {
    products.push(formData);
    window.localStorage.setItem("products", JSON.stringify(products));
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function rendarProducts() {
  products.forEach((product) => {
    insertNewRecord(product);
  });
}
rendarProducts();

//Retrieve the data
function readFormData() {
  var formData = {};
  formData["productId"] = document.getElementById("productId").value;
  formData["productName"] = document.getElementById("productName").value;
  formData["image"] = document.getElementById("image").value;
  formData["price"] = document.getElementById("price").value;
  formData["description"] = document.getElementById("description").value;
  return formData;
}

//Insert the data
function insertNewRecord(data) {
  console.log("this is data", data);
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.productId;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.productName;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = `<img src="${data.image}">`;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.price;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.description;
  cell4 = newRow.insertCell(5);
  cell4.innerHTML = `<a onClick="onEdit(this)" href="view.html" style=" background: #eee;
  padding: 6px 20px;
  margin: 15px 0 10px;
  display: inline-block;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  color : black">View</a>
  <a onClick="onView(this)" href="edit.html" style=" background: #eee;
  padding: 6px 20px;
  margin: 15px 0 10px;
  display: inline-block;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  color : black">Edit</a> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  window.localStorage.setItem(
    "productId",
    JSON.stringify(selectedRow.cells[0].innerHTML)
  );
  document.getElementById("productId").value = selectedRow.cells[0].innerHTML;
  console.log(selectedRow.cells[0].innerHTML);
  document.getElementById("productName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("image").value = selectedRow.cells[2].innerHTML;
  document.getElementById("price").value = selectedRow.cells[3].innerHTML;
  document.getElementById("description").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productId;
  selectedRow.cells[1].innerHTML = formData.productName;
  selectedRow.cells[2].innerHTML = formData.image;
  selectedRow.cells[3].innerHTML = formData.price;
  selectedRow.cells[4].innerHTML = formData.description;
}

//Delete the data
function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}

//Reset the data
function resetForm() {
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("image").value = "";
  document.getElementById("price").value = "";
  document.getElementById("description").value = "";
  selectedRow = null;
}

//function to search product name
function showData(e) {
  event.preventDefault();
  let name = document.getElementById("name").value.toLowerCase();
  let storeList = document.getElementById("storeList");
  let showlist = document.getElementById("showlist");

  //looping through storeList table
  for (let i = 1; i < storeList.rows.length; i++) {
    let productName = storeList.rows[i].cells[1].innerHTML.toLowerCase();

    //if productName matches with name then display that row in showlist
    if (productName == name) {
      let row = showlist.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);

      cell1.innerHTML = storeList.rows[i].cells[0].innerHTML;
      cell2.innerHTML = storeList.rows[i].cells[1].innerHTML;
      cell3.innerHTML = storeList.rows[i].cells[2].innerHTML;
      cell4.innerHTML = storeList.rows[i].cells[3].innerHTML;
      cell5.innerHTML = storeList.rows[i].cells[4].innerHTML;
    }
    document.getElementById("name").value = "";
  }
}

// Function to clear searched data
function clearData(e) {
  event.preventDefault();
  document.getElementById("showlist").innerHTML = "";
}
