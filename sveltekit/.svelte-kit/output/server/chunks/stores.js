import { w as writable } from "./index.js";
const game = writable({ name: "", onGoing: false });
const players = writable([]);
const choosenPlayer = writable();
const choosenAction = writable();
export {
  choosenAction as a,
  choosenPlayer as c,
  game as g,
  players as p
};
