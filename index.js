const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/connectDB')
const userRoute = require('./routes/userRoute')
const schoolRoute =require("./routes/schoolRoute");
const morgan = require('morgan')

const app = express();
dotenv.config();
connectDB();

//middleware
app.use(express.json())
app.use('/api/users', userRoute)
app.use("/api/schools", schoolRoute)
app.use(morgan('dev'))

app.get('/', (req, res)=> {
    res.send('<h1>welcome to our school portal</h1>')
})


const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})