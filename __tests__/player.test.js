import { expect, test } from '@jest/globals';
import HypeApi, { Player } from '../dist/index';

test('Get Player Instance and stats', async () => {
    const client = new HypeApi();
    const player = await client.getPlayer('Chicken');
    expect(player).toBeInstanceOf(Player);

    expect(player.coins).toBeGreaterThanOrEqual(0);
    expect(player.crystals).toBeGreaterThanOrEqual(0);
    expect(player.totalKills).toBeGreaterThanOrEqual(0);
    expect(player.totalWins).toBeGreaterThanOrEqual(0);
});

test('Get Null', () => {
    const client = new HypeApi();

    client.getPlayer('abc').then((v) => {
        expect(v).toBe(null);
    });
});

test('Server Player Count', async ()=>{
    const client = new HypeApi();
    const server = await client.getPlayerCounts();
    console.log(server.total);
});