                   //NODEJS

// <!-- routing creating stream and writing in it >
// var http=require('http');
// var fs=require('fs');
// var server=http.createServer(function(req,res){
//     console.log('req was made' +req.url);
//     // res.writeHead(200,{'Content-Type':'text/plain'});
//     // var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
//     if(req.url=='/login'){
//       res.writeHead(200,{'Content-Type':'text/html'});
//    fs.createReadStream(__dirname+'/login.html','utf8').pipe(res);
//     }
//     if(req.url=='/home'){
//        res.writeHead(200,{'Content-Type':'text/html'});
//     fs.createReadStream(__dirname+'/signup.html','utf8').pipe(res);
//     }
  
   
// });
// <!read file and write file >
// fs.readFile('readme.txt','utf-8',function(err,data){
//     console.log(data);
//     fs.writeFile('writeme.txt',data);
// });
// var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
// var myWriteStream=fs.createWriteStream(__dirname+'/writeme.txt');
// myReadStream.pipe(myWriteStream);
// console.log(__dirname);
// console.log('me');
// console.log(__filename);
// <!--listening to server at port and its default ip is mentioned>
// server.listen(3000,'127.0.0.1');
// console.log('listeningg');



// <!--EXPRESS>
var express=require('express');
var app=express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine','ejs');
app.use('/static',express.static('static'));
app.get('/',function(req,res){
    res.send('this is home page');
});
app.get('/contact',function(req,res){
    res.send('this is contact page');
});
app.get('/profile/:id/:name',function(req,res){
    res.send('you are viewing id of'+req.params.id+'and name is '+req.params.name);
});
app.get('/login/:id',function(req,res){
    // res.sendFile(__dirname+'/login.html');
    var data={password:'pwdef',users:['user1','user1','user1']};
    res.render('login',{id:req.params.id,data:data,qr:req.query});
});
app.post('/login',urlencodedParser,function(req,res){
    // res.sendFile(__dirname+'/login.html');
    // var data={password:'pwdef',users:['user1','user1','user1']};
    
    res.render('login-success',{data:req.body});
});
app.get('/signup',function(req,res){
    res.sendFile(__dirname+'/signup.html');
})
app.listen(3000,function(){
    console.log('listening to port 3000');
});