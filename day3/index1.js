const http=require('http')
const fs=require('fs')
const path=require('path')

const server=http.createServer((req,res)=>{
  let fp='.'+req.url
    if(fp==='./'){
        fp='./index.html'
    }
    const en=path.extname(fp)
    let ct='text/html'
    if(en=='.css'){
        ct='text/css'
    }
    else if(en=='.js'){
        ct='text/javascript'

    }
    fs.readFile(fp,'utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{'content-Type':'text/plain'})
            res.end('500 Internal Server Error')
        }
        else{
            res.writeHead(200,{'content-Type':ct})
            res.end(data)
        }
    })
}).listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
})