import { writable } from "svelte/store";
import { Difficulty, type Action, type Gamemode, type Player } from "$lib/interfaces"

export const gamemodes = writable<Gamemode[]>([])
export const isGameStarted = writable<boolean>(false)

export const choosenPlayer = writable<Player>()
export const choosenAction = writable<Action>()

export const players = writable<Player[]>([])
export const actions = writable<Action[]>([
    {
        difficulty: Difficulty.Easy,
        description: "Do 20 jumping jacks",
    },
    {
        difficulty: Difficulty.Easy,
        description: "Do a silly dance",
    },
    {
        difficulty: Difficulty.Easy,
        description: "Tell a joke",
    },
    {
        difficulty: Difficulty.Medium,
        description: "Sing a song in a different language",
    },
    {
        difficulty: Difficulty.Medium,
        description: "Say the alphabet backwards",
    },
    {
        difficulty: Difficulty.Medium,
        description: "Do 10 push-ups",
    },
    {
        difficulty: Difficulty.Medium,
        description: "Talk like a pirate for the rest of the game",
    },
    {
        difficulty: Difficulty.Medium,
        description: "Do an impression of your favorite celebrity",
    },
    {
        difficulty: Difficulty.Hard,
        description: "Wear your clothes backwards for the rest of the game",
    },
    {
        difficulty: Difficulty.Hard,
        description: "Take a shot of hot sauce",
    },
])