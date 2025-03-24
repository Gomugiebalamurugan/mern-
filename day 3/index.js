
// var local=require('./local.js')
// var server=http.createServer(function(req,res){
//     res.writeHead(200);
//     let a=10;
//     let b=20;
//     res.write('The sum of '+a+' and '+b+' is '+(a+b)+'\n');
//     res.write('Hello World\n');
//     res.end();
// });
// server.listen(port,host,()=>{
//     console.log('server is running on http://'+host+':'+port)
// });
// http.createServer(function(req,res){
//     if(req.url=='/'){
//         res.writeHead(200)
//         res.write('<h1>Welcome page<h1>')
//         res.write('<h2>This is the home page</h2>');
//         res.write('<h2>Click on the links below to know more about me</h2>');
//         res.write('<a href="/about">About</a><br>');
//         res.write('<a href="/contact">Contact</a>');
//         res.end()
//     }
//     else if(req.url=='/about'){
//         res.writeHead(200)
//         res.write('<h1>About page<h1>')
//         res.write('<h2>My name is gomugie</h2>');
//         res.write('<h2>I am a student</h2>');
//         res.write('<h2>I am from India</h2>');
//         res.end()
//     }
//     else if(req.url=='/contact'){
//         res.writeHead(200)
//         res.write('Contact page\n')
//         res.write('Name: Gomugie Bala\n');
//         res.write('Email:gomugiebala@gmail.com\n');
//         res.write('Phone: 7418200115')

//         res.end()
//     }
//     else{   
//         res.writeHead(404)
//         res.write('Page not found')
//         res.end()
//     }
// }).listen(port,host,()=>{
//     console.log('server is running on http://'+host+':'+port)
// })

//  http.createServer(function(req,res){
//     res.writeHead(200)
//     res.write('The sum ='+String(local.add(10,20))+'\n');
//     res.write('The difference='+String(local.sub(300,204))+'\n');
//     res.write('The product ='+String(local.mul(60,20))+'\n');
//     res.write('The division='+String(local.div(1490,20))+'\n');
//     res.end()
// }).listen(port,host,()=>{
//     console.log('server is running on http://'+host+':'+port)
// })
// var http=require('http')
// const host='127.0.0.1'
// const port=3000
// const url=require('url')
// http.createServer(function(req,res){
//     const urlstring='http://www.example.com/user?name=gomugie&age=20'
//     const parsedurl=url.parse(urlstring,true)
//     res.writeHead(200)
//     res.write('Protocol: '+parsedurl.protocol+'\n')
//     res.write('Hostname: '+parsedurl.hostname+'\n')
//     res.write('Pathname: '+parsedurl.pathname+'\n')
//     res.write('Name: '+parsedurl.query.name+'\n')
//     res.write('Age: '+parsedurl.query.age+'\n')
//     res.end()
// }).listen(port,host,()=>{
//     console.log('server is running on http://'+host+':'+port)
// })
// const url = require('url');
// let obj={
//     protocol:'http',
//     host:'www.google.com',
//     pathname:'/books',
//     query:{
//         name:'gomugie',
//         pwd:20112004}
// }
// let urlformat=url.format(obj)
// console.log(urlformat) 
// const urlstring='http://www.google.com/books?name=gomugie&pwd=20112004'
// const parsedurl=url.parse(urlstring,true)
// console.log(parsedurl.protocol)
// console.log(parsedurl.hostname)
// console.log(parsedurl.pathname)
// console.log(parsedurl.query.name)
// console.log(parsedurl.query.pwd)
// const url = require('url');
// const baseurl = 'http://www.think.com'
// const relativeurl = '/user'
// const relativeurl2='/gomugie'
// const resolvedurl = url.resolve(baseurl, relativeurl)
// const resolvedurl2=url.resolve(resolvedurl,relativeurl2)
// console.log(resolvedurl2)
// console.log(resolvedurl)
// const urlstring='http://www.google.com/books?name=gomugie&pwd=20112004'
// const parsedurl=url.parse(urlstring,true)
// console.log(parsedurl.query.name)

// const querystring=require('querystring')
// const queryString='name=gomugie&pwd=20112004'
// const parsedQuery=querystring.parse(queryString)
// console.log(parsedQuery)

// const querystring=require('querystring')
// const { add } = require('./local')
// const str='Hello World$^&*@S'
// let encoded=querystring.escape(str)
// console.log(encoded)
// let decoded=querystring.unescape(encoded)
// console.log(decoded)
// let obj={
//     name:['gomugie','bala'],
//     address:{
//         city:'chennai',
//         country:'india'
//     },
//     pwd:20112004
// }
// let query=querystring.stringify(obj)
// console.log(query)

// const local=require('./local.js')
// console.log(local.add(10,20))
// console.log(local.sub(300,204))
// console.log(local.mul(60,20))
// console.log(local.div(1490,20))


// const local=require('./local.js')
// console.log(local.strrev('gomugie'))
// console.log(local.strcount('gomugie'))
// console.log(local.strupper('gomugie'))
// console.log(local.strlower('GOMUGIE'))
// console.log(local.str('gomugie'))



// const EventEmitter=require('events')
// const event=new EventEmitter()
// event.on('strlen',(str)=>{
//     console.log('The length of the string is '+str.length)
// })
// event.emit('strlen','gomugie')
// const EventEmitter=require('events')
// const event1=new EventEmitter()
// event.on('strlen',(str)=>{
//     console.log('Hello '+str)
// })
// event.emit('strlen','gomugie')
// event.emit('strlen','bala')
// const EventEmitter=require('events')
// const event2=new EventEmitter()
// event.on('greet',(str)=>{
//     console.log('Hello '+str)
   
// })
// let listener=(str)=>{
//     console.log('Hello '+str)
// }
// event.emit('greet',listener('gomugie'))
// event.emit('greet',listener('bala'))

// event1.removeListener('greet',listener( 'gomugie'))
// event2.emit('greet','gomugie')




// const fs=require('fs')
// fs.readFile('new.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file content:",data)
//     }
// })
// const http=require('http')
// const fs=require('fs')
// const path=require('path')

// const server=http.createServer((req,res)=>{
//     if(req.url==='/' || req.url==='/index.html'){
//         const filePath=path.join(__dirname,'index.html');
//         fs.readFile(filePath,'utf-8',(err,data)=>{
//             if(err){
//                 res.writeHead(500,{'content-Type':'text/plain'})
//                 res.end('Server error')
//             }
//             else{
//                 res.writeHead(200,{'content-type':'text/html'})
//                 res.end(data)
//             }
//         })
//     }else{
//         res.writeHead(404,{'Content-Type':'text/plain'})
//         res.end('404 not Found')
//     }
// })

// server.listen(3000,()=>{
//     console.log('Server running at http://localhost:3000')
// })

// const fs = require('fs').promises
// fs.readFile('new.txt', 'utf-8').then((data) => console.log('file content:',data))
// .catch((err) => console.log('error:',err))

// const fs = require('fs')
// try{
//     const data = fs.readFileSync('new.txt','utf-8')
//     console.log('file content:',data)
// }catch(err){
//     console.log('error:',err)
// }
// const fs=require('fs')
// fs.writeFile('output.txt','Hello node js','utf-8',(err)=>
// {
//     if(err)
//     {
//         console.log('error',err)
//     }
//     console.log("wirte the file...")
// })

const fs=require('fs')
try{
    fs.writeFileSync('file.txt','this is a synchornous write method','utf-8')
    console.log('file witten susccessfully')
}catch(err){
    console.log('error:',err)
}

 const fs=require('fs')
 try{
     fs.appendFileSync('file.txt','  this is a synchornous append method method','utf-8')
     console.log('file appended susccessfully')}
    catch(err){
        console.log('error:',err)
    }