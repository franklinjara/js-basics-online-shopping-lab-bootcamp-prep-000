var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = {[item]: Math.ceil( Math.random() * 100)};
 cart.push({[item] : price});
 console.log(`${item} has been added to your car`);
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  
  var itemsWithPrices = [];
  
  for (var i = 0; i < cart.length; i++) {
    var keys = Object.keys(cart[i])[0];
    itemsWithPrices.push(keys + "at $" + cart[i][keys]);
    
    var myString = "In your cart, you have";
    
    if(itemsWithPrices.length === 1) {
      myString += itemsWithPrices + ".";
    } else if(itemsWithPrices.length === 2) {
      myString += itemsWithPrices[0] + ", and " + itemsWithPrices[1] + ".";
    } else if(itemsWithPrices.length > 2){
      var lastElement = itemsWithPrices.pop();
      var otherItem = itemsWithPrices.join(", ");
      myString += (`${otherItem} and ${lastElement}.`);
    }
    console.log(myString);
  }
    
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}