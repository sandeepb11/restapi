var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
//var routes = require("./routes/routes.js")(app);

app.get("/", function(req, res) {
var details ={
      username: "nraboy",
      password: "1234",
      twitter: "@nraboy"
  }
  res.sendFile(__dirname + "/" + "input.html");
});

app.post("/api", function(req, res) {
console.log(req.body.sample);
res.send("done");

});


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
