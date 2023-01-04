import http from "http";
import url from "url";

const host = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  let result;

  if (request.method === "GET") {
    // result = "Hello from get_post.js!";
    const queryParams = url.parse(request.url, true).query;
    result = JSON.stringify(queryParams);
  } else {
    response.statusCode = 405;
    result = "Method not allowed";
  }

  response.end(result);
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
