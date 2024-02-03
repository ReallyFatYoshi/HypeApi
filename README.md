# @reallyfatyoshi/hypeapi

> [!WARNING]
> This project is officially deprecated since the shutdown of HyperlandsMC.

Lightweight Hyperlands Api Client.\
Version: 0.1.4
## Installation

```sh
npm i @reallyfatyoshi/hypeapi
```

## Usage

```js
const { default: HypeApi } = require("@reallyfatyoshi/hypeapi");
const client = new HypeApi();

client
  .getPlayer("Chicken")
  .then((player) => console.log("Wins: %s", player.getTotalWins()));
```
## Docs

Click here to read [documentation](https://github.com/ReallyFatYoshi/HypeApi/wiki).

<!-- 
## Docs

### new HypeApi([options](#options)?)

Returns a new [Instance](#instance)

#### options

Type: `object`

##### baseUrl

Type: `string`\
Default: `https://api.hyperlandsmc.net`

##### headers

Type: `object`\
Default: `{ "user-agent": "HypeApi-Client/0.1.2" }`

### Instance

All resource methods return a Promise, so you must await them.

#### Properties Overview
<ul>
    <li><a href="#lastRateLimit">lastRateLimit</a></li>
</ul>

#### .lastRateLimit
Type: `number`\
Default: `null`

Returns the previous rateLimit from a previous HTTP request.

#### Method Overview
<ul>
    <li><a href="#getPlayer(playerName)">.getPlayer(playerName)</a></li>
    <li><a href="#getPlayerFromXuid(xuid)">.getPlayerFromXuid(xuid)</a></li>
    <li><a href="#getLeaderboard(lbId)">.getLeaderboard(lbId)</a></li>
</ul>

#### .getPlayer(playerName)
Type: `Player`\
Default: `null`

Returns a [Player Instance](#player) if a player was found.

#### .getPlayerFromXuid(xuid)
Type: `Player`\
Default: `null`

Returns a [Player Instance](#player) if a player was found.

#### .getLeaderboard(lbId)
Type: `Scoreboard`\
Default: `null`

Returns a [Scoreboard Instance](#Scoreboard) if a player was found.

### Scoreboard

#### Properties Overview
<ul>
    <li><a href="#name">.name</a></li>
    <li><a href="#lastRefreshed">.lastRefreshed</a></li>
</ul>

#### .name
Type: `string`\
Default: `null`

#### .lastRefreshed
Type: `number`\
Default: `null`

#### Methods Overview
<ul>
    <li><a href="#getPosition()">.getPosition()</a></li>
    <li><a href="#getPlayer()">.getPlayer()</a></li>
    <li><a href="#hasPlayer()">.hasPlayer()</a></li>
</ul>

#### .getPosition()
Type: `object`\
Default: `null`

#### .getPlayer()
Type: `object`\
Default: `null`

#### .hasPlayer()
Type: `boolean`\
Default: `null`

### Player

#### Properties Overview
<ul>
    <li><a href="#online">.online</a></li>
    <li><a href="#xuid">.xuid</a></li>
</ul>

#### .online
Type: `string`\
Default: `false`

#### .xuid
Type: `string`\
Default: `null`

#### Methods Overview
<ul>
    <li><a href="#getTotalWins()">.getTotalWins()</a></li>
    <li><a href="#getTotalKills()">.getTotalKills()</a></li>
    <li><a href="#getBedwarsFinalKills()">.getBedwarsFinalKills()</a></li>
</ul>

#### .getTotalWins()

Type: `number`\
Default: `0`

#### .getTotalKills()

Type: `number`\
Default: `0`

#### .getBedwarsFinalKills()

Type: `number`\
Default: `0`

#### .getBedwarsKills()

Type: `number`\
Default: `0`

#### .getBedwarsWins()

Type: `number`\
Default: `0`

#### .getBedwarsBedsBroken()

Type: `number`\
Default: `0`

#### .getBedwarsBestWinstreak()

Type: `number`\
Default: `0`

#### .getBedwarsCurrentWinstreak()

Type: `number`\
Default: `0`

#### .getSkywarsKills()

Type: `number`\
Default: `0`

#### .getSkywarsWins()

Type: `number`\
Default: `0`

#### .getSpleefWins()

Type: `number`\
Default: `0`

#### .getSpleefCurrentWinstreak()

Type: `number`\
Default: `0`

#### .getSpleefBestWinstreak()

Type: `number`\
Default: `0`

#### .getUHCMeetupWins()

Type: `number`\
Default: `0`

#### .getUHCMeetupKills()

Type: `number`\
Default: `0`

#### .getDuelsArcherWins()

Type: `number`\
Default: `0`

#### .getDuelsIronWins()

Type: `number`\
Default: `0`

#### .getDuelsPotWins()

Type: `number`\
Default: `0`

#### .getDuelsSumoWins()

Type: `number`\
Default: `0`

#### .getDuelsBuildUhcWins()

Type: `number`\
Default: `0`

#### .getDuelsBestWinstreak()

Type: `number`\
Default: `0`

#### .getDuelsCurrentWinstreak()

Type: `number`\
Default: `0`

#### .getDuelsElo()

Type: `number`\
Default: `0` -->
