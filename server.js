const http = require('http');
const { URL } = require('url');

const startServer = (port, handler) => {
  const server = http.createServer((request, response) => {

    request.url = new URL(`http://localhost:${port}${request.url}`);

    console.log(request.method, request.url.pathname);
    handler(request, response);
  });

  server.listen(port, () => console.log(`server listening on ${port}`));
};

module.exports = { startServer };

