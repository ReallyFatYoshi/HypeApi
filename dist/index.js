"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HypeApi_headers, _HypeApi_endpoints;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
let leaderboardData;
class HypeApi {
    constructor(options) {
        _HypeApi_headers.set(this, {
            "user-agent": "HypeApi-Client/0.1.0-alpha",
        });
        _HypeApi_endpoints.set(this, {
            hypelb: "https://api.hyperlandsmc.net/leaderboards",
            hypeuser: "https://api.hyperlandsmc.net/stats",
            hypexuid: "https://api.hyperlandsmc.net/xuid",
            hypecounts: "https://api.hyperlandsmc.net/playerCounts",
        });
        this.lastRateLimit = 120;
        if (options === null || options === void 0 ? void 0 : options.headers)
            __classPrivateFieldSet(this, _HypeApi_headers, options === null || options === void 0 ? void 0 : options.headers, "f");
        if (options === null || options === void 0 ? void 0 : options.endpoints)
            for (const option of Object.entries(options.endpoints))
                __classPrivateFieldGet(this, _HypeApi_endpoints, "f")[option[0]] = option[1];
    }
    createRequest(options) {
        return (0, axios_1.default)({
            method: (options === null || options === void 0 ? void 0 : options.method) || 'GET',
            url: options.url,
            headers: (options === null || options === void 0 ? void 0 : options.headers) || __classPrivateFieldGet(this, _HypeApi_headers, "f"),
        })
            .then((res) => {
            this.lastRateLimit = parseInt(res.headers["x-rate-limit-remaining"]);
            return res.data;
        })
            .catch((_) => null);
    }
    async fetchLeaderboardData() {
        if (leaderboardData) {
            if (Date.now() - leaderboardData.fetchedAt <= 3600 * 1000 * 3)
                return;
        }
        let data = await (0, axios_1.default)({
            url: __classPrivateFieldGet(this, _HypeApi_endpoints, "f").hypelb,
            headers: __classPrivateFieldGet(this, _HypeApi_headers, "f"),
        })
            .then((res) => {
            this.lastRateLimit = parseInt(res.headers["x-rate-limit-remaining"]);
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
    async getLeaderboard(lb) {
        await this.fetchLeaderboardData();
        return leaderboardData[lb];
    }
    async getLeaderboardPlayer(lb, playerName) {
        var _a, _b;
        await this.fetchLeaderboardData();
        return (_b = (_a = leaderboardData[lb].players) === null || _a === void 0 ? void 0 : _a.filter((v) => v.name == playerName)) === null || _b === void 0 ? void 0 : _b.at(0);
    }
    async getPlayer(playerName) {
        return this.createRequest({
            url: __classPrivateFieldGet(this, _HypeApi_endpoints, "f").hypeuser + "/" + playerName,
        });
    }
    async getPlayerFromXuid(xuid) {
        return this.createRequest({
            url: __classPrivateFieldGet(this, _HypeApi_endpoints, "f").hypexuid + "/" + xuid,
        });
    }
    async getPlayerCounts() {
        return this.createRequest({
            url: __classPrivateFieldGet(this, _HypeApi_endpoints, "f").hypecounts,
        });
    }
}
exports.default = HypeApi;
_HypeApi_headers = new WeakMap(), _HypeApi_endpoints = new WeakMap();
