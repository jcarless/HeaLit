var Question = require('../Models/Questions.js');

var test = {};

    test.Question = "How many States are in the U.S.A?";
    test.Options = ["3", "51", "52", "50"];
    test.Answer = ["50"];
    test.Tags = ["Geography"];


module.exports = function(app) {

    app.get('/', function(req, res){
        var entry = new Question (test);
        entry.save(function(err, doc){
            if(err) return handleError(err);
            //save
            else{
                console.log(doc);
            }
        })

    res.send("HealLit");

    });

    app.get('/quiz', function(req, res){
        Question.find({})
            .exec(function(err, question){
                res.json(question);
            });

    });


};