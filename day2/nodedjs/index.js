// let to=require('to-case')
// console.log(to.camel('foo_Bar'))
// console.log(to.constant('foo_Bar'))
// console.log(to.dot('hi how are you'))
// console.log(to.capital('good morning'))
// console.log(to.inverse('hello   world'))
// console.log(to.lower('jai hind'))
// console.log(to.pascal('a quick brown fox'))
// console.log(to.sentence("how are you"))
// console.log(to.snake('use case'))
// console.log(to.title('i am fine'))
// console.log(to.upper('do you know'))
// console.log(to.slug('one two three'))
// console.log(to.snake('lorem ipsum'))
// console.log(to.space('no_one_can_do_it'))

var http=require('http')
const host="127.0.0.1"
const port=3000
var server=http.createServer(function(req,res){
    res.writeHead   (200,{'Content-Type':'text/html'})          
    res.write('<h1>hello world</h1>')
});
server.listen(port,host,function(){
    console.log('server is running on http://'+host+':'+port)
});