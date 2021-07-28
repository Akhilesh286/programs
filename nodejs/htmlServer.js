let http = require('http')
let fs = require('fs')
http.createServer(function (req,res) {
   
   
    fs.readFile('htmlServer.html', function (err,data) {
     
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()   
    }
  
  )
}).listen(8000)