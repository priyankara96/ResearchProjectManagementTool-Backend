const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({

   topic: {
       type: String,
       required: true,
       trim: true
   },

   body: {
    type: String,
    required:true
   },

   date: {
       type: String,
       required: true

   }

//    type: {
//        type: String,
//        default:"Main Category"
//    }
   

}, { timestamps: true});


module.exports = mongoose.model('Admin', adminSchema);

