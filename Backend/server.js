const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
   })
// Middleware

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
}))


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  
  db.connect((err) => {
    if (err) {
      console.error("Erreur de connexion à la base de données :", err);
      return;
    }
    console.log("✅ Connecté à la base de données MySQL !");
  });

app.listen(3001,()=>{
    console.log("server is running on port 3001")
})