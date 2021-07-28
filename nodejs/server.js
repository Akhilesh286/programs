
let http = require('http')
http.createServer(sre).listen(7000)

function sre(r,re) {
  re.write('aakhil')
  re.end()
}
http.createServer(function (req,res) {
  res.write('iam akhilesh')
  res.end()
}).listen(8000)