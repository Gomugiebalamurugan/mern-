const express=require('express');
const mongoose=require('mongoose');
const app= express()

let uri='mongodb://127.0.0.1:27017'
mongoose.connect(uri,{dbName:'updel'}).then(()=>{
    console.log('Mongodb server connected.......');
}).catch((err)=>{
    console.error('Error has occured',err);
})

const us=new mongoose.Schema({
    username:String

    

})
const User=mongoose.model('users',us)

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/submit', async (req, res) => {
    let user = req.body;
    await User.insertOne(user);
    res.json(user);
});

app.get('/all',async(req,res)=>{
    let data=await User.find()
    res.json(data)
})

app.put('/update',async(req,res)=>{
    let sel={"user":"Sathya"}
    let update={"user":"Gomugie"}
    await User.updateOne(sel,{"$set":update})
    res.send("Update the data.......")
})

app.delete('/delete', async(req,res)=>{
    let sel={"user":"Kritika"}
    await User.deleteOne(sel)
    res.send("Deleted successfully.......")
})

app.listen(4000,()=>{
    console.log('Server running on http://127.0.0.1:4000');
    
})