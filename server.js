

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3000;
const users = [];
const jsonParser = bodyparser.json()

app.get("/api/users", (req, res) => {
 res.send(users);
});

app.delete("/api/users/:userID",jsonParser, (req, res) => {
const userID = Number(req.params.userID);
const userToBeRemoved = users.findIndex((user)=>user.id === userID);
console.log(userToBeRemoved);
if(userToBeRemoved === -1){
  return res.sendStatus(400);
}
users.splice(userToBeRemoved,1)
  res.sendStatus(200);
});

app.post("/api/users",jsonParser, (req, res) => {
users.push({...req.body,id:Math.floor(Math.random() * 100000)});
res.sendStatus(200);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("server started");
