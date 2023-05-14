const HypeApi = require("../dist/index").default;

const client = new HypeApi();

(async function () {
  const res = await client.getPlayerCounts();
  console.log("currentRateLimit: %s",client.lastRateLimit)
  console.log(res.bedwars);
})();