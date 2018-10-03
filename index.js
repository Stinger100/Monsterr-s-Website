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
    res.render("gettingstarted/installation")
});
// games
app.get("/games", function (req, res) {
    res.render("games")
});
//aboutus
app.get("/aboutus", function (req, res) {
    res.render("aboutus")
});
//contact
app.get("/contact", function (req, res) {
    res.render("contact")
})
//faq
app.get("/faq", function (req, res) {
    res.render("faq")
})
// /documentation/installation
app.get("/documentation/installation", function (req, res) {
    res.render("gettingstarted/installation")
});
// /documentation/basic game
app.get("/documentation/basicgame", function (req, res) {
    res.render("gettingstarted/basicgame")
});
// /documentation/advanced game
app.get("/documentation/advancedgame", function (req, res) {
    res.render("gettingstarted/advancedgame")
});
// /documentation/framegame
app.get("/documentation/framegame", function (req, res) {
    res.render("gettingstarted/framegame")
});
// /documentation/latencymodule
app.get("/documentation/latencymodule", function (req, res) {
    res.render("gettingstarted/latencymodule")
});
// /documentation/surveymodule
app.get("/documentation/surveymodule", function (req, res) {
    res.render("gettingstarted/surveymodule")
});
// /documentation/networkmodul
app.get("/documentation/networkmodule", function (req, res) {
    res.render("gettingstarted/networkmodule")
});
// /documentation/monsterrguide/setup
app.get("/documentation/monsterrguide/setup", function (rq, res) {
    res.render("monsterrguide/setup")
});
// /documentation/monsterrguide/events
app.get("/documentation/monsterrguide/events", function (rq, res) {
    res.render("monsterrguide/events")
});
// /documentation/monsterrguide/commands
app.get("/documentation/monsterrguide/commands", function (rq, res) {
    res.render("monsterrguide/commands")
});
app.get("/documentation/monsterrguide/network", function (rq, res) {
    res.render("monsterrguide/network")
});
app.get("/documentation/monsterrguide/stages", function (rq, res) {
    res.render("monsterrguide/stages")
});
app.get("/documentation/monsterrguide/chat", function (rq, res) {
    res.render("monsterrguide/chat")
});
  // connecting to port
app.get("/documentation/monsterrguide/css", function (rq, res) {
    res.render("monsterrguide/css")
});
app.get("/documentation/monsterrguide/canvas", function (rq, res) {
    res.render("monsterrguide/canvas")
});
app.get("/documentation/monsterrguide/logging", function (rq, res) {
    res.render("monsterrguide/logging")
});
app.get("/documentation/monsterrguide/bots", function (rq, res) {
    res.render("monsterrguide/bots")
});
app.get("/documentation/monsterrguide/unittesting", function (req, res) {
    res.render("monsterrguide/unitTesting")
})
    app.listen(port);
