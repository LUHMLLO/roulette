import { get, writable } from "svelte/store";
import type { Action, Player, Game } from "$lib/interfaces";
import { declareBaseActions } from "./utils";

export const game = writable<Game>({ name: '', onGoing: false })
export const players = writable<Player[]>([])
export const actions = writable<Action[]>([])
export const choosenPlayer = writable<Player>()
export const choosenAction = writable<Action>()

// Game Session
export function initGameSession() {
    game.set(<Game>{
        icon: "logo",
        name: "Roulette",
        description: "Base game",
        screen: 2,
        onGoing: true,
        players: get(players),
        actions: get(actions),
    });
}

export function finishGameSession(wins: Player[]) {
    game.subscribe((g) => {
        game.set(<Game>{
            icon: g.icon,
            name: g.icon,
            description: g.icon,
            screen: g.screen,
            onGoing: false,
            players: g.players,
            actions: g.actions,
            winners: wins,
        });
    });
}

// Handle Rounds
export function nextRound() {
    let g = get(game)

    const p = Math.floor(Math.random() * g.players!.length);
    const d = Math.floor(Math.random() * g.actions!.length);

    choosenPlayer.set(g.players![p]);
    choosenAction.set(g.actions![d]);
}

// Actual Game init
export function startGame() {
    declareBaseActions();
    initGameSession();
    nextRound();
}

// Handle Players
export function addPlayer(avatar?: string, name?: string, lives?: number) {
    if (!avatar) {
        avatar = "none"
    }

    if (!name) {
        name = `player #${Math.floor(Math.random() * 100)}`
    }

    if (!lives) {
        lives = 9
    }

    players.update((players) => [
        ...players,
        <Player>{
            avatar: avatar,
            name: name,
            lives: lives,
        },
    ]);
}

// Handle Actions
export function addAction(a: Action) {
    actions.update((actions) => [...actions, a]);
}