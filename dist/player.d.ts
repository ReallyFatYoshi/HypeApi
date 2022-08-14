import { playerStats } from "./interfaces";
export default class Player {
    #private;
    constructor(data: playerStats);
    getLastLogout(format?: "YYYY/DD/MM" | "MM/DD/YYYY" | "DD/MM/YYYY"): {
        fullDate: string;
        time: string;
        day: number;
        month: number;
        year: number;
        timeZone: string;
    };
    getLastServer(): string;
    getRank(): {
        rank: string;
        expiry: number;
        plusColor: string;
    };
    getTags(): {
        tag: string;
        extraTags: string[];
    };
    getLevel(): {
        level: number;
        progress: number;
        maxProgress: number;
    };
    getTotalWins(): number;
    getTotalKills(): number;
    getBedwarsFinalKills(): number;
    getBedwarsKills(): number;
    getBedwarsWins(): number;
    getBedwarsBedsBroken(): number;
    getBedwarsBestWinstreak(): number;
    getBedwarsCurrentWinstreak(): number;
    getSkywarsKills(): number;
    getSkywarsWinss(): number;
    getSpleefWins(): number;
    getSpleefCurrentWinstreak(): number;
    getSpleefBestWinstreak(): number;
    getUHCMeetupWins(): number;
    getUHCMeetupKills(): number;
    getDuelsArcherWins(): number;
    getDuelsIronWins(): number;
    getDuelsPotWins(): number;
    getDuelsSumoWins(): number;
    getDuelsBuildUhcWins(): number;
    getDuelsBestWinstreak(): number;
    getDuelsCurrentWinstreak(): number;
    getDuelsElo(): number;
}
