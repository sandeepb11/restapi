
var fetch = require("node-fetch");
fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(json => console.log(json.username));
