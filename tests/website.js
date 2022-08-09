const fs = require("fs");
const http = require("http");
const path = require("path");
const { default: HypeApi } = require("hypeapi");
const server = http.createServer();

const client = new HypeApi();

server.on("connect", function (req, socket, head) {
  console.log("Connect was made with: %s", req.headers.host);
});

server.on("request", async function (req, res) {
  const path = req?.url.split("/").filter((v) => v.length >= 1);
  if (path[0] == "api") {
    if (path[1] == "stats" && req.method == "GET") {
      const player = await client.getPlayer(path[2]);
      return res
        .writeHead(200, {
          "Content-Type": "application/json",
        })
        .end(JSON.stringify(player));
    }
    return res
      .writeHead(401, {
        "Content-Type": "application/json",
      })
      .end(
        JSON.stringify({
          error: "Invalid endpoint, use /stats",
        })
      );
  } else {
    const page = await fs.readFileSync("./tests/index.html",{encoding:'utf8'});
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    }).end(page);
  }
});

server.listen(3006);