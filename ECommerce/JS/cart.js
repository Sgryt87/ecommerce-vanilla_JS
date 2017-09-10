window.onload = function() {
  //  var spanQuantity = document.getElementById('product-name').innerHTML;
  updateTotalQuantity();
  updateCartList();
  deleteItem();
}
var myStorage = window.localStorage;

function updateTotalQuantity() {
  var spanQuantity = document.getElementById('span-quantity');
  var spanCount = 0;
  for (var key in myStorage) {
    var obj = JSON.parse(myStorage.getItem(key));
    spanCount += obj.quantity;
  }
  spanQuantity.innerHTML = parseInt(spanCount);
}

function updateCartList() {
  var cartList = document.getElementById('cart-list');
  var html = '';
  for (var key in myStorage) {
    var obj = JSON.parse(myStorage.getItem(key));
    html += '<div>' +
      '<span class=\'deleteItemCart\' data-product="' + key + '">&times;</span>' +
      '<img src="../img/' + key + '.png">' +
      '<p>' + key + '</p>' +
      '<p>' + '$' + (obj.quantity * obj.price).toFixed(2) + '</p>' +
      '</div>'; //myStorage.getItem(key);
  }
  cartList.innerHTML = html;
}

function deleteItem() {
  var deleteItemCart = document.getElementsByClassName('deleteItemCart');
  console.log(deleteItemCart);
  for (var i = 0; i < deleteItemCart.length; i++) {
    deleteItemCart[i].addEventListener('click', function(e) {
      console.log(e.target.dataset.product);
      myStorage.removeItem(e.target.dataset.product);
      window.location.reload();
      // updateCartList();
      // deleteItem();
      // updateTotalQuantity();
    });
  }
}
