const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');
const port = 5000;
const path = require('path')
const __variableOfChoice = path.resolve()

app.use(cors());
app.use(express.json())
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__variableOfChoice,"/frontend/build")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__variableOfChoice,"frontend","build","index.html"))
    })
}else{
    app.get("/",(req,res)=>{
        res.send("api is running")
    })
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

