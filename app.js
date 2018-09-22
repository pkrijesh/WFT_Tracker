var express =require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');
var path=require('path');
var http=require('http');
const hostname='localhost';  //localhost
var app=express();
var api =require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/wft');
//on connection
mongoose.connection.on('connected',()=>{
    console.log('conected to the mongodb database over27017');
});
mongoose.connection.on('error',(err)=>{
    if(err)
    {
       return console.log('Error in database connection: '+err);
    }
});

//adding middle ware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'dist')));
app.use('/',api);


app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname + '/dist/index.html'));  });
var port=process.env.PORT || '3000';
var server=http.createServer(app);
server.listen(3000,'localhost',()=>console.log("server is running....."));
