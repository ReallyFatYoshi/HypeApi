import { IGlobalPlayerCountResponse } from '../types/playerCounts.js';

export default class Server {
    /**
     *  @readonly
     *  @type {number}
     */
    public total: IGlobalPlayerCountResponse['total'];
    /**
     *  @readonly
     *  @type {number}
    */
    public lobby: IGlobalPlayerCountResponse['lobby'];
    /** @readonly */
    public bedwars: IGlobalPlayerCountResponse['bedwars'];
    /** @readonly */
    public duels: IGlobalPlayerCountResponse['duels'];
    /** @readonly */
    public skywars: IGlobalPlayerCountResponse['skywars'];
    /** @readonly */
    public thebridge: IGlobalPlayerCountResponse['thebridge'];
    /** @readonly */
    public uhcmeetup: IGlobalPlayerCountResponse['uhcmeetup'];

    constructor(data: IGlobalPlayerCountResponse) {
        this.total = data.total;

        this.bedwars = data.bedwars;
        this.duels = data.duels;
        this.lobby = data.lobby;
        this.skywars = data.skywars;
        this.thebridge = data.thebridge;
        this.uhcmeetup = data.uhcmeetup;
    }
}
