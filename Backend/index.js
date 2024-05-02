const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const upload = multer();
app.use(upload.none());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 4000;


const route = require("./Routes/routes");
app.use("/api/v1",route);


/*  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header','*');
    
    next();
  }); */

/* app.use(cors({
    origin:"*",
    credentials:true,
    allowedHeaders : ["Content-Type", "Authorization"]
    
})) */ 

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ["Accept", "Accept-Language", "Content-Language", "Content-Type"],
    methods: ["POST"]
}));



const dbConnect = require("./Config/database");
dbConnect();

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send("Your Server is up and running");
})