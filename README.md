# @reallyfatyoshi/hypeapi

Lightweight Hyperlands Api Client.\
Version: 0.1.5
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
## Documentation

Click here to read [documentation](https://github.com/ReallyFatYoshi/HypeApi/wiki).