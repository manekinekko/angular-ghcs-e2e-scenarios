const http = require("http");

const host = "localhost";
const port = 8080;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.writeHead(200);
  res.end(JSON.stringify({ date: new Date().toUTCString() }));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
