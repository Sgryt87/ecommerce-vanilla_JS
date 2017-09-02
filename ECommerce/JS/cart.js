window.onload = function() {
  //  var spanQuantity = document.getElementById('product-name').innerHTML;
   updateTotalQuantity();
   updateCartList();
 }
 var myStorage = window.localStorage;

 function updateTotalQuantity() {
   var spanQuantity = document.getElementById('span-quantity');
   var spanCount = 0;
   for(var key in myStorage) {
     spanCount +=  parseInt(myStorage.getItem(key));
   }
   spanQuantity.innerHTML = parseInt(spanCount);
 }

 function updateCartList() {
   var cartList = document.getElementById('cart-list');
   var html = '';
   for(var key in myStorage) {
     html +=  '<div>'
      + '<img src="../img/' + key + '.png">'
      + '<p>' + key + '</p>'
      +  
      + '</div>';  //myStorage.getItem(key);
   }
   cartList.innerHTML = html;
 }
