/**
 * Created by yangyang.xu on 2017/11/22.
 */
var http = require('http');
var url = require('url');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.post('/', function (req, res) {
  console.log('主页 POST 请求');
  res.send('Hello POST');
})

app.get('/del_user', function (req, res) {
  console.log('/del_user 响应 DELETE 请求');
  res.send('删除页面');
})

app.get('/artical_list', function (req, res) {
  console.log('/list_user 响应 GET 请求');
  //允许跨域请求
  res.header('Access-Control-Allow-Origin', '*');
  const testData = [
    {
      title: '贤惠姐1号',
      content: '1号有点傻',
      img_url: ''
    },
    {
      title: '贤惠姐2号',
      content: '2号有点傻',
      img_url: ''
    },
    {
      title: '贤惠姐3号',
      content: '3号有点傻',
      img_url: ''
    },
    {
      title: '贤惠姐4号',
      content: '4号有点傻',
      img_url: ''
    },
    {
      title: '贤惠姐5号',
      content: '5号有点傻',
      img_url: ''
    }
  ];
  var response = {
    "result": testData
  };
  res.end(JSON.stringify(response));
})

var server = app.listen(8877, function () {
  console.log('端口号为8877的服务开启中……');
})

// http.createServer(function (request, response) {
//   var pathname = url.parse(request.url).pathname;
//   console.log("Request for " + pathname + " received.");
//   // 发送 HTTP 头部
//   // HTTP 状态值: 200 : OK
//   // 内容类型: text/plain
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//
//   // 发送响应数据 "Hello World"
//   response.end('Hello World\n');
//
// }).listen(8888);
//
// console.log('server running at http://127.0.0.1:8888/');