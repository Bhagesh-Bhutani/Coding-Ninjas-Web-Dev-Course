const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req,res){
    let filePath = '';
    let statusCode = 200;
    switch(req.url){
        case '/':
            filePath = './index.html';
            break;
        default:
            filePath = './404.html';
            statusCode = 404;
    }

    res.writeHead(statusCode, {'content-type': 'text/html'});
    
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log(err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);
    });
};

const server = http.createServer(requestHandler);

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running at : localhost:" + port);
});