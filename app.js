/**
 * Created by Admin on 2017/10/20.
 */
const http = require('http');
// 创建一个HTTP服务器

// 调用
 var ip = require('ip');
 ip = new ip();
 ip.address();



// 创建本地服务器
var server =  http.createServer( function (req,res) {
    console.log('客户端向服务发送请求' +　req.url );
    //
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
})

 server.listen(80,ip.address());
server.listen(80,'127.0.0.1');
// console.log()









//****************
// 定时器

// 全局变量

//路径
// console.log(__dirname);//不包含文件名
// console.log(__filename);//包含文件名
