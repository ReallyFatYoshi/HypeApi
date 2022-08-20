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
var _Leaderboard_data, _Leaderboard_names;
Object.defineProperty(exports, "__esModule", { value: true });
class Leaderboard {
    constructor(apiLeaderboard) {
        _Leaderboard_data.set(this, void 0);
        _Leaderboard_names.set(this, void 0);
        __classPrivateFieldSet(this, _Leaderboard_data, apiLeaderboard, "f");
        this.lastRefreshed = apiLeaderboard.lastRefreshed;
        this.name = apiLeaderboard.name;
        __classPrivateFieldSet(this, _Leaderboard_names, apiLeaderboard.players.map((v) => v.name.toLowerCase()), "f");
    }
    getPlayer(playerName) {
        const found = __classPrivateFieldGet(this, _Leaderboard_names, "f").includes(playerName.toLocaleLowerCase());
        if (!found)
            return;
        const index = __classPrivateFieldGet(this, _Leaderboard_names, "f").indexOf(playerName.toLocaleLowerCase());
        return __classPrivateFieldGet(this, _Leaderboard_data, "f").players[index];
    }
    hasPlayer(playerName) {
        return __classPrivateFieldGet(this, _Leaderboard_names, "f").includes(playerName.toLocaleLowerCase());
    }
    getPosition(position) {
        let player = __classPrivateFieldGet(this, _Leaderboard_data, "f").players[position - 1];
        return player;
    }
}
exports.default = Leaderboard;
_Leaderboard_data = new WeakMap(), _Leaderboard_names = new WeakMap();
