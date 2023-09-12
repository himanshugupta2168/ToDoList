const mongoose= require("mongoose")
require ("dotenv").config();

// this function establishes the connection between the db and our server 
const dbConnect = ()=>{
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,

  }).
  then(()=> console.log("DB Connection successful ho gya "))
  .catch((err)=> {console.log("Nhi connect ho pa rha db se ", err);
    process.exit(1);
  })

}



module.exports= dbConnect;