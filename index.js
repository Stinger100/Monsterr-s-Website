let express = require("express");
let app= express();
let port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

 ///////  routes
//  "/"
app.get("/", function (req, res) {
    res.render("home")

});
// /documentation
app.get("/documentation", function (req, res) {
    res.render("documentation")
});
// games
app.get("/games", function (req, res) {
    res.render("games")
})
//aboutus
app.get("/aboutus", function (req, res) {
    res.render("aboutus")
})

  // connecting to port
    app.listen(port);
