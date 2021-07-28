let http = require('http')
let fs = require('fs')
http.createServer(function (req,res) {
   
   if (req.url==='/') {
     
   
    fs.readFile('host.html', function (err,data) {
     
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()   
    }
  
  )
}
else if (req.url==='/login') {
 res.write('log in ')
  res.end()
}else {
  res.write('error')
  res.end()
}
}).listen(9000,function () {
  console.log('starte');
  
})