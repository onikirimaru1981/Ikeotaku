//require modules

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");

//create app
const app = express();

//Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Routes
app.use("/users", usersRoutes);

//execute app listening on port
app.listen(process.env.PORT, () =>
    console.log("todo guai por aqui en el puerto  ", process.env.PORT)
);