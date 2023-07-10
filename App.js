const express = require("express");
const app = express();
const dotenv = require("dotenv");
const user = require("./Models/userModel");
const userRoute = require("./Routes/userRoute");
const postRoute = require("./Routes/postRoute");
dotenv.config({ path: "./.env" });

require("./Connection");

app.use(express.json());
app.use("/user", userRoute);
app.use("/post", postRoute);

app.listen(8000, () => {
 console.log("connected server port of 8000");
});
