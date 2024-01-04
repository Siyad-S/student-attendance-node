const express = require("express");
const cors = require('cors');
const dbConnection = require('./config/dbConnection')
const studentRoute = require("./routes/studentRoute")

const port = process.env.PORT || 2000;
const app = express();
dbConnection()
app.use(cors());
app.use(express.json());
app.use("/students", studentRoute);

app.listen(port, () => {
    console.log(`Server running on port:${port}`)
})