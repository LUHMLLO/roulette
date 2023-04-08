<script lang="ts">
    import { Difficulty, type Action } from "$lib/interfaces";

    import {
        choosenAction,
        choosenPlayer,
        isGameStarted,
        players,
    } from "$lib/stores";

    const actions: Action[] = [
        {
            difficulty: Difficulty.Easy,
            description: "Do 20 jumping jacks",
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
            difficulty: Difficulty.Easy,
            description: "Do a silly dance",
        },
        {
            difficulty: Difficulty.Hard,
            description: "Wear your clothes backwards for the rest of the game",
        },
        {
            difficulty: Difficulty.Medium,
            description: "Do 10 push-ups",
        },
        {
            difficulty: Difficulty.Easy,
            description: "Tell a joke",
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
            description: "Take a shot of hot sauce",
        },
    ];

    let inputPlayer: string;

    function addPlayer() {
        const name = inputPlayer.trim();

        if (name) {
            $players = [...$players, { name }];
            inputPlayer = "";
        }
    }

    function startGame() {
        const randomPlayer = Math.floor(Math.random() * $players.length);
        const randomAction = Math.floor(Math.random() * actions.length);
        choosenPlayer.set($players[randomPlayer]);
        choosenAction.set(actions[randomAction]);
        isGameStarted.set(true);
    }
</script>

<section class="game">
    <h1>Player List</h1>

    <form on:submit|preventDefault={addPlayer}>
        <label for="name">Enter a player name:</label>
        <input type="text" id="name" bind:value={inputPlayer} />
        <button type="submit">Add player</button>
    </form>

    {#if $players.length > 0}
        <div class="player-section">
            <h2>Players:</h2>
            <ul>
                {#each $players as player}
                    <li>{player.name}</li>
                {/each}
            </ul>
        </div>

        <button
            on:click={startGame}
            disabled={$players.length < 2 || actions.length < 1}
            >Start game</button
        >
    {/if}

    {#if $isGameStarted}
        <div class="gameplay-section">
            <h2>Gameplay:</h2>
            <p>Selected player: {$choosenPlayer.name}</p>
            <p>Selected dare: {$choosenAction.description}</p>
        </div>
    {/if}
</section>
