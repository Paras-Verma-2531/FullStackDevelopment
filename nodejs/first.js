// import the express with CJS --> common JS:
const express = require("express");
//configure the dotenv package :: used to access secret data which we dont want to make accessible to others directly
require("dotenv").config({ path: "./.env" });
const App = express();
//const postRouter = require("./routes/post");
const mainRouter = require("./routes/mainRoute");
//create end points:
//All the routes should be in one single route file :: for better scalability:
App.use("/api", mainRouter);
App.get("/", (req, res) => {
  res.send({
    data: "ok",
  });
});
//go to post route if endpoint is /post:
//App.use("/post", postRouter);
const port = process.env.PORT;
// Listen on the server:
App.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
