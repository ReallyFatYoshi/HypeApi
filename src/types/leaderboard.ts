export interface apiLeaderboard {
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

export type apiLeaderboardResponse = {
  fetchedAt: number;
} & {
  [lbId: string]: apiLeaderboard;
};

export type Leaderboard = {
  fetchedAt: number;
} & {
  [lbId: string]: LeaderboardPlayers;
};

export type leaderboardIds =
  | "stats.bedwars.bestWinstreak"
  | "stats.bedwars.brokenBeds"
  | "stats.bedwars.currentWinstreak"
  | "stats.bedwars.finalKills"
  | "stats.bedwars.kills"
  | "stats.bedwars.wins"
  | "stats.duels.bestWinstreak"
  | "stats.duels.currentWinstreak"
  | "stats.duels.elo"
  | "stats.duels.wins"
  | "stats.level"
  | "stats.skywars.kills"
  | "stats.skywars.wins"
  | "stats.spleef.bestWinstreak"
  | "stats.spleef.currentWinstreak"
  | "stats.spleef.wins"
  | "stats.thebridge.bestWinstreak"
  | "stats.thebridge.currentWinstreak"
  | "stats.thebridge.goals"
  | "stats.thebridge.ratingDoubles"
  | "stats.thebridge.ratingSolos"
  | "stats.thebridge.wins"
  | "stats.totalKills"
  | "stats.totalWins"
  | "stats.uhcmeetup.kills"
  | "stats.uhcmeetup.win";