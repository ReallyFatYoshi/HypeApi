import { expect, test } from "@jest/globals";
import HypeApi, { Player } from "../dist/index";

test("Get Player Instance", () => {
  const client = new HypeApi();
  
  client.getPlayer('Chicken').then(v=>{
    expect(v).toBeInstanceOf(Player)
  });
});

test("Get Null", () => {
  const client = new HypeApi();
  
  client.getPlayer('abc').then(v=>{
    expect(v).toBe(null);
  });
});