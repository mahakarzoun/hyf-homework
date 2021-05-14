const express = require("express");
const app = express();
const mathCalcRouter = require("./calc_router")

app.use("/", mathCalcRouter)

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

