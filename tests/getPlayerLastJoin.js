const HypeApi = require("../dist/index").default;

const client = new HypeApi();
client.getPlayer("Chicken").then((player) => console.log(player?.getLastLogout()));