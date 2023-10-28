// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  // renderPrice();
}

function renderPatty() {
  let Patty = document.querySelector("#patty");

  
 

  //you can also use getElementById
  if (state.Patty) {
    Patty.style.display = "block";
  } else {
    Patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let Cheese = document.getElementById("cheese");
  if(state.Cheese){
    Cheese.style.display="block"
  }
  else{
    Cheese.style.display = "none"
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomatoes = document.getElementById("tomato");
  if(state.Tomatoes){
    Tomatoes.style.display="block"
  }
  else{
    Tomatoes.style.display = "none"
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
    
  let Onions = document.getElementById("onion");
  if(state.Onions){
    Onions.style.display="block"
  }
  else{
    Onions.style.display = "none"
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let Lettuce = document.getElementById("lettuce");
  if(state.Lettuce){
    Lettuce.style.display="block"
  }
  else{
    Lettuce.style.display = "none"
  }
}

const pattyItem = document.getElementById("item1");
const cheeseItem = document.getElementById("item2");
const tomatoItem = document.getElementById("item3");
const onionItem = document.getElementById("item4");
const lettuceItem = document.getElementById("item5");

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  toggleClass(state.Patty,document.querySelector(".btn-patty"));
  ingredientsDisplay(state.Patty , pattyItem)
  updatePrice(state.Patty, ingredients.Patty)
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick =function(){
  state.Cheese = !state.Cheese;
  toggleClass(state.Cheese,document.querySelector(".btn-cheese"));
  ingredientsDisplay(state.Cheese , cheeseItem)
  updatePrice(state.Cheese, ingredients.Cheese)
  renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick =function(){
  state.Tomatoes = !state.Tomatoes;
  toggleClass(state.Tomatoes,document.querySelector(".btn-tomatoes"));
  ingredientsDisplay(state.Tomatoes , tomatoItem)
  updatePrice(state.Tomatoes, ingredients.Tomatoes)
  renderAll();
}

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick =function(){
  state.Onions = !state.Onions;
  toggleClass(state.Onions,document.querySelector(".btn-onions"));
  ingredientsDisplay(state.Onions, onionItem)
  updatePrice(state.Onions, ingredients.Onions)
  
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick =function(){
  state.Lettuce = !state.Lettuce;
  toggleClass(state.Lettuce,document.querySelector(".btn-lettuce"));
  ingredientsDisplay(state.Lettuce, lettuceItem);
  updatePrice(state.Lettuce, ingredients.Lettuce)
  renderAll();
}

//Challenge 1 - Add/Remove the class active to the buttons based on state



function toggleClass(s,a){
  if(s){
    a.classList.add("active")
  }else{
    a.classList.remove("active")
  }
}




//Challenge 2 - Render only the items selected in the ingredients board based on the state
function ingredientsDisplay(state, pattyItem){
  if(state==false){
    pattyItem.style.display = "none"
  }
  else{
    pattyItem.style.display ="block"
  }
}

function ingredientsDisplay(state, Item){
  if(state==false){
    cheeseItem.style.display = "none"
  }
  else{
    cheeseItem.style.display ="block"
  }
}

function ingredientsDisplay(state, tomatoItem){
  if(state==false){
    tomatoItem.style.display = "none"
  }
  else{
    tomatoItem.style.display ="block"
  }
}

function ingredientsDisplay(state, onionItem){
  if(state==false){
    onionItem.style.display = "none"
  }
  else{
    onionItem.style.display ="block"
  }
}

function ingredientsDisplay(state, lettuceItem){
  if(state==false){
    lettuceItem.style.display = "none"
  }
  else{
    lettuceItem.style.display ="block"
  }
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
var ingredientsPrice = 150;
function updatePrice(state, ingredients){
  if(state){
    ingredientsPrice += ingredients;
  }
  else{
    ingredientsPrice -= ingredients
  }

  currentOrder = wholeWheatBun + ingredientsPrice;
  document.querySelector(".price-details").innerHTML = "INR" + currentOrder;
}
