import http from "http";

const host = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(request.headers);
  response.setHeader("Content-Type", "text/html");
  response.setHeader("CustomHeader", "value test");
  response.writeHead(200, { CustomHeader2: "value test2" });
  response.end("<h1>Hello from headers.js!</h1>");
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
