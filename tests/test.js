const HypeApi = require("hypeapi").default;
const client = new HypeApi();

(async function () {
  const res = await client.getPlayerCounts();
  console.log("currentRateLimit: %s",client.lastRateLimit)
  console.log(res.bedwars);
})();