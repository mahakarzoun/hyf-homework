const express = require("express");
const app = express();


// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

//render the data in meals route 
const meals_reviewsJson = meals.map(meal => {
  const mealsReview = reviews.filter(review => review.mealId === meal.id)
  meal.reviews = mealsReview
  return meal
})

//render the data in cheap_meals route
const cheapMeal = meals_reviewsJson.filter(meal => meal.price < 80)

//render the data in large_meals route 
const largeMeal = meals_reviewsJson.filter(meal => meal.maxNumberOfGuests > 4)

//render the data of a random meal in meal route 
function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}
function randomMeal() {
  return meals_reviewsJson[randomNumber(meals)]
}

//render the data of a random meal in meal route
function randomReservation() {
  return reservations[randomNumber(reservations)]
}


// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.setHeader('content-type', 'text/plain')
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.setHeader('content-type', 'application/json')
  response.send(meals_reviewsJson)
});

app.get("/cheap-meals", async (request, response) => {
  response.setHeader('content-type', 'application/json')
  response.send(cheapMeal)
})

//render the data in large_meals route
app.get("/large-meals", async (request, response) => {
  response.setHeader('content-type', 'application/json')
  response.send(largeMeal)
})

//render the data in meal route
app.get("/meal", async (request, response) => {
  response.setHeader('content-type', 'application/json')
  response.send(randomMeal())
})

//render the data in reservations route
app.get("/reservations", async (request, response) => {
  response.setHeader('content-type', 'application/json')
  response.send(reservations)
})

//render the random reservation in reservation route
app.get("/reservation", async (request, response) => {
  response.setHeader('content-type', 'application/json')
  response.send(randomReservation())
})

module.exports = app;