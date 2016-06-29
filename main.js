var total = 0;
var average = '';
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');
var answer5 = document.querySelector('#answer5');
var answer6 = document.querySelector('#answer6');

// Show me how to calculate the average price of all items.
items.forEach(function(value, index, array) {
    total = total + value.price;
    //total is updating each time after adding new item
    // console.log('new total ' +total);

    average = total / items.length;
    //average is total divided by how many items there are
    // console.log(average);

    answer1.innerText = 'The average price is $' + average.toFixed(2);
    //toFixed fixes number of places after the decimal
});

// Show me how to get an array of items that cost between $14.00 and $18.00 USD
var prices = items.filter(function(item) {
    return item.price >= 14 && item.price <= 18 && item.currency_code === 'USD';
});

prices.forEach(function(item) {
    answer2.textContent += item.title + ' ';
});
//pull items from results with forEach to print to html element
//Not sure how to display items into a list, rather than running together
// console.log(prices);

// Which item has a "GBP" currency code? Display it's name and price.
var gbp = items.filter(function(item) {
  return item.currency_code === 'GBP';
});

var gbpResult1 = gbp.map(function(item) {
  return item.title;
});

var gbpResult2 = gbp.map(function(item) {
  return item.price;
});
answer3.textContent = gbpResult1 + ' costs £' + gbpResult2;

//Display a list of all items who are made of wood.
var woodItems = items.filter(function(item) {
  return item.materials.indexOf('wood') !== -1;
});

woodItems.forEach(function(item) {
  answer4.textContent += item.title + ' ';
});

//Which items are made of eight or more materials? Display the name, number of items and the items it is made of

var materials = items.filter(function(item) {
  return item.materials.length >= 8;
});

var materials1 = materials.map(function(item) {
  return item.title;
});
console.log(materials1);

var materials2 = materials.map(function(item) {
  return item.quantity;
});
console.log(materials2);

var materials3 = materials.map(function(item) {
  return item.materials;
});
console.log(materials3);

answer5.textContent = materials1 + materials2 + materials3 + ' ';
//split these into separate listings?

// How many items were made by their sellers?
var maker = items.filter(function(item) {
  return item.who_made === 'i_did';
});
console.log(maker);

answer6.textContent = maker.length + ' were made by their sellers';
