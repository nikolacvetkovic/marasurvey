var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    server      = express();

mongoose.connect("mongodb://localhost/marasurveydevelop");

server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}));

server.get("/", function(req, res){
   res.render("index"); 
});

server.listen(process.env.PORT, process.env.IP, function() {
    console.log("Listening...");
});