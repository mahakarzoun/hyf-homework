const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");
let errorMessage = ""

router.get("/", async (request, response) => {
  try {
      response.send(reviews)
      console.log("in /api/reviews");
    }
   catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id)
  let filteredreviews = reviews
  if (isNaN(id)) { 
    errorMessage = 'id must be an integer '
    return response.status(400).json(
      { error: errorMessage  }
    )
  }
    else if (id > reviews.length) {
      request.send(filteredreviews = [])

    } else {
      filteredreviews = reviews.find(review => review.id === id)
      response.send(filteredreviews)
    }
});
module.exports = router;