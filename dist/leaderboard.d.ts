import { LeaderboardPlayers } from './types/leaderboard.js';
export default class Leaderboard {
    #private;
    name: string;
    lastRefreshed: number;
    constructor(apiLeaderboard: LeaderboardPlayers);
    getPlayer(playerName: string): {
        name: string;
        position: number;
        value: number;
    } | undefined;
    hasPlayer(playerName: string): boolean;
    getPosition(position: number): {
        name: string;
        position: number;
        value: number;
    } | undefined;
}
