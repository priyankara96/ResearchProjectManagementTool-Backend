const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({

   name: {
       type: String,
       required: true,
       trim: true
   },

   idd: {
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


module.exports = mongoose.model('staff', adminSchema);

