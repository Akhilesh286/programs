let express = require('express')
let path = require('path')
let app =express()
app.use((req,res,next)=> {console.log("hello")
next();})


app.get('/',function (req,res) {
    // use html filr
    res.sendFile('/home/khi1hk3r/programs/nodeExpress/express.html')
    // or 
    // res.sendFile(path.join(__dirname,'express.html'))    
})
app.get('/singup',(req,res)=> {
    res.sendFile(path.join(__dirname,"singup.html"))
})


app.post('/login',(req,res) => {res.send('hello')})



app.get('/about',(req,res)=> {res.send('hai')})
app.listen(4000,()=> {
    console.log(__filename);
    console.log("started");})