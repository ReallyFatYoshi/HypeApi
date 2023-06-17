import HypeApi from "../dist/index.js";

const client = new HypeApi();

(async function () {
  const player = await client.getPlayer('Chicken');
  const skin = await player.getSkin();
  console.log("currentRateLimit: %s",client.lastRateLimit)
  console.log("Bedwars Wins: %s", player.getBedwarsWins);
  console.log("Skin Hash: %s", skin.hash);
  console.log("Skin dataurl: %s", skin.dataurl);
})();