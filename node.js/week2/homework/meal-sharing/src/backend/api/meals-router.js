const { response } = require("express");
const express = require("express");
const router = express.Router();

const meals = require("./../data/meals");
let errorMessage = ""
let fillteredMeals = meals

router.get("/", async (request, response) => {
  console.log("in /api/meals");

  // title query 
  const title = request.query.title
  if ("title" in request.query) {
    if (typeof title === "undefined") {
      response.send("add the title meal ")
    } else if (typeof title === "number") {
      errorMessage = 'meal title must be a string '
      response.status(400).json(
        { error: errorMessage }
      )
    } else {
       fillteredMeals = fillteredMeals.filter(meal => {
        fixedMealName = meal.title.toLowerCase()
        if (fixedMealName.includes(title.toLowerCase())) {
          return meal
        }
          response.send(`cant find a meal with title ${title} `)
      })
     response.send(fillteredMeals)
    }
  }
  response.send(meals)

  // max price query 
  if ("maxPrice" in request.query) {
    const maxPrice = parseInt(request.query.maxPrice);
    if (isNaN(maxPrice)) { 
      errorMessage = "Max Price must be integer"
      response.status(400).json
      ({ error: errorMessage });
    }
    fillteredMeals = fillteredMeals.filter( meal=> meal.price <= maxPrice);
    response.send(fillteredMeals)
  }
  // limit query
  if ("limit" in request.query) {
    const limit = parseInt(request.query.limit);
    if (isNaN(limit)) { 
      errorMessage = "limit must be a number "
      response.status(400).json
      ({ error: errorMessage });
    }
    fillteredMeals = fillteredMeals.slice(0,limit);
    response.send(fillteredMeals)
  }

  // createdAfter query 
  if ("createdAfter" in request.query) {
    let createdAfter = request.query.createdAfter
  fillteredMeals = fillteredMeals.filter( meal=> meal.createdAfter.localCompare(createdAfter) == 1);
  response.send(fillteredMeals)
  }
});


// Respond with the json for the meal with the corresponding id  

router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id)
  if (isNaN(id)) {
    errorMessage = 'id must be an integer '
    response.status(400).json(
      { error: errorMessage }
    )
  } else if (id > meals.length) {
    response.send(filteredmeals = [])
  } else {
     filteredmeals = meals.find(meal => meal.id === id)
    response.send(filteredmeals)
  }
});

module.exports = router;
