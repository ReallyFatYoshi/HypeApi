import {
    ILeaderboardPlayer,
    ILeaderboardPlayers,
} from '../types/leaderboard.js';

export default class Leaderboard {
    #data: ILeaderboardPlayers;
    #names: string[];

    public name: string;
    public lastRefreshed: number;

    constructor(apiLeaderboard: ILeaderboardPlayers) {
        this.#data = apiLeaderboard;
        this.lastRefreshed = apiLeaderboard.lastRefreshed;
        this.name = apiLeaderboard.name;
        this.#names = apiLeaderboard.players.map((v) => v.name.toLowerCase());
    }

    getPlayer(playerName: string): ILeaderboardPlayer | undefined {
        const found = this.#names.includes(playerName.toLocaleLowerCase());
        if (!found) {
            return;
        }
        const index = this.#names.indexOf(playerName.toLocaleLowerCase());
        return this.#data.players[index];
    }

    hasPlayer(playerName: string): boolean {
        return this.#names.includes(playerName.toLocaleLowerCase());
    }

    getPosition(position: number): ILeaderboardPlayer | undefined {
        return this.#data.players[position - 1] as ILeaderboardPlayer;
    }
}
