const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const app = express();

const adminRoutes = require("./routes/admin");
const researchGroupRoutes = require("./routes/ResearchGroupRoutes");
const submissionRoutes = require("./routes/StudentSubmissionRoutes");

const routAuthentication = require("./routes/AuthenticationRoute");
const staffRoutes = require('./routes/staff');
const panelRoutes = require('./routes/panel');


app.use(bodyParser.json());
app.use(cors());




app.use(routAuthentication);
app.use(adminRoutes);
app.use(researchGroupRoutes);
app.use(staffRoutes);
app.use(panelRoutes);
app.use(submissionRoutes);

const PORT = 8000;

const DB_URL = process.env.DB_URI;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => console.log("DB connection err", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
