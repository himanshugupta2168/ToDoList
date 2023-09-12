const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    work :{
        type:String , 
        required:true,
    }
});


module.exports= mongoose.model("task", taskSchema);

// we have given this model the name task and we need to use the name task to use this 