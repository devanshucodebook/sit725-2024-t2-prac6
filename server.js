import express from 'express';
var app = express()
var port = process.env.port || 3000;
app.use(express.static('public'))
//app.use(express.static('public1'))
// app.get("/addTwoNumber",(req,res)=>{
// const n1=parseInt(req.query.n1);
// const n2=parseInt(req.query.n2);
// const result=(n1+n2);
// res.json({statuscocde:200,data :result});

// });

// app.get("/Display",(req,res)=>{
//     const n1="<html><body>HELLO THERE</body></html>";
//     res.set('Content-Type','text/html');
//     res.send(Buffer.from(n1));
// });
app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber)
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
    res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) }
})
    

//console.log(addTwoNumber(19,12));

app.listen(port,()=>{
console.log("App listening to: "+port)
})
