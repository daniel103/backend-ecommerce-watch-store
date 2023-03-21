require("dotenv").config();
require('./mongoDB/mongoConnect');
const express = require('express')
const app = express();
// const MongoDB = require("./mongoDB/mongoConnect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {} = require('./config/secreet')
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use("/api/product/v1", require("./routes/product"));
app.use("/api/user", require("./routes/users"));
app.use("/api/orders", require("./routes/order"))
// MongoDB();


const PORT = process.env.PORT || 8000;
app.listen(PORT , () => console.log(`app on PORT ${PORT}`))


  
