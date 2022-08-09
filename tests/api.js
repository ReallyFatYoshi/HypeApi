const http = require("http");
const server = http.createServer();

server.on('connect',function(req,socket,head){
    console.log("Connect was made with: %s",req.headers.host);
})

server.on('request',function(req,res){
    const url = "http:"+req.headers.host+":3000";
    const path = new URL(url)?.search;
    res.end(JSON.stringify({
        error: "Invalid endpoint, use /stats"
    }))
    
    if (path!='stats') {

    } else {
        
    }
})

server.listen(3000);