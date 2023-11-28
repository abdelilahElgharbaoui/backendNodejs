const express = require('express')
const app = express();

const productrouter = require("./routes/products.routes")
const categoryRouter = require("./routes/categories.routes");


const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require("dotenv")

const option = {

}
app.use(cors());

dotenv.config()

mongoose.connect(process.env.DB_URL)
.then(result=>app.listen(process.env.PORT,()=>console.log("server running")))
.catch(err=>console.log(err));

app.use(express.json()); 
app.use("/products",productrouter); 
app.use("/categories", categoryRouter); 



app.options("*", cors());
