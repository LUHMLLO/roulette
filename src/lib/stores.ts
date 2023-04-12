import { writable } from "svelte/store";
import type { Dare, Player, Gamemode } from "$lib/interfaces";

export const dares = writable<Dare[]>([])
export const players = writable<Player[]>([])
export const gamemode = writable<Gamemode>({ name: '', description: '', onGoing: false })
export const choosenPlayer = writable<Player>()
export const choosenDare = writable<Dare>()
