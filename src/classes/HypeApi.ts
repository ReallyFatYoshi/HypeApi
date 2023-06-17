import axios from 'axios';

import {
    TLeaderboardId,
    IAPILeaderboardResponse,
    ILeaderboardPlayers,
} from '../types/leaderboard.js';
import { IGlobalPlayerCountResponse } from '../types/playerCounts.js';
import Endpoints from '../enums.js';

import Player from './player.js';
import Leaderboard from './leaderboard.js';
import Server from './server.js';

let leaderboardData: IAPILeaderboardResponse;
export default class HypeApi {
    #headers: object = {
        'user-agent': 'HypeApi-Client/0.1.5',
    };

    public lastRateLimit: number;
    private baseUrl?: string;

    constructor(options?: { headers?: object; baseUrl?: string }) {
        if (options?.headers) {
            this.#headers = options?.headers;
        }
        if (options?.baseUrl) {
            this.baseUrl = options.baseUrl;
        }
    }

    private createRequest(options: {
        headers?: any;
        path: string;
        method?: 'GET' | 'POST' | 'DELETE' | 'UPDATE';
    }): Promise<any> {
        return axios
            .default({
                method: options?.method || 'GET',
                url: `${this.baseUrl ?? Endpoints.baseUrl}${options.path}`,
                headers: options?.headers || this.#headers,
            })
            .then((res) => {
                this.lastRateLimit = parseInt(
                    res.headers['x-rate-limit-remaining']
                );

                return res.data;
            })
            .catch((error) => null);
    }

    private async fetchLeaderboardData(): Promise<void> {
        if (leaderboardData) {
            if (Date.now() - leaderboardData.fetchedAt <= 3600 * 1000 * 3) {
                return;
            }
        }
        let data: IAPILeaderboardResponse = await this.createRequest({
            path: Endpoints.hypelb,
        });

        data.fetchedAt = Date.now();

        for (const k of Object.keys(data)) {
            if (k == 'fetchedAt' || !Array.isArray(data[k].data)) continue;
            data[k]['players'] = [];
            for (const p of data[k].data) {
                data[k]['players'].push({
                    name: p[0],
                    position: data[k].data.indexOf(p) + 1,
                    value: p[1],
                });
            }
            if (data[k].data) {
                delete data[k].data;
            }
        }
        leaderboardData = data as IAPILeaderboardResponse;
    }

    public getLeaderboard(lbId: TLeaderboardId): Leaderboard | undefined {
        this.fetchLeaderboardData();

        const lbData = leaderboardData[lbId] as ILeaderboardPlayers;
        if (!lbData) {
            return;
        }

        return new Leaderboard(lbData);
    }

    public async getPlayer(query: string): Promise<Player> {
        const res = await this.createRequest({
            path: `${
                /\d{16}/.test(query)
                    ? Endpoints.hypexuid
                    : Endpoints.hypeuser
            }/${query}`,
        });
        if (!res) {
            return res;
        }
        return new Player(res);
    }

    /**
     * @deprecated NOTE: Use `getPlayer` instead!
     */
    public async getPlayerFromXuid(xuid: string): Promise<Player> {
        return this.getPlayer(xuid);
    }

    public async getPlayerCounts(): Promise<Server> {
        const value = await this.createRequest({
            path: Endpoints.hypecounts,
        }) as IGlobalPlayerCountResponse;

        return new Server(value);
    }
}
