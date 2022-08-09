export interface playerCounts {
    total: number;
    bedwars: {
        total: number;
        modes: {
            solos: number;
            doubles: number;
            squads: number;
        };
    };
    lobby: {
        total: number;
    };
    skywars: {
        total: number;
        modes: {
            solos: number;
            doubles: number;
            duels: number;
        };
    };
    thebridge: {
        total: number;
        modes: {
            "solos-ranked": number;
            "solos-casual": number;
            "doubles-casual": number;
        };
    };
    uhcmeetup: {
        total: number;
        modes: {
            solos: number;
        };
    };
    duels: {
        total: number;
    };
}
export interface playerStats {
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
            xuid: number;
            level: number;
            progress: number;
            maxProgress: number;
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
export interface LeaderboardPlayersRaw {
    name: string;
    lastRefreshed: number;
    data?: Array<[string, number]>;
}
export interface LeaderboardPlayers {
    name: string;
    lastRefreshed: number;
    players: Array<{
        name: string;
        position: number;
        value: number;
    }>;
}
