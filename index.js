// Write your solution in this file!
var customerName = "bob"; 
function returnsCustomerName() {
  return customerName;
}

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
}
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
const leastFavoriteCustomer = "Angela"
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = "Angela"; 
  } catch{
    leastFavoriteCustomer = " Angela"
  }
  }


