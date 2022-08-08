"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const endpoints = {
    hypelb: "https://api.hyperlandsmc.net/leaderboards",
    hypeuser: "https://api.hyperlandsmc.net/stats",
    hypexuid: "https://api.hyperlandsmc.net/xuid",
    hypecounts: "https://api.hyperlandsmc.net/playerCounts",
};
let leaderboardData;
class HypeApi {
    static async fetchLeaderboardData() {
        if (leaderboardData) {
            if (Date.now() - leaderboardData.fetchedAt <= 3600 * 1000 * 3)
                return;
        }
        let data = await (0, axios_1.default)({
            url: endpoints.hypelb,
        })
            .then((res) => {
            res.data.fetchedAt = Date.now();
            return res.data;
        })
            .catch(() => null);
        for (const k of Object.keys(data)) {
            if (k == "fetchedAt" || !Array.isArray(data[k].data))
                continue;
            data[k]["players"] = [];
            for (const p of data[k].data) {
                data[k]["players"].push({
                    name: p[0],
                    position: data[k].data.indexOf(p) + 1,
                    value: p[1],
                });
            }
            if (data[k].data)
                delete data[k].data;
        }
        leaderboardData = data;
    }
    static async getLeaderboard(lb) {
        await this.fetchLeaderboardData();
        return leaderboardData[lb];
    }
    static async getLeaderboardPlayer(lb, playerName) {
        var _a, _b;
        await this.fetchLeaderboardData();
        return (_b = (_a = leaderboardData[lb].players) === null || _a === void 0 ? void 0 : _a.filter((v) => v.name == playerName)) === null || _b === void 0 ? void 0 : _b.at(0);
    }
    static async getPlayer(playerName) {
        return (0, axios_1.default)({
            method: "GET",
            url: endpoints.hypeuser + "/" + playerName,
        })
            .then((res) => res.data)
            .catch((err) => null);
    }
    static async getPlayerFromXuid(xuid) {
        return (0, axios_1.default)({
            method: "GET",
            url: endpoints.hypexuid + "/" + xuid,
        })
            .then((res) => res.data)
            .catch((err) => null);
    }
    static async getPlayerCounts() {
        return (0, axios_1.default)({
            method: "GET",
            url: endpoints.hypecounts,
        })
            .then((res) => res.data)
            .catch((err) => null);
    }
}
exports.default = HypeApi;
