const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv").config();
const path = require("path");



//route import
const authRoute = require("./routes/authRoute");
const externalRoute = require("./routes/externalRoute");
const movieRoute = require('./routes/movieRoute')
const productRoute = require('./routes/productRoute')
const SubRoute = require('./routes/subRoute')
const Payment = require('./routes/paymentRoute')
const cate = require('./routes/cateRoute')
//options
const app = express();
const port = 3001;

//middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

//connect mongoDB
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log("DB Connected");
    });
  })
  .catch((err) => console.log(err));

//home
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/auth", authRoute);;
app.use('/api/movie', movieRoute)
app.use('/api/product',productRoute )
app.use("/api/subscription", SubRoute );
app.use("/api/payment",Payment  );
app.use("/api",cate)
// app.use("/category", categoryRoute);
// app.use("/category", categoryRoute);
// app.use("/order", orderRoute);
app.use(externalRoute);
