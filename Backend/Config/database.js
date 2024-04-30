const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect = () => {
    const url = process.env.DATABASE_URL;

    if(!url){
        return res.status(400).json({
            message:"Database url is not present"
        });
    }

    mongoose.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then(()=>{console.log("Database Connected successfully")})
    .catch((err)=>{
        console.log("Error in db connection");
        console.log("error message: ",err.message)
        process.exit(1);
    }
    )
}

module.exports = dbConnect;