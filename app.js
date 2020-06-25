var http = require('http');
var url = require('url');
var fs = require('fs');

var page404 = "./404Unknown.html";

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`
        <!DOCTYPE html>
        <html lang = "en-US">
            <head>
                <title>Multi-Page with Node</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">

                <!-- Latest compiled and minified CSS -->
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">

                <!-- jQuery library -->
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

                <!-- Popper JS -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

                <!-- Latest compiled JavaScript -->
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

                <!-- Shared CSS Styling-->
                <link rel = "stylesheet" href = "./styles/styles.main.css">
            </head>
            <body>
                <div class = "jumbotron page-header text-center">
                    <h1>That's a 404 Error!</h1>
                    <h2><a href = "./home.html">Take me home!</a></h2>
                </div>
            </body>
        </html>
      `);
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);