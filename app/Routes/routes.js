var Question = require('../Models/Questions.js');

var test = {};

    test.Question = "this is a test";
    test.Options = ["A", "B", "C", "D"];
    test.Answer = ["B"];
    test.Tags = ["test"];


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


};