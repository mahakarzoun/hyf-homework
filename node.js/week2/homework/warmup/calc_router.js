const express = require("express")
const router = express.Router();
const calculation = require("./calculation_module")
let errorMessage = ""

router.get("/numbers", (req, res) => {
    res.send(
        `<h1>choose a mathematical calculations</h1>`
    )
});

router.get("/numbers/add", (req, res) => {
    const first = parseInt(req.query.first)
    const second = parseInt(req.query.second)

    if ("first" && "second" in req.query) {

        if (isNaN(first) || isNaN(second)) {
            errorMessage = 'first and second should be numbers'
            res.status(400).json(
                { error: errorMessage }
            )
        } else {
            res.json(
                { result: calculation.add(first, second) }
            )
        }
    } else {
        errorMessage = "add two numbers to calculate the total "
        return res.status(400).json(
            { error: errorMessage }
        )
    }
});

app.get("/numbers/multiply", (req, res) => {
    const first = parseInt(req.query.first)
    const second = parseInt(req.query.second)

    if ("first " && "second" in req.query) {

        if (isNaN(first) || isNaN(second)) {
            erroMessage = 'first and second should be numbers'
            return res.status(400).json(
                { error: errorMessage }
            )
        } else {
            res.json(
                { result: calculation.multiply(first, second) }
            )
        }
    }
    else {
        errorMessage = "add two numbers to calculate thr product of  the  multiplication "
        return res.status(400).json(
            { error: errorMessage }
        )
    }
});

module.exports = router;
