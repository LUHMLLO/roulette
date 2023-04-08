import { writable } from "svelte/store";
import type { Action, Gamemode, Player } from "$lib/interfaces"

//export const gamemode = writable<Gamemode | null>()
export const players = writable<Player[]>([])

export const choosenPlayer = writable<Player>()
export const choosenAction = writable<Action>()
export const isGameStarted = writable<boolean>(false)