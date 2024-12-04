const http = require('http');

const server = http.createServer((req, res) => {
  // This will cause a memory leak if the request is never ended.
  // Because the response object will never be closed.
  // Missing res.end()
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});