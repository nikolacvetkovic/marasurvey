var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    server      = express();

mongoose.connect(process.env.DATABASEURL);

var surveySchema = new mongoose.Schema({
    gender: String,
    year: String,
    education: String,
    useEB: String,
    serviceEB1: String,
    serviceEB2: String,
    serviceEB3: String,
    serviceEB4: String,
    serviceEB5: String,
    serviceEB6: String,
    serviceEB7: String,
    serviceEB8: String,
    serviceEB9: String,
    serviceEB10: String,
    serviceEB11: String,
    serviceEB12: String,
    serviceNoEB: Number,
    opinion1EB: Number,
    opinion2EB: Number
});

var Survey = mongoose.model("Survey", surveySchema);

var serviceNoEBSchema = new mongoose.Schema({
  1: String,
  2: String,
  3: String,
  4: String,
  5: String,
});

var ServiceNoEB = mongoose.model("ServiceNoEB", serviceNoEBSchema);

ServiceNoEB.create({
    1: "Nemate uslove za koriščenje ovih usluga",
    2: "Preferirate tradicionalan način pružanja usluge",
    3: "Nedovoljno poznavanje elektronskog bankarstva",
    4: "Nedostatak sigurnosti u izvršenje transakcija",
    5: "Mogućnost zloupotrebe sredstava"
}, function(err, serviceNoEB){
    if(err){
        console.log(err);
    } else {
        console.log(serviceNoEB);
    }
});

var opinion1EBSchema = new mongoose.Schema({
    1: String,
    2: String,
    3: String,
    4: String
});

var Opinion1EB = mongoose.model("Opinion1EB", opinion1EBSchema);

Opinion1EB.create({
    1: "Potpuno nesiguran",
    2: "Više nesiguran nego siguran",
    3: "Više siguran nego nesiguran",
    4: "Potpuno siguran"
}, function(err, opinion1EB){
    if(err){
        console.log(err);
    } else {
        console.log(opinion1EB);
    }
});

var opinion2EBSchema = new mongoose.Schema({
    1: String,
    2: String,
    3: String,
    4: String
});

var Opinion2EB = mongoose.model("Opinion2EB", opinion2EBSchema);

Opinion2EB.create({
    1: "Koristim elektronske usluge već neko vreme",
    2: "Nisam znao/la za elektronsko bankarstvo ranije - sada sam veoma zainteresovan/a",
    3: "Znao/la sam za eletronsko bankarstvo i ranije - ne želim da ga koristim",
    4: "Znao/la sam i ranije za elektronsko bankarstvo - koristiću ga",
    5: "Nisam znao/la za elektronsko bankarstvo ranije i dalje me ne zanima"
}, function(err, opinion2EB){
    if(err){
        console.log(err);
    } else {
        console.log(opinion2EB);
    }
});

server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}));

server.get("/", function(req, res){
   res.render("index"); 
});

server.post("/survey", function(req, res){
    var survey = {
        gender: req.body.gender,
        year: req.body.year,
        education: req.body.education,
        useEB: req.body.useEB,
        serviceEB1: req.body.serviceEB1 || "NE",
        serviceEB2: req.body.serviceEB2 || "NE",
        serviceEB3: req.body.serviceEB3 || "NE",
        serviceEB4: req.body.serviceEB4 || "NE",
        serviceEB5: req.body.serviceEB5 || "NE",
        serviceEB6: req.body.serviceEB6 || "NE",
        serviceEB7: req.body.serviceEB7 || "NE",
        serviceEB8: req.body.serviceEB8 || "NE",
        serviceEB9: req.body.serviceEB9 || "NE",
        serviceEB10: req.body.serviceEB10 || "NE",
        serviceEB11: req.body.serviceEB11 || "NE",
        serviceEB12: req.body.serviceEB12 || "NE",
        serviceNoEB: Number(req.body.serviceNoEB || 0),
        opinion1EB: Number(req.body.opinion1EB),
        opinion2EB: Number(req.body.opinion2EB)
    };
    Survey.create(survey, function(err, insertedSurvey){
        if(err){
            console.log(err);
        } else {
            res.redirect("/success");
        }
    });
});

server.get("/success", function(req, res) {
    res.render("success");
});

server.listen(process.env.PORT, process.env.IP, function() {
    console.log("Listening...");
});