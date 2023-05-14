export interface PlayerResponse {
    status: {
        online: boolean;
        lastLogout: number;
        lastServer: string;
    };
    rankData: {
        rank: string;
        tag: string;
        extraTags: Array<string>;
        pluscolor: string;
        expiry: number;
    };
    stats: {
        general: {
            playerName: string;
            xuid: string;
            level: number;
            progress: number;
            maxProgress: number;
            tokens: number;
            coins: number;
            crystals: number;
        };
        skywars: {
            wins: number;
            kills: number;
        };
        bedwars: {
            wins: number;
            kills: number;
            finalKills: number;
            bedsBroken: number;
            currentWinstreak: number;
            bestWinstreak: number;
        };
        thebridge: {
            wins: number;
            goals: number;
            currentWinstreak: number;
            bestWinstreak: number;
            ratingDataSolos: {
                r: number;
                RD: number;
                sigma: number;
                lastCalculatedRD: number;
            };
            peakRatingSolos: number;
        };
        spleef: {
            wins: number;
            currentWinstreak: number;
            bestWinstreak: number;
        };
        duels: {
            buildUhcWins: number;
            potWins: number;
            ironWins: number;
            archerWins: number;
            sumoWins: number;
            elo: number;
            currentWinstreak: number;
            bestWinstreak: number;
        };
        uhcmeetup: {
            wins: number;
            kills: number;
        };
    };
}
