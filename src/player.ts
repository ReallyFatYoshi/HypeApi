import { apiPlayerResponse } from "./types/player";

export default class Player {
  #data: apiPlayerResponse;
  
  public online: boolean;
  public xuid: string;
  public playerName: string;

  constructor(data: apiPlayerResponse) {
    this.#data = data;

    this.playerName = data.stats.general.playerName;
    this.online = data.status.online;
    this.xuid = data.stats.general.xuid;
  };

  getLastLogout(
    format: "YYYY/DD/MM" | "MM/DD/YYYY" | "DD/MM/YYYY" = "DD/MM/YYYY"
  ): {
    fullDate: string;
    time: string;
    day: number;
    month: number;
    year: number;
    timeZone: string;
  } {
    const date = new Date(this.#data.status.lastLogout * 1000);
    return {
      fullDate: (
        ["YYYY/DD/MM", "MM/DD/YYYY", "DD/MM/YYYY"]?.filter(
          (v) => v == format
        ) || ["YYYY/DD/MM"]
      )
        .join("")
        .replace(/YYYY/g, date.getFullYear().toString())
        .replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, "0"))
        .replace(/DD/g, date.getDate().toString().padStart(2, "0")),
      time:
        date.getHours().toString().padStart(2, "0") +
        ":" +
        date.getMinutes().toString().padStart(2, "0"),
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      timeZone: "UTC",
    };
  }

  getLastServer(): string {
    return this.#data.status.lastServer;
  }

  getRank(): {
    rank: string;
    expiry: number;
    plusColor: string;
  } {
    return {
      rank: this.#data.rankData.rank,
      expiry: this.#data.rankData.expiry,
      plusColor: this.#data.rankData.pluscolor,
    };
  }

  getTags(): {
    tag: string;
    extraTags: string[];
  } {
    return {
      tag: this.#data.rankData.tag,
      extraTags: this.#data.rankData.extraTags,
    };
  }

  getLevel(): {
    level: number;
    progress: number;
    maxProgress: number;
  } {
    return {
      level: this.#data.stats.general.level,
      progress: this.#data.stats.general.progress,
      maxProgress: this.#data.stats.general.maxProgress,
    };
  }

  getTotalWins(): number {
    let wins = 0;
    for (const b of Object.values(this.#data.stats)) {
      for (const [k, v] of Object.entries(b)) {
        if (!k.toLowerCase().match(/wins$/g)) continue;
        wins += v as number;
      }
    }
    return wins;
  }

  getTotalKills(): number {
    let kills = 0;
    for (const b of Object.values(this.#data.stats)) {
      for (const [k, v] of Object.entries(b)) {
        if (!k.toLowerCase().match(/kills$/g)) continue;
        kills += v as number;
      }
    }
    return kills;
  }

  /* Bedwars */
  getBedwarsFinalKills(): number {
    return this.#data.stats.bedwars.finalKills;
  }

  getBedwarsKills(): number {
    return this.#data.stats.bedwars.kills;
  }

  getBedwarsWins(): number {
    return this.#data.stats.bedwars.wins;
  }

  getBedwarsBedsBroken(): number {
    return this.#data.stats.bedwars.bedsBroken;
  }

  getBedwarsBestWinstreak(): number {
    return this.#data.stats.bedwars.bestWinstreak;
  }

  getBedwarsCurrentWinstreak(): number {
    return this.#data.stats.bedwars.currentWinstreak;
  }

  /* Skywars */
  getSkywarsKills(): number {
    return this.#data.stats.skywars.kills;
  }

  getSkywarsWinss(): number {
    return this.#data.stats.skywars.wins;
  }

  /* Spleef */
  getSpleefWins(): number {
    return this.#data.stats.spleef.wins;
  }

  getSpleefCurrentWinstreak(): number {
    return this.#data.stats.spleef.currentWinstreak;
  }

  getSpleefBestWinstreak(): number {
    return this.#data.stats.spleef.bestWinstreak;
  }

  /* Uhcmeetup */
  getUHCMeetupWins(): number {
    return this.#data.stats.uhcmeetup.wins;
  }

  getUHCMeetupKills(): number {
    return this.#data.stats.uhcmeetup.kills;
  }

  /* Duels */
  getDuelsArcherWins(): number {
    return this.#data.stats.duels.archerWins;
  }

  getDuelsIronWins(): number {
    return this.#data.stats.duels.ironWins;
  }

  getDuelsPotWins(): number {
    return this.#data.stats.duels.potWins;
  }
  
  getDuelsSumoWins(): number {
    return this.#data.stats.duels.sumoWins;
  }

  getDuelsBuildUhcWins(): number {
    return this.#data.stats.duels.buildUhcWins;
  }

  getDuelsBestWinstreak(): number {
    return this.#data.stats.duels.bestWinstreak;
  }

  getDuelsCurrentWinstreak(): number {
    return this.#data.stats.duels.currentWinstreak;
  }

  getDuelsElo(): number {
    return this.#data.stats.duels.elo;
  }

  /* TheBridge  */
  getTheBridgeWins() {
    return this.#data.stats.thebridge.wins;
  }

  getTheBridgeGoals() {
    return this.#data.stats.thebridge.goals;
  }

  getTheBridgeBestWinstreak() {
    return this.#data.stats.thebridge.bestWinstreak;
  }

  getTheBridgeCurrentWinstreak() {
    return this.#data.stats.thebridge.currentWinstreak;
  }

  getTheBridgePeakRatingSolos() {
    return this.#data.stats.thebridge.peakRatingSolos;
  }

  getTheBridgeRatingDataSolos() {
    return this.#data.stats.thebridge.ratingDataSolos;
  }
}