import { playerCounts, playerStats, LeaderboardPlayers } from "./interfaces";
import { leaderboardIds } from "./types";
export default class HypeApi {
    #private;
    lastRateLimit: number;
    constructor(options?: {
        endpoints?: {
            hypelb?: string;
            hypeuser?: string;
            hypexuid?: string;
            hypecounts?: string;
        };
    });
    private createRequest;
    private fetchLeaderboardData;
    getLeaderboard(lb: leaderboardIds): Promise<LeaderboardPlayers>;
    getLeaderboardPlayer(lb: leaderboardIds, playerName: string): Promise<{
        name: string;
        position: number;
        value: number;
    } | undefined>;
    getPlayer(playerName: string): Promise<playerStats | null>;
    getPlayerFromXuid(xuid: string): Promise<playerStats | null>;
    getPlayerCounts(): Promise<playerCounts | null>;
}
