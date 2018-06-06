var appRouter = function(app) {
  app.get("/", function(req, res) {
  var details ={
        username: "nraboy",
        password: "1234",
        twitter: "@nraboy"
    }
    res.send(input.html);
});
}

module.exports = appRouter;
