const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
const route = require("./Routes/routes");
app.use("/api/v1",route);

const cors = require("cors");
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

const dbConnect = require("./Config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("Your Server is up and running");
})