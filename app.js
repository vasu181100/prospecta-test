const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

const base_url = "https://api.publicapis.org/";

app.use(cors());
app.use(express.json());

app.get("/data", (req, res)=>{
    const category = req.query.category;
    axios.get(base_url + "entries", {params: {category: category}})
    .then((response)=>{
        res.send(response.data);
    })
    .catch((err)=>{
        res.send(err);
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})