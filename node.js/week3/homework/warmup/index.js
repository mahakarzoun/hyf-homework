const express = require("express");
const app = express();
const QueriesArr = (request) => Object.entries(request.query);
const valuesArr = (request) => { return Object.values(request.query).flat() }


/////// get request 
app.get("/", (req, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  } else {
    const add = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
    const addition = valuesArr(req).reduce(add)
    res.json({
      result: addition
    })
  }
})

app.get("/calculator/subtraction", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  }
  const subtract = (accumulator, currentValue) => Number(accumulator) - Number(currentValue);
  const subtraction = QueryIntParamArr.reduce(subtract)
  res.json({ result: subtraction });
});

app.get("/calculator/multiply", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  } else {
    const multiplication = (accumulator, currentValue) => accumulator * currentValue;
    const multiply = QueriesArr.reduce(multiplication)
    res.json({ result: multiply });
  }
});

app.get("/calculator/divide", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  } else {
    const division = (accumulator, currentValue) => Number(accumulator) / Number(currentValue);
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    const divide = QueryIntParamArr.reduce(division)
    res.json({ result: divide });
  }
});


///////post request 
app.post("/calculator/add", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  } else {
    const addition = (accumulator, currentValue) => Number(parseInt(accumulator)) + Number(currentValue);
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    const add = QueryIntParamArr.reduce(addition)
    res.json({ result: add });
  }
});

app.post("/calculator/subtraction", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  } else {
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    const subtract = (accumulator, currentValue) => Number(accumulator) - Number(currentValue);
    const subtraction = QueryIntParamArr.reduce(subtract)
    res.json({ result: subtraction });
  }
});

app.post("/calculator/multiply", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  } else {
    const multiplication = (accumulator, currentValue) => accumulator * currentValue;
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    const multiply = QueryIntParamArr.reduce(multiplication)
    res.json({ result: multiply })
  }
});

app.post("/calculator/divide", (req, res) => {
  const QueriesArrAdd = QueriesArr(req)
  const InvalidQueries = QueriesArrAdd.filter(([key, value]) => {
    if (isNaN(value)) {
      return key
    }
  })
  InvalidQueriesAsObj = Object.fromEntries(InvalidQueries);
  if (InvalidQueries.length >= 1) {
    res.status(400).send({
      errorMessage: `${InvalidQueries.length} invalid queries, values should be integer`,
      error: InvalidQueriesAsObj
    })
  } else {
    const division = (accumulator, currentValue) => Number(accumulator) / Number(currentValue);
    const QueryIntParamArr = QueryStringArr.map(q => parseInt(q))
    const divide = QueryIntParamArr.reduce(division)
    res.json({ result: divide });
  }
});

app.listen(3000, () => console.log(`Calculator: listening on port 3000`));
