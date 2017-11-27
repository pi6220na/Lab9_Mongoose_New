/**
 * Created by pi6220na on 11/1/2017.
 */
var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//var ObjectID = mongoose.Schema.Types.ObjectID;



//define your schema
var taskSchema = new mongoose.Schema( {
    text: String,
    completed: Boolean,
    dateCreated: Date,
    dateCompleted: Date,

    // reference to user object creator, useful for access info

    creator: {ref: 'User',type: mongoose.Schema.Types.ObjectId}         //needed lowercase d in Id

});




// compile taskSchema into Mongoose model object
var Task = mongoose.model('Task', taskSchema);

// export the Task so our other code can use it
module.exports = Task;
