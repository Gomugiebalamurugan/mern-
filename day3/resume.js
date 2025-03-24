let http=require('http')
let fs= require('fs')
let path= require('path')

http.createServer((req,res) =>{
 let fp ='.'+req.url
 if(fp === './') 
    fp='./reume.html'
 const en= path.extname('reume.html')
 let contentType='text/html'

 if(en === '.css'){
    contentType='text/css'
 }
 fs.readFile(fp,'utf-8',(err,data) => {
    if(err){
        console.log('server error:',err);
    }
    else{
        res.writeHead(200)
        res.end(data)
    }
 })

}).listen(3000,'127.0.0.1',()=>{
    console.log('server run on http://127.0.0.1:3000');
})