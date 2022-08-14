# @reallyfatyoshi/hypeapi

Lightweight Hyperlands Api Client.\
Version: 0.1.0
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

### new HypeApi([options](#options)?)

Returns a new [Instance](#instance)

#### options

Type: `object`

##### baseUrl

Type: `string`\
Default: `https://api.hyperlandsmc.net`

##### headers

Type: `object`\
Default: `{ "user-agent": "HypeApi-Client/0.1.0" }`

### Instance

All resource methods return a Promise, so you must await them.

#### Properties Overview
<ul>
    <li><a href="#.lastRateLimit">lastRateLimit</a></li>
</ul>

#### .lastRateLimit
Type: `number`\
Default: `null`

Returns the previous rateLimit from a previous HTTP request.

#### Method Overview
<ul>
    <li><a href="#.getPlayer(playerName)">.getPlayer(playerName)</a></li>
    <li><a href="#.getPlayerFromXuid(xuid)">.getPlayerFromXuid(xuid)</a></li>
</ul>

#### .getPlayer(playerName)

Returns a [Player Instance](#player) if a player was found.

#### .getPlayerFromXuid(xuid)

Returns a [Player Instance](#player) if a player was found.

### Player
<!-- 
#### Methods Overview
<ul>
    <li><a href="#.getTotalWins()">getTotalWins()</a></li>
    <li><a href="#.getTotalKills()">Contributing</a></li>
    <li><a href="#.getBedwarsFinalKills()">License</a></li>
</ul> -->

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
Default: `0`

<h2>Note: The docs are incomplete. Should be finish in the next package version.</h2>