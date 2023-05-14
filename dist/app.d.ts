import Player from './player.js';
import Leaderboard from './leaderboard.js';
import { LeaderboardIds } from './types/leaderboard.js';
import { GlobalPlayerCountResponse } from './types/playerCounts.js';
export default class HypeApi {
    #private;
    lastRateLimit: number;
    constructor(options?: {
        headers?: object;
        baseUrl?: string;
    });
    private createRequest;
    private fetchLeaderboardData;
    getLeaderboard(lbId: LeaderboardIds): Promise<Leaderboard | undefined>;
    getPlayer(playerName: string): Promise<Player | null>;
    getPlayerFromXuid(xuid: string): Promise<Player | null>;
    getPlayerCounts(): Promise<GlobalPlayerCountResponse | null>;
}
