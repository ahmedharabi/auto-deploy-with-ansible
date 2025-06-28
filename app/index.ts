const express = require('express');
const app = express();
const port = 3000;
app.get("/",(req,res)=>{
    res.json({message:"this has been deployed using ansible"})
})
app.listen(port, () => {console.log(`Server running on port: ${port}`)})
