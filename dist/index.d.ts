import Player from "./player";
import Leaderboard from "./leaderboard";
import { leaderboardIds } from "./types/leaderboard";
import { apiPlayerCountsResponse } from "./types/playerCounts";
export default class HypeApi {
    #private;
    lastRateLimit: number;
    constructor(options?: {
        headers?: object;
        baseUrl?: string;
    });
    private createRequest;
    private fetchLeaderboardData;
    getLeaderboard(lbId: leaderboardIds): Promise<Leaderboard | undefined>;
    getPlayer(playerName: string): Promise<Player | null>;
    getPlayerFromXuid(xuid: string): Promise<Player | null>;
    getPlayerCounts(): Promise<apiPlayerCountsResponse | null>;
}
