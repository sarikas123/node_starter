const express = require("express");
const bodyParser = require("body-parser");
const mongooes = require("mongoose");
const app = express();
const dataBase =
  "mongodb+srv://Sarika:<sarika1234>@cluster1.75x5zdz.mongodb.net/?retryWrites=true&w=majority";
const port = 3000;
var jsonParser = bodyParser.json();

app.use(express.static("ui"));
const users = [];
mongooes
  .connect(dataBase)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log("Connection Failed"));
app.use(express.static("static"));

app.get("/api/users/:userID",jsonParser,async (req, res) => {
  const userID = req.params.userID;
  if(!validateObjectID(userID)){
    res.status(400).send("plesase send valid object id");
  }
  const user = await User.findById(userID);

  if(!user){
    return res.status(400).send("user not found");
  }
  res.send(users);
});



//used for update resource
app.put("/api/users/:userID",jsonParser,async (req, res) => {
  const userID = req.params.userID;
  if(!validateObjectID(userID)){
    res.status(400).send("plesase send valid object id");
  }
  const result = await User.findByIdAndUpdate(userID, );

  if(!result){
   res.status(400).send({"eror": "user not found"});
  }
  res.sendStatus(200);
});



app.delete("/api/users/:userID", jsonParser, (req, res) => {
  const userID = Number(req.params.userID);
  const userToBeRemoved = users.findIndex((user) => user.id === userID);
  console.log(userToBeRemoved);
  if (userToBeRemoved === -1) {
    return res.sendStatus(400);
  }
  users.splice(userToBeRemoved, 1);
  res.sendStatus(200);
});

app.post("/api/users", jsonParser, (req, res) => {
  users.push({ ...req.body, id: Math.floor(Math.random() * 10000000) });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
