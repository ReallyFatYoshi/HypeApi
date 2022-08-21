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
var _Player_data;
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(data) {
        _Player_data.set(this, void 0);
        __classPrivateFieldSet(this, _Player_data, data, "f");
        this.playerName = data.stats.general.playerName;
        this.online = data.status.online;
        this.xuid = data.stats.general.xuid;
    }
    ;
    getLastLogout(format = "DD/MM/YYYY") {
        var _a;
        const date = new Date(__classPrivateFieldGet(this, _Player_data, "f").status.lastLogout * 1000);
        return {
            fullDate: (((_a = ["YYYY/DD/MM", "MM/DD/YYYY", "DD/MM/YYYY"]) === null || _a === void 0 ? void 0 : _a.filter((v) => v == format)) || ["YYYY/DD/MM"])
                .join("")
                .replace(/YYYY/g, date.getFullYear().toString())
                .replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, "0"))
                .replace(/DD/g, date.getDate().toString().padStart(2, "0")),
            time: date.getHours().toString().padStart(2, "0") +
                ":" +
                date.getMinutes().toString().padStart(2, "0"),
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            timeZone: "UTC",
        };
    }
    getLastServer() {
        return __classPrivateFieldGet(this, _Player_data, "f").status.lastServer;
    }
    getRank() {
        return {
            rank: __classPrivateFieldGet(this, _Player_data, "f").rankData.rank,
            expiry: __classPrivateFieldGet(this, _Player_data, "f").rankData.expiry,
            plusColor: __classPrivateFieldGet(this, _Player_data, "f").rankData.pluscolor,
        };
    }
    getTags() {
        return {
            tag: __classPrivateFieldGet(this, _Player_data, "f").rankData.tag,
            extraTags: __classPrivateFieldGet(this, _Player_data, "f").rankData.extraTags,
        };
    }
    getLevel() {
        return {
            level: __classPrivateFieldGet(this, _Player_data, "f").stats.general.level,
            progress: __classPrivateFieldGet(this, _Player_data, "f").stats.general.progress,
            maxProgress: __classPrivateFieldGet(this, _Player_data, "f").stats.general.maxProgress,
        };
    }
    getTotalWins() {
        let wins = 0;
        for (const b of Object.values(__classPrivateFieldGet(this, _Player_data, "f").stats)) {
            for (const [k, v] of Object.entries(b)) {
                if (!k.toLowerCase().match(/wins$/g))
                    continue;
                wins += v;
            }
        }
        return wins;
    }
    getTotalKills() {
        let kills = 0;
        for (const b of Object.values(__classPrivateFieldGet(this, _Player_data, "f").stats)) {
            for (const [k, v] of Object.entries(b)) {
                if (!k.toLowerCase().match(/kills$/g))
                    continue;
                kills += v;
            }
        }
        return kills;
    }
    /* Bedwars */
    getBedwarsFinalKills() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.bedwars.finalKills;
    }
    getBedwarsKills() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.bedwars.kills;
    }
    getBedwarsWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.bedwars.wins;
    }
    getBedwarsBedsBroken() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.bedwars.bedsBroken;
    }
    getBedwarsBestWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.bedwars.bestWinstreak;
    }
    getBedwarsCurrentWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.bedwars.currentWinstreak;
    }
    /* Skywars */
    getSkywarsKills() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.skywars.kills;
    }
    getSkywarsWinss() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.skywars.wins;
    }
    /* Spleef */
    getSpleefWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.spleef.wins;
    }
    getSpleefCurrentWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.spleef.currentWinstreak;
    }
    getSpleefBestWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.spleef.bestWinstreak;
    }
    /* Uhcmeetup */
    getUHCMeetupWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.uhcmeetup.wins;
    }
    getUHCMeetupKills() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.uhcmeetup.kills;
    }
    /* Duels */
    getDuelsArcherWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.archerWins;
    }
    getDuelsIronWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.ironWins;
    }
    getDuelsPotWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.potWins;
    }
    getDuelsSumoWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.sumoWins;
    }
    getDuelsBuildUhcWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.buildUhcWins;
    }
    getDuelsBestWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.bestWinstreak;
    }
    getDuelsCurrentWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.currentWinstreak;
    }
    getDuelsElo() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.duels.elo;
    }
    /* TheBridge  */
    getTheBridgeWins() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.thebridge.wins;
    }
    getTheBridgeGoals() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.thebridge.goals;
    }
    getTheBridgeBestWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.thebridge.bestWinstreak;
    }
    getTheBridgeCurrentWinstreak() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.thebridge.currentWinstreak;
    }
    getTheBridgePeakRatingSolos() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.thebridge.peakRatingSolos;
    }
    getTheBridgeRatingDataSolos() {
        return __classPrivateFieldGet(this, _Player_data, "f").stats.thebridge.ratingDataSolos;
    }
}
exports.default = Player;
_Player_data = new WeakMap();
