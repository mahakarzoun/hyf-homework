const { query } = require("express");
const express = require("express");
const app = express();
let  reducer = (accumulator, currentValue) => accumulator + currentValue;

app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    const sum = QueryIntParamArr.reduce(reducer)
    res.json({sum});
  });
  
app.get("/calculator/subtraction", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    reducer = (accumulator, currentValue) => accumulator - currentValue;
    const reduce = QueryIntParamArr.reduce(reducer)
    res.json({reduce});
  });
  
  app.get("/calculator/multiply", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    reducer = (accumulator, currentValue) => accumulator * currentValue;
    const multiply = QueryIntParamArr.reduce(reducer)
    res.json({multiply});
  });
  
  app.get("/calculator/divide", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    reducer = (accumulator, currentValue) => accumulator / currentValue;
    const divide = QueryIntParamArr.reduce(reducer)
    res.json({divide});
  });
  
  
app.post("/calculator/add", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    const sum = QueryIntParamArr.reduce(reducer)
    res.json({sum});
  });
  
app.post("/calculator/subtraction", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    reducer = (accumulator, currentValue) => accumulator - currentValue;
    const reduce = QueryIntParamArr.reduce(reducer)
    res.json({reduce});
  });
  
  app.post("/calculator/multiply", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    reducer = (accumulator, currentValue) => accumulator * currentValue;
    const multiply = QueryIntParamArr.reduce(reducer)
    res.json({multiply})
  });
  
  app.post("/calculator/divide", (req, res) => {
    const QueryStringArr= Object.values(req.query)
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    reducer = (accumulator, currentValue) => accumulator / currentValue;
    const divide = QueryIntParamArr.reduce(reducer)
    res.json({divide});
  });

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
