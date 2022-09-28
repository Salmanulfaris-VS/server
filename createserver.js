var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
if(req.url==='/'){
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'content-Type':'text/html'})
    res.write(data)
    res.end()
    })
}else if(req.url==='/login'){
    res.write('admin page')
    res.end()
}else {
    res.write('error')
    res.end()
}
}).listen(4555,function(){
    console.log("server started")
})
