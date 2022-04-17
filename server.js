const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv')
dotenv.config()
const app = express();

const adminRoutes = require('./routes/admin')

app.use(bodyParser.json());
app.use(cors());

app.use(adminRoutes);

const PORT =8000;

//const DB_URL ='mongodb+srv://twg:twg123@mernapp.zc2p7.mongodb.net/mernCrud?retryWrites=true&w=majority';
//const DB_URL='mongodb+srv://sliit:sliit123@itpcluster.fpcc4.mongodb.net/furnitureDB?retryWrites=true&w=majority';
const DB_URL = process.env.DB_URI;


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>console.log('DB connection err',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

