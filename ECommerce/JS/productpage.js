window.onload = function() {
   updateTotalQuantity();
 }
var myStorage = window.localStorage;

function addItem() {
  var productName = document.getElementById('product-name').innerHTML;
  var productQuantity = document.getElementById('product-quantity').value;
  var JSONstring = myStorage.getItem(productName);
  if(JSONstring != null) {
    var JSONobj = JSON.parse(JSONstring);
    var prevQuantity = JSONobj.quantity;
  } else {
    var prevQuantity = 0;
  }
  var itemPrice = document.getElementById('item-price').innerHTML;
  var dataObj = {
    quantity:  parseInt(productQuantity) + parseInt(prevQuantity),
    price: parseFloat(itemPrice, 2)
  };
  myStorage.setItem(productName, JSON.stringify(dataObj));
  updateTotalQuantity();
}

function buyItem() {
  var buyButton = document.getElementById('buy-btn');
}

function updateTotalQuantity() {
  var spanQuantity = document.getElementById('span-quantity');
  var spanCount = 0;
  for(var key in myStorage) {
    var obj = JSON.parse(myStorage.getItem(key));
    spanCount +=  obj.quantity;
  }
  spanQuantity.innerHTML = parseInt(spanCount);
}
