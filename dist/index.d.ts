interface playerCounts {
    "total": number;
    "bedwars": {
        "total": number;
        "modes": {
            "solos": number;
            "doubles": number;
            "squads": number;
        };
    };
    "lobby": {
        "total": number;
    };
    "skywars": {
        "total": number;
        "modes": {
            "solos": number;
            "doubles": number;
            "duels": number;
        };
    };
    "thebridge": {
        "total": number;
        "modes": {
            "solos-ranked": number;
            "solos-casual": number;
            "doubles-casual": number;
        };
    };
    "uhcmeetup": {
        "total": number;
        "modes": {
            "solos": number;
        };
    };
    "duels": {
        "total": number;
    };
}
interface playerStats {
    status: {
        online: boolean;
        lastLogout: number;
        lastServer: string;
    };
    "rankData": {
        "rank": string;
        "tag": string;
        "extraTags": Array<string>;
        "pluscolor": string;
        "expiry": number;
    };
    "stats": {
        "general": {
            "playerName": string;
            "xuid": number;
            "level": number;
            "progress": number;
            "maxProgress": number;
        };
        "skywars": {
            "wins": number;
            "kills": number;
        };
        "bedwars": {
            "wins": number;
            "kills": number;
            "finalKills": number;
            "bedsBroken": number;
            "currentWinstreak": number;
            "bestWinstreak": number;
        };
        "thebridge": {
            "wins": number;
            "goals": number;
            "currentWinstreak": number;
            "bestWinstreak": number;
            "ratingDataSolos": {
                "r": number;
                "RD": number;
                "sigma": number;
                "lastCalculatedRD": number;
            };
            "peakRatingSolos": number;
        };
        "spleef": {
            "wins": number;
            "currentWinstreak": number;
            "bestWinstreak": number;
        };
        "duels": {
            "buildUhcWins": number;
            "potWins": number;
            "ironWins": number;
            "archerWins": number;
            "sumoWins": number;
            "elo": number;
            "currentWinstreak": number;
            "bestWinstreak": number;
        };
        "uhcmeetup": {
            "wins": number;
            "kills": number;
        };
    };
}
interface LeaderboardPlayers {
    name: string;
    lastRefreshed: number;
    players: Array<{
        name: string;
        position: number;
        value: number;
    }>;
}
declare type leaderBoardId = "stats.bedwars.bestWinstreak" | "stats.bedwars.brokenBeds" | "stats.bedwars.currentWinstreak" | "stats.bedwars.finalKills" | "stats.bedwars.kills" | "stats.bedwars.wins" | "stats.duels.bestWinstreak" | "stats.duels.currentWinstreak" | "stats.duels.elo" | "stats.duels.wins" | "stats.level" | "stats.skywars.kills" | "stats.skywars.wins" | "stats.spleef.bestWinstreak" | "stats.spleef.currentWinstreak" | "stats.spleef.wins" | "stats.thebridge.bestWinstreak" | "stats.thebridge.currentWinstreak" | "stats.thebridge.goals" | "stats.thebridge.ratingDoubles" | "stats.thebridge.ratingSolos" | "stats.thebridge.wins" | "stats.totalKills" | "stats.totalWins" | "stats.uhcmeetup.kills" | "stats.uhcmeetup.win";
export default class HypeApi {
    private static fetchLeaderboardData;
    static getLeaderboard(lb: leaderBoardId): Promise<LeaderboardPlayers>;
    static getLeaderboardPlayer(lb: leaderBoardId, playerName: string): Promise<{
        name: string;
        position: number;
        value: number;
    } | undefined>;
    static getPlayer(playerName: string): Promise<playerStats | undefined>;
    static getPlayerFromXuid(xuid: string): Promise<playerStats | undefined>;
    static getPlayerCounts(): Promise<playerCounts | undefined>;
}
export {};
