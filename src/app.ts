import axios from 'axios';

import Player from './player.js';
import Leaderboard from './leaderboard.js';

import endpoints from './types/endpoints.js';
import {
    LeaderboardIds,
    apiLeaderboardResponse,
    LeaderboardPlayers,
} from './types/leaderboard.js';

import { GlobalPlayerCountResponse } from './types/playerCounts.js';

let leaderboardData: apiLeaderboardResponse;
export default class HypeApi {
    #headers: object = {
        'user-agent': 'HypeApi-Client/0.1.5',
    };

    #endpoints: endpoints = {
        baseUrl: 'https://api.hyperlandsmc.net',
        hypelb: '/leaderboards',
        hypeuser: '/stats',
        hypexuid: '/xuid',
        hypecounts: '/playerCounts',
    };

    public lastRateLimit: number;

    constructor(options?: { headers?: object; baseUrl?: string }) {
        if (options?.headers) {
            this.#headers = options?.headers;
        }
        if (options?.baseUrl) {
            this.#endpoints.baseUrl = options.baseUrl;
        }
    }

    private createRequest(options: {
        headers?: any;
        url: string;
        method?: 'GET' | 'POST' | 'DELETE' | 'UPDATE';
    }): any {
        return axios
            .default({
                method: options?.method || 'GET',
                url: this.#endpoints.baseUrl + options.url,
                headers: options?.headers || this.#headers,
            })
            .then((res) => {
                this.lastRateLimit = parseInt(
                    res.headers['x-rate-limit-remaining']
                );
                return res.data;
            })
            .catch(() => null);
    }

    private async fetchLeaderboardData(): Promise<void> {
        if (leaderboardData) {
            if (Date.now() - leaderboardData.fetchedAt <= 3600 * 1000 * 3)
                return;
        }
        let data: apiLeaderboardResponse = await this.createRequest({
            url: this.#endpoints.hypelb,
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
            if (data[k].data) delete data[k].data;
        }
        leaderboardData = data as apiLeaderboardResponse;
    }

    public async getLeaderboard(
        lbId: LeaderboardIds
    ): Promise<Leaderboard | undefined> {
        await this.fetchLeaderboardData();
        const lbData = leaderboardData[lbId] as LeaderboardPlayers;
        if (!lbData) {
            return;
        }
        return new Leaderboard(lbData);
    }

    public async getPlayer(playerName: string): Promise<Player | null> {
        const res = await this.createRequest({
            url: this.#endpoints.hypeuser + '/' + playerName,
        });
        if (!res) return res;
        return new Player(res);
    }

    public async getPlayerFromXuid(xuid: string): Promise<Player | null> {
        const res = await this.createRequest({
            url: this.#endpoints.hypexuid + '/' + xuid,
        });
        if (!res) return res;
        return new Player(res);
    }

    public async getPlayerCounts(): Promise<GlobalPlayerCountResponse | null> {
        return this.createRequest({
            url: this.#endpoints.hypecounts,
        }) as GlobalPlayerCountResponse;
    }
}
