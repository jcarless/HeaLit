var Question = require('../Model/Questions.js');

var test = {};

    test.Question = "How many States are in the U.S.A?";
    test.Options = ["3", "51", "52", "50"];
    test.Answer = ["50"];
    test.Tags = ["Geography"];


module.exports = function(app) {

        // Main Route
    app.get('/', function(req, res){
        res.sendFile('./public/index.html');
    });

    // app.get('/', function(req, res){
    //     var entry = new Question (test);
    //     entry.save(function(err, doc){
    //         if(err) return err;
    //         //save
    //         else{
    //             console.log(doc);
    //         }
    //     })

    // res.sendFile('./public/index.html');

    // });

    // app.get('/quiz', function(req, res){
    //     Question.find({})
    //         .exec(function(err, question){
    //             res.render("quiz", {
    //                 Question1: question[1].Question,
    //                 Option1: question[1].Options[0],
    //                 Option2: question[1].Options[1],
    //                 Option3: question[1].Options[2],
    //                 Option4: question[1].Options[3]

    //             });
    //         });

    // });


};