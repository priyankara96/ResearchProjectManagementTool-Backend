const mongoose = require('mongoose');
const MarkingSchema = new mongoose.Schema({

    groupID: {
        type: String,
        requires:true
    }, 
    topic: {
       type: String,
       required: true,
       trim: true
   },
   criteria: {
    type: String,
    required:true
   },
   Student1: {
    type:String,
},
Student2: {
    type:String,
},
Student3: {
    type:String,
},
Student4: {
    type:String,
},
Mark1: {
    type:Number,
},
Mark2: {
    type:Number,
},
Mark3: {
    type:Number,
},
Mark4: {
    type:Number,
},

//    type: {
//        type: String,
//        default:"Main Category"
//    }
   

}, { timestamps: true});


module.exports = mongoose.model('Marking', MarkingSchema);

