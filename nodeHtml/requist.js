let http = require('http')
let fs = require('fs')
let url = require('url')
http.createServer(function (req,res) {
   let q=url.parse(req.url,true)

   
   if (q.pathname==='/') {
     
   
    fs.readFile('requist.html', function (err,data) {
     
    res.writeHead(200,{'content-type':'text/html'})
    res.write(data)
    res.end()   
    }
    
  
  )
}

else if (q.pathname==='/download'){
  res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>downloading............</h1>')
        res.end()
}
else if (q.pathname==='/startb') {
    fs.readFile('singup.html', function (err,data)
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    }
    )
}
else if (q.pathname==='/singupa') {
  res.writeHead(200,{'content-type':'text/html'})
  console.log(q.query);
  let welcom = 'welcom   '
  let name =q.query.fname+q.query.lname
  console.log();
res.write('<h1>'+welcom+name+'</h1>')
res.end()
}
else {
    res.write('error')
    res.end()
}

}).listen(5000,function () {
  console.log('starte');
  
})