const express = require("express");
const router = express.Router();
let errorMessage = "";
const reservations = require("../data/reservations.json");

console.log("in reservations router")

//Respond with the json for all the reviews
router.get("/", async (request, response) => {
  try {
    response.send(reservations)
    console.log("in /api/reservations");
  }
 catch (error) {
  throw error;
}
});

//Respond with the json for the reservations  with the corresponding id
router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id)
  let filteredreservations = reservations
  if (isNaN(id)) { 
    errorMessage = 'id must be an integer '
    return response.status(400).json(
      { error: errorMessage  }
    )
  }
  else if  (id > reservations.length) {
    response.send(filteredreservations = [])

    } else {
      filteredreservations = filteredreservations.find(reservation => reservation.id === id)
      response.send(filteredreservations)
    }
});
module.exports = router;