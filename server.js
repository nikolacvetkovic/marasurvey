var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    server      = express();

mongoose.connect(process.env.DATABASEURL, {useMongoClient: true});

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
    serviceNoEB: String,
    opinion1EB: String,
    opinion2EB: String
});

var Survey = mongoose.model("Survey", surveySchema);

server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}));

server.get("/", function(req, res){
   res.render("index"); 
});

server.post("/survey", function(req, res){
    console.log(req.body);
    res.redirect("/success");
});

server.get("/success", function(req, res) {
    res.render("success");
});

server.listen(process.env.PORT, process.env.IP, function() {
    console.log("Listening...");
});