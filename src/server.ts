import http from 'http';

const requestListener: http.RequestListener = (_, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(`<h1>Hey there!</h1>`);
}

const PORT = 8000;
const server = http.createServer(requestListener);
server.listen(PORT);