require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const supportRoute = require("./routes/support");
app.use("/api/support", supportRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
