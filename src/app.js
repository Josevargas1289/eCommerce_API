const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
})