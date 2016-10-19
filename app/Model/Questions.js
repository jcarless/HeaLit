var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    Question: {
        type:String,
        required:true,
        unique:true
    },
    Options: {
        type:Array,
        required:true
    },
    Answer: {
        type:String,
        required:true
    },
    Tags: {
        type:Array,
        required:false
    }
});

var Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;