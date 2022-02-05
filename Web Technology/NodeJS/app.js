import express from "express";
//const express = require('express');
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js"

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use('/api/users',usersRoutes);
app.get('/',(req,res) => res.send("Hello From Homepage"));
app.listen(PORT, () => console.log("server running on port: http://localhost:"+PORT));