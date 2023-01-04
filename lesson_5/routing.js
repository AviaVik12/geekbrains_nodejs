import http from "http";
import { findSourceMap } from "module";
import url from "url";

const host = "localhost";
const port = 3000;

const users = [
  { name: "Viktor", age: 15, id: 1 },
  { name: "Roberto", age: 14, id: 2 },
  { name: "Vikky", age: 16, id: 3 },
];

const routes = {
  "/": "<h1>Hello from routing.js</h1>",
  "/users": users,
  "/users/:id": (params) => {},
};

const findRoutes = (url) => {
  if (routes[url]) {
    return routes[url];
  }
};

const server = http.createServer((request, response) => {
  let result;

  if (request.method === "GET") {
    response.setHeader("Content-type", "application/json");
    const route = findRoutes(request.url.split("?")[0]);
    result = JSON.stringify(route);
  } else {
    response.statusCode = 405;
    result = "Method not allowed";
  }

  response.end(result);
});

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
