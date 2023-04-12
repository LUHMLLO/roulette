import { writable } from "svelte/store";
import type { Dare, Player, Gamemode } from "$lib/interfaces";

export const dares = writable<Dare[]>([])
export const players = writable<Player[]>([])
export const gamemode = writable<Gamemode>({ icon: '', name: '', description: '', onGoing: false })
export const choosenPlayer = writable<Player>()
export const choosenDare = writable<Dare>()

export function addDare(d: Dare) {
    dares.update(list => [...list, d]);
}

export function updateDare(dare: Dare) {
    dares.update(list => {
        const index = list.findIndex(d => d.description === dare.description);
        if (index !== -1) {
            list[index] = dare;
        }
        return list;
    });
}

export function deleteDare(dare: Dare) {
    dares.update((list) => list.filter((d) => d.description !== dare.description));
}

export function addPlayer(p: Player) {
    players.update(list => [...list, p]);
}

export function updatePlayer(player: Player) {
    players.update(list => {
        const index = list.findIndex(p => p.name === player.name);
        if (index !== -1) {
            list[index] = player;
        }
        return list;
    });
}

export function deletePlayer(player: Player) {
    players.update((list) => list.filter((p) => p.name !== player.name));
}

export function initGameMode(d: Dare[], p: Player[]) {
    gamemode.set(<Gamemode>{
        icon: 'iconoir',
        name: 'base game',
        description: 'base game description',
        onGoing: true,
        dares: d,
        players: p
    })

    gamemode.subscribe((g) => console.log(g))
}
