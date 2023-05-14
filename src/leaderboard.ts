import { LeaderboardPlayers } from './types/leaderboard.js';

export default class Leaderboard {
    #data: LeaderboardPlayers;
    #names: string[];

    public name: string;
    public lastRefreshed: number;

    constructor(apiLeaderboard: LeaderboardPlayers) {
        this.#data = apiLeaderboard;
        this.lastRefreshed = apiLeaderboard.lastRefreshed;
        this.name = apiLeaderboard.name;
        this.#names = apiLeaderboard.players.map((v) => v.name.toLowerCase());
    }

    getPlayer(playerName: string):
        | {
              name: string;
              position: number;
              value: number;
          }
        | undefined {
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

    getPosition(position: number):
        | {
              name: string;
              position: number;
              value: number;
          }
        | undefined {
        let player: any = this.#data.players[position - 1];
        return player;
    }
}
