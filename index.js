require('dotenv').config();
let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');




//body parser middlewave
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


 ///////  routes
//  "/"
app.get("/", function (req, res) {
    res.render("home")
});
app.post("/send", function (req, res) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAILUSER, // generated ethereal user
            pass: process.env.GMAILPASS // generated ethereal password
        }
    });
    console.log('SMTP Configured');

    let mailOptions = {
        from: 'Monsterr Framework <process.env.GMAILUUSER>', // sender address
        to: 'marian.zoicas@gmail.com', // list of receivers
        subject: 'Monsterr Framework Inquiry', // Subject line
        text: 'You have a message with the following details... Name: '+req.body.name+ 'Email: '+req.body.email +'Phone: '+req.body.phone+ 'Message: '+ req.body.message, // plain text body
        html:  '<p> You have a message with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Phone: '+req.body.phone+'</li><li>Message: '+req.body.message+ '</li></ul>'
    };
       // console.log(mailOptions)
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else
        {
            console.log('Message sent: '+info.response);
            res.render('contact-success');
        }

    });
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
    });
//faq
    app.get("/faq", function (req, res) {
        res.render("faq")
    });
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
    });
    app.listen(port);
    console.log('Server listening on port ' + port)
