const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({

   name: {
       type: String,
       required: true,
       trim: true
   },

   date: {
    type: String,
    required:true
   },

   time: {
       type: String,
       required: true
   }
  
   

}, { timestamps: true});


module.exports = mongoose.model('panelshedule', adminSchema);

