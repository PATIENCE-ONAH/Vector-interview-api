const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB  = require("./config/dbConnection");
const { route } = require("./routes");
const PORT = 3000;

const app = express();

dotenv.config();
connectDB();

//middlleware
app.use(express.json());
app.use(cors());

app.use("/api", route)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });