import Endpoints from '../enums.js';
import { PlayerResponse } from '../types/player.js';
import PlayerSkin from './image.js';

export default class Player {
    #data: PlayerResponse;

    public online: boolean;
    public xuid: string;
    public playerName: string;
    public coins: number;
    public crystals: number;
    public tokens: number;

    public totalWins: number;
    public totalKills: number;

    constructor(data: PlayerResponse) {
        this.#data = data;

        this.playerName = data.stats.general.playerName;
        this.online = data.status.online;
        this.xuid = data.stats.general.xuid;

        this.coins = data.stats.general.coins;
        this.crystals = data.stats.general.crystals;
        this.tokens = data.stats.general.tokens;

        let kills = 0;
        let wins = 0;
        for (const b of Object.values(this.#data.stats)) {
            for (const [k, v] of Object.entries(b)) {
                const matchesKills = /kills$/g.test(k.toLowerCase()),
                    matchesWins = /wins$/g.test(k.toLowerCase());
                if (!matchesKills && !matchesWins) {
                    continue;
                }
                if (matchesKills) {
                    kills += v as number;
                }
                if (matchesWins) {
                    wins += v as number;
                }
            }
        }

        this.totalKills = kills;
        this.totalWins = wins;
    }

    getLastLogout(
        format: 'YYYY/DD/MM' | 'MM/DD/YYYY' | 'DD/MM/YYYY' = 'DD/MM/YYYY'
    ): {
        fullDate: string;
        time: string;
        day: number;
        month: number;
        year: number;
        timeZone: string;
    } {
        const date = new Date(this.#data.status.lastLogout * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return {
            fullDate: (
                ['YYYY/DD/MM', 'MM/DD/YYYY', 'DD/MM/YYYY']?.filter(
                    (v) => v == format
                ) || ['YYYY/DD/MM']
            )
                .at(0)
                .replace(/YYYY/g, year.toString())
                .replace(/MM/g, month.toString().padStart(2, '0'))
                .replace(/DD/g, day.toString().padStart(2, '0')),
            time: `${date.getHours().toString().padStart(2, '0')}:${date
                .getMinutes()
                .toString()
                .padStart(2, '0')}`,
            day,
            month,
            year,
            timeZone: 'UTC',
        };
    }

    async getSkin(): Promise<PlayerSkin> {
        return await PlayerSkin.create(
            `${Endpoints.baseUrl}/skin/${this.#data.stats.general.playerName}`
        );
    }

    getLastServer(): string {
        return this.#data.status.lastServer;
    }

    getRank(): {
        rank: string;
        expiry: number;
        plusColor: string;
    } {
        const { rank, expiry, pluscolor } = this.#data.rankData;

        return {
            rank,
            expiry,
            plusColor: pluscolor,
        };
    }

    getTags(): {
        tag: string;
        extraTags: string[];
    } {
        const { tag, extraTags } = this.#data.rankData;
        return {
            tag,
            extraTags,
        };
    }

    getLevel(): {
        level: number;
        progress: number;
        maxProgress: number;
    } {
        const { level, progress, maxProgress } = this.#data.stats.general;
        return {
            level,
            progress,
            maxProgress,
        };
    }

    /**
     * @deprecated Use `totalWins` instead
     */
    getTotalWins(): number {
        return this.totalWins;
    }

    /**
     * @deprecated Use `totalKills` instead
     */
    public getTotalKills(): number {
        return this.totalKills;
    }

    /* Bedwars */
    public get getBedwarsFinalKills(): number {
        return this.#data.stats.bedwars.finalKills;
    }

    public get getBedwarsKills(): number {
        return this.#data.stats.bedwars.kills;
    }

    public get getBedwarsWins(): number {
        return this.#data.stats.bedwars.wins;
    }

    public get getBedwarsBedsBroken(): number {
        return this.#data.stats.bedwars.bedsBroken;
    }

    public get getBedwarsBestWinstreak(): number {
        return this.#data.stats.bedwars.bestWinstreak;
    }

    public get getBedwarsCurrentWinstreak(): number {
        return this.#data.stats.bedwars.currentWinstreak;
    }

    /* Skywars */
    public get getSkywarsKills(): number {
        return this.#data.stats.skywars.kills;
    }

    public get getSkywarsWinss(): number {
        return this.#data.stats.skywars.wins;
    }

    /* Spleef */
    public get getSpleefWins(): number {
        return this.#data.stats.spleef.wins;
    }

    public get getSpleefCurrentWinstreak(): number {
        return this.#data.stats.spleef.currentWinstreak;
    }

    public get getSpleefBestWinstreak(): number {
        return this.#data.stats.spleef.bestWinstreak;
    }

    /* Uhcmeetup */
    public get getUHCMeetupWins(): number {
        return this.#data.stats.uhcmeetup.wins;
    }

    public get getUHCMeetupKills(): number {
        return this.#data.stats.uhcmeetup.kills;
    }

    /* Duels */
    public get getDuelsArcherWins(): number {
        return this.#data.stats.duels.archerWins;
    }

    public get getDuelsIronWins(): number {
        return this.#data.stats.duels.ironWins;
    }

    public get getDuelsPotWins(): number {
        return this.#data.stats.duels.potWins;
    }

    public get getDuelsSumoWins(): number {
        return this.#data.stats.duels.sumoWins;
    }

    public get getDuelsBuildUhcWins(): number {
        return this.#data.stats.duels.buildUhcWins;
    }

    public get getDuelsBestWinstreak(): number {
        return this.#data.stats.duels.bestWinstreak;
    }

    public get getDuelsCurrentWinstreak(): number {
        return this.#data.stats.duels.currentWinstreak;
    }

    public get getDuelsElo(): number {
        return this.#data.stats.duels.elo;
    }

    /* TheBridge  */
    public get getTheBridgeWins() {
        return this.#data.stats.thebridge.wins;
    }

    public get getTheBridgeGoals() {
        return this.#data.stats.thebridge.goals;
    }

    public get getTheBridgeBestWinstreak() {
        return this.#data.stats.thebridge.bestWinstreak;
    }

    public get getTheBridgeCurrentWinstreak() {
        return this.#data.stats.thebridge.currentWinstreak;
    }

    public get getTheBridgePeakRatingSolos() {
        return this.#data.stats.thebridge.peakRatingSolos;
    }

    public get getTheBridgeRatingDataSolos() {
        return this.#data.stats.thebridge.ratingDataSolos;
    }
}
