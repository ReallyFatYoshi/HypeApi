export interface GlobalPlayerCountResponse {
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
            'solos-ranked': number;
            'solos-casual': number;
            'doubles-casual': number;
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
