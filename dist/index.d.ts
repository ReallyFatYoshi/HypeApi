import { playerCounts, playerStats, LeaderboardPlayers } from "./interfaces";
import { leaderboardIds } from "./types";
import Player from "./player";
export default class HypeApi {
    #private;
    lastRateLimit: number;
    constructor(options?: {
        headers?: object;
        baseUrl?: string;
    });
    private createRequest;
    private fetchLeaderboardData;
    getLeaderboard(lb: leaderboardIds): Promise<LeaderboardPlayers>;
    getLeaderboardPlayer(lb: leaderboardIds, playerName: string): Promise<{
        name: string;
        position: number;
        value: number;
    } | undefined>;
    getPlayer(playerName: string): Promise<Player | null>;
    getPlayerFromXuid(xuid: string): Promise<playerStats | null>;
    /**
     * @method getPlayerCounts
     * @returns {Promise<playerCounts | null>} Object with player counts for all gamemodes.
     */
    getPlayerCounts(): Promise<playerCounts | null>;
}
