var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    server      = express();

mongoose.connect(process.env.DATABASEURL, {useMongoClient: true});

var surveySchema = new mongoose.Schema({
    gender: String,
});

var Survey = mongoose.model("Survey", surveySchema);

server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}));

server.get("/", function(req, res){
   res.render("index"); 
});

server.post("/survey", function(req, res){
    console.log(req.body.gender);
    res.redirect("/");
});

server.listen(process.env.PORT, process.env.IP, function() {
    console.log("Listening...");
});