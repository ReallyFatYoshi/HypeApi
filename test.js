const HypeApi = require("hypeapi").default;

(async function () {
  const res = await HypeApi.getPlayerCounts();
  console.log(res);
})();