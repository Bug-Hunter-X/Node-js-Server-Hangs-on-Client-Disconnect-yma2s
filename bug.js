const http = require('http');

const server = http.createServer((req, res) => {
  // Without this line, Node.js will hang indefinitely
  // if a client disconnects before the response is fully sent.
  req.on('close', () => {
    console.log('Client disconnected.');
  });

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});