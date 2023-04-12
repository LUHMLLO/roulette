<script lang="ts">
    import { Difficulty } from "$lib/interfaces";

    import {
        choosenDare,
        choosenPlayer,
        gamemode,
        players,
        dares,
    } from "$lib/stores";

    import {
        initGameMode,
        addDare,
        updateDare,
        deleteDare,
        addPlayer,
        updatePlayer,
        deletePlayer,
    } from "$lib/functions";

    let inputPlayerName: string;

    function nextRound() {
        const d = Math.floor(Math.random() * $gamemode.dares!.length);
        const p = Math.floor(Math.random() * $gamemode.players!.length);

        choosenDare.set($gamemode.dares![d]);
        choosenPlayer.set($gamemode.players![p]);
    }

    function startGame() {
        addDare({
            difficulty: Difficulty.Easy,
            description: "Do 20 jumping jacks",
        });
        addDare({
            difficulty: Difficulty.Easy,
            description: "Do a silly dance",
        });
        addDare({
            difficulty: Difficulty.Easy,
            description: "Tell a joke",
        });
        addDare({
            difficulty: Difficulty.Medium,
            description: "Sing a song in a different language",
        });
        addDare({
            difficulty: Difficulty.Medium,
            description: "Say the alphabet backwards",
        });
        addDare({
            difficulty: Difficulty.Medium,
            description: "Do 10 push-ups",
        });
        addDare({
            difficulty: Difficulty.Medium,
            description: "Talk like a pirate for the rest of the game",
        });
        addDare({
            difficulty: Difficulty.Medium,
            description: "Do an impression of your favorite celebrity",
        });
        addDare({
            difficulty: Difficulty.Hard,
            description: "Wear your clothes backwards for the rest of the game",
        });
        addDare({
            difficulty: Difficulty.Hard,
            description: "Take a shot of hot sauce",
        });

        initGameMode($dares, $players);
        nextRound();
    }
</script>

<grid class="place--center h--100">
    <container class="container text--center">
        <h3 class="clr-accent">Bonjour!</h3>
        <h1 class="clr-secondary">Bienvenue to Roulette.</h1>
        <p class="clr-tertiary text--24">
            Let's see if Lady Luck is on your side today.
            <br />
            With so many possibilities, who knows what the outcome will be!
        </p>
        <button
            class="bg-accent clr-primary px--24 py--12 theme-radius text--24 my--24"
            >Start playing</button
        >
    </container>
</grid>

<grid class="place--center h--100">
    <container class="container text--center">
        <h3>Who's going to play?</h3>
        <form
            on:submit|preventDefault={() => {
                addPlayer({ name: inputPlayerName });
                inputPlayerName = "";
            }}
        >
            <input
                type="text"
                bind:value={inputPlayerName}
                class="bord-secondary bord--solid bord-width--2 theme-radius"
            />

            <button
                type="submit"
                class="bg-accent clr-primary px--24 py--12 theme-radius text--24 my--24"
                >Add player</button
            >
        </form>
    </container>
</grid>

{#if $players.length > 0}
    <grid class="place--center h--100">
        <container class="container text--center">
            <h2>Players:</h2>
            <ul>
                {#each $players as player}
                    <li>{player.name}</li>
                {/each}
            </ul>

            <button
                on:click={() => startGame()}
                disabled={$players.length < 2 || $players.length < 1}
            >
                Start game
            </button>
        </container>
    </grid>
{/if}

{#if $gamemode.onGoing}
    <grid class="place--center h--100">
        <container class="container text--center">
            <h2>Gameplay:</h2>
            <p>Selected player: {$choosenPlayer.name}</p>
            <p>Selected dare: {$choosenDare.description}</p>

            <button on:click={() => nextRound()}> Next </button>
        </container>
    </grid>
{/if}
