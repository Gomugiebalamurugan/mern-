const express = require('express');
const path = require('path');
const app = express();

app.get("/", (req, res) => res.sendFile(__dirname+'/index.html'));

app.get('/convert', (req, res) => {
    let  {mile} = req.query
    res.send('Kilo meter value of '+mile+" is "+String(Number(mile) * 1.609));

})

app.get('/covert',(req,res)=>{
    let {kilo}=req.query
    res.send('Miles value of '+kilo+' is '+String(Number(kilo/1.609)))
})
app.listen(5000, () => {
    console.log(`Server is running at http://localhost:5000`);
});