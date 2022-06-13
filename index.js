const express = require("express");
const cors = require("cors");
const conn = require("./database/db");
const PORT = process.env.PORT || 8007;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/user/", require("./api/user"));


conn();

app.listen(PORT, () => {
  console.log("Server started on port " + PORT + "....");
});
