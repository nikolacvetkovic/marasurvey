var express                 = require("express"),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose  = require("passport-local-mongoose"),
    expressSession          = require("express-session"),
    server                  = express();
    
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

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", userSchema);


// var serviceNoEBSchema = new mongoose.Schema({
//   1: String,
//   2: String,
//   3: String,
//   4: String,
//   5: String,
// });

// var ServiceNoEB = mongoose.model("ServiceNoEB", serviceNoEBSchema);

// ServiceNoEB.create({
//     1: "Nemate uslove za koriščenje ovih usluga",
//     2: "Preferirate tradicionalan način pružanja usluge",
//     3: "Nedovoljno poznavanje elektronskog bankarstva",
//     4: "Nedostatak sigurnosti u izvršenje transakcija",
//     5: "Mogućnost zloupotrebe sredstava"
// }, function(err, serviceNoEB){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(serviceNoEB);
//     }
// });

// var opinion1EBSchema = new mongoose.Schema({
//     1: String,
//     2: String,
//     3: String,
//     4: String
// });

// var Opinion1EB = mongoose.model("Opinion1EB", opinion1EBSchema);

// Opinion1EB.create({
//     1: "Potpuno nesiguran",
//     2: "Više nesiguran nego siguran",
//     3: "Više siguran nego nesiguran",
//     4: "Potpuno siguran"
// }, function(err, opinion1EB){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(opinion1EB);
//     }
// });

// var opinion2EBSchema = new mongoose.Schema({
//     1: String,
//     2: String,
//     3: String,
//     4: String
// });

// var Opinion2EB = mongoose.model("Opinion2EB", opinion2EBSchema);

// Opinion2EB.create({
//     1: "Koristim elektronske usluge već neko vreme",
//     2: "Nisam znao/la za elektronsko bankarstvo ranije - sada sam veoma zainteresovan/a",
//     3: "Znao/la sam za eletronsko bankarstvo i ranije - ne želim da ga koristim",
//     4: "Znao/la sam i ranije za elektronsko bankarstvo - koristiću ga",
//     5: "Nisam znao/la za elektronsko bankarstvo ranije i dalje me ne zanima"
// }, function(err, opinion2EB){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(opinion2EB);
//     }
// });

server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended: true}));
server.use(expressSession({
    secret: "anketa je vrh",
    resave: false,
    saveUninitialized: false
}));

server.use(passport.initialize());
server.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// User.register(new User({username: "cvele"}), "1505", function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

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

server.get("/results", isLoggedIn, function(req, res) {
   res.render("results"); 
});

server.get("/results/gender", isLoggedIn, function(req, res) {
    Survey.count({gender: "m"}, function(err, count1){
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({gender: "z"}, function(err, count2){
            if(err){
                console.log(err);
                res.redirect("/results");
            }
            var statistics = {
                mBr: count1,
                zBr: count2,
                uk: count1+count2,
                mUd: roundToTwo(count1/(count1+count2)*100),
                zUd: roundToTwo(count2/(count1+count2)*100)
            };
            res.json(statistics);
        });
    });
});

server.get("/results/year", isLoggedIn, function(req, res) {
    Survey.count({year: "18-35"}, function(err, count1){
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({year: "36-55"}, function(err, count2) {
            if(err){
                console.log(err);
                res.redirect("/results");
            }
            Survey.count({year: "56+"}, function(err, count3) {
                if(err){
                    console.log(err);
                    res.redirect("/results");
            }
            var statistics = {
                c1Br: count1,
                c2Br: count2,
                c3Br: count3,
                uk: count1+count2+count3,
                c1Ud: roundToTwo(count1/(count1+count2+count3)*100),
                c2Ud: roundToTwo(count2/(count1+count2+count3)*100),
                c3Ud: roundToTwo(count3/(count1+count2+count3)*100)
            };
            res.json(statistics);
            });
        });
    })
});

server.get("/results/education", isLoggedIn, function(req, res) {
    Survey.count({education: "IV"}, function(err, count1){
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({education: "VI"}, function(err, count2) {
            if(err){
                console.log(err);
                res.redirect("/results");
            }
            Survey.count({education: "VII"}, function(err, count3) {
                if(err){
                    console.log(err);
                    res.redirect("/results");
            }
            var statistics = {
                c1Br: count1,
                c2Br: count2,
                c3Br: count3,
                uk: count1+count2+count3,
                c1Ud: roundToTwo(count1/(count1+count2+count3)*100),
                c2Ud: roundToTwo(count2/(count1+count2+count3)*100),
                c3Ud: roundToTwo(count3/(count1+count2+count3)*100)
            };
            res.json(statistics);
            });
        });
    })
});

server.get("/results/useEB", isLoggedIn, function(req, res) {
    Survey.count({useEB: "DA"}, function(err, count1){
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({useEB: "NE"}, function(err, count2) {
            if(err){
                console.log(err);
                res.redirect("/results");
            }
            var statistics = {
                c1Br: count1,
                c2Br: count2,
                uk: count1+count2,
                c1Ud: roundToTwo(count1/(count1+count2)*100),
                c2Ud: roundToTwo(count2/(count1+count2)*100)
            };
            res.json(statistics);
        });
    })
});

server.get("/results/serviceEB", isLoggedIn, function(req, res) {
    Survey.count({serviceEB1: "DA"}, function(err, count1) {
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({serviceEB2: "DA"}, function(err, count2) {
            if(err){
                console.log(err);
                res.redirect("/results");
            }
                Survey.count({serviceEB3: "DA"}, function(err, count3) {
                if(err){
                    console.log(err);
                    res.redirect("/results");
                }
                Survey.count({serviceEB4: "DA"}, function(err, count4) {
                    if(err){
                        console.log(err);
                        res.redirect("/results");
                    }
                    Survey.count({serviceEB5: "DA"}, function(err, count5) {
                        if(err){
                            console.log(err);
                            res.redirect("/results");
                        }
                        Survey.count({serviceEB6: "DA"}, function(err, count6) {
                            if(err){
                                console.log(err);
                                res.redirect("/results");
                            }
                            Survey.count({serviceEB7: "DA"}, function(err, count7) {
                                if(err){
                                    console.log(err);
                                    res.redirect("/results");
                                }
                                Survey.count({serviceEB8: "DA"}, function(err, count8) {
                                    if(err){
                                        console.log(err);
                                        res.redirect("/results");
                                    }
                                    Survey.count({serviceEB9: "DA"}, function(err, count9) {
                                        if(err){
                                            console.log(err);
                                            res.redirect("/results");
                                        }
                                        Survey.count({serviceEB10: "DA"}, function(err, count10) {
                                            if(err){
                                                console.log(err);
                                                res.redirect("/results");
                                            }
                                            Survey.count({serviceEB11: "DA"}, function(err, count11) {
                                                if(err){
                                                    console.log(err);
                                                    res.redirect("/results");
                                                }
                                                Survey.count({serviceEB12: "DA"}, function(err, count12) {
                                                    if(err){
                                                        console.log(err);
                                                        res.redirect("/results");
                                                    }
                                                    var uk = count1+count2+count3+count4+count5+count6+count7+count8+count9+count10+count11+count12;
                                                    var statistics = {
                                                        c1Br: count1,
                                                        c2Br: count2,
                                                        c3Br: count3,
                                                        c4Br: count4,
                                                        c5Br: count5,
                                                        c6Br: count6,
                                                        c7Br: count7,
                                                        c8Br: count8,
                                                        c9Br: count9,
                                                        c10Br: count10,
                                                        c11Br: count11,
                                                        c12Br: count12,
                                                        uk: uk,
                                                        c1Ud: roundToTwo(count1/(uk)*100),
                                                        c2Ud: roundToTwo(count2/(uk)*100),
                                                        c3Ud: roundToTwo(count3/(uk)*100),
                                                        c4Ud: roundToTwo(count4/(uk)*100),
                                                        c5Ud: roundToTwo(count5/(uk)*100),
                                                        c6Ud: roundToTwo(count6/(uk)*100),
                                                        c7Ud: roundToTwo(count7/(uk)*100),
                                                        c8Ud: roundToTwo(count8/(uk)*100),
                                                        c9Ud: roundToTwo(count9/(uk)*100),
                                                        c10Ud: roundToTwo(count10/(uk)*100),
                                                        c11Ud: roundToTwo(count11/(uk)*100),
                                                        c12Ud: roundToTwo(count12/(uk)*100)
                                                    };
                                                    res.json(statistics);
                                                });
                                            });
                                        });
                                    });
                                });
                            });    
                        });
                    });
                });
            });
        });
    });
});

server.get("/results/serviceNoEB", isLoggedIn, function(req, res) {
    Survey.count({serviceNoEB: "1"}, function(err, count1) {
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({serviceNoEB: "2"}, function(err, count2) {
            if(err){
                console.log(err);
                res.redirect("/results");
            }
            Survey.count({serviceNoEB: "3"}, function(err, count3) {
                if(err){
                    console.log(err);
                    res.redirect("/results");
                }
                Survey.count({serviceNoEB: "4"}, function(err, count4) {
                    if(err){
                        console.log(err);
                        res.redirect("/results");
                    }
                    Survey.count({serviceNoEB: "5"}, function(err, count5) {
                        if(err){
                            console.log(err);
                            res.redirect("/results");
                        }
                        var uk = count1+count2+count3+count4+count5;
                        var statistics = {
                            c1Br: count1,
                            c2Br: count2,
                            c3Br: count3,
                            c4Br: count4,
                            c5Br: count5,
                            uk: uk,
                            c1Ud: roundToTwo(count1/(uk)*100),
                            c2Ud: roundToTwo(count2/(uk)*100),
                            c3Ud: roundToTwo(count3/(uk)*100),
                            c4Ud: roundToTwo(count4/(uk)*100),
                            c5Ud: roundToTwo(count5/(uk)*100)
                        };
                        res.json(statistics);
                    });
                });
            });
        });
    });
});

server.get("/results/opinion1EB", isLoggedIn, function(req, res) {
    Survey.count({opinion1EB: "1"}, function(err, count1) {
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({opinion1EB: "2"}, function(err, count2) {
            if(err){
                console.log(err);
                res.redirect("/results");
            }
            Survey.count({opinion1EB: "3"}, function(err, count3) {
                if(err){
                    console.log(err);
                    res.redirect("/results");
                }
                Survey.count({opinion1EB: "4"}, function(err, count4) {
                    if(err){
                        console.log(err);
                        res.redirect("/results");
                    }
                    var uk = count1+count2+count3+count4;
                    var statistics = {
                        c1Br: count1,
                        c2Br: count2,
                        c3Br: count3,
                        c4Br: count4,
                        uk: uk,
                        c1Ud: roundToTwo(count1/(uk)*100),
                        c2Ud: roundToTwo(count2/(uk)*100),
                        c3Ud: roundToTwo(count3/(uk)*100),
                        c4Ud: roundToTwo(count4/(uk)*100)
                    };
                    res.json(statistics);
                });
            });
        });
    });
});

server.get("/results/opinion2EB", isLoggedIn, function(req, res) {
    Survey.count({opinion2EB: "1"}, function(err, count1) {
        if(err){
            console.log(err);
            res.redirect("/results");
        }
        Survey.count({opinion2EB: "2"}, function(err, count2) {
            if(err){
                console.log(err);
                res.redirect("/results");
            }
            Survey.count({opinion2EB: "3"}, function(err, count3) {
                if(err){
                    console.log(err);
                    res.redirect("/results");
                }
                Survey.count({opinion2EB: "4"}, function(err, count4) {
                    if(err){
                        console.log(err);
                        res.redirect("/results");
                    }
                    Survey.count({opinion2EB: "5"}, function(err, count5) {
                        if(err){
                            console.log(err);
                            res.redirect("/results");
                        }
                        var uk = count1+count2+count3+count4+count5;
                        var statistics = {
                            c1Br: count1,
                            c2Br: count2,
                            c3Br: count3,
                            c4Br: count4,
                            c5Br: count5,
                            uk: uk,
                            c1Ud: roundToTwo(count1/(uk)*100),
                            c2Ud: roundToTwo(count2/(uk)*100),
                            c3Ud: roundToTwo(count3/(uk)*100),
                            c4Ud: roundToTwo(count4/(uk)*100),
                            c5Ud: roundToTwo(count5/(uk)*100)
                        };
                        res.json(statistics);
                    });
                });
            });
        });
    });
});

server.get("/login", function(req, res) {
    res.render("login");
});

server.post("/login", passport.authenticate("local", {
    successRedirect: "/results",
    failureRedirect: "/login"
}), function(req, res){
});

server.get("/logout", function(req, res) {
   req.logout();
   res.redirect("/login");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

server.listen(process.env.PORT, process.env.IP, function() {
    console.log("Listening...");
});