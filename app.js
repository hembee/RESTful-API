const express = require("express");
// const bodyParser = require("body-parser");

// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true }));

const app = express();

app.get("/users/:name/:age/:sex", (req, res) => {
  const { name, age, sex } = req.params;

  const user = {
    name: name,
    age: parseInt(age),
    sex: sex,
  };

  res.json(user);
});



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
