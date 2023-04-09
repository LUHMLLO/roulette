<script lang="ts">
    import {
        choosenAction,
        choosenPlayer,
        isGameStarted,
        players,
        actions,
    } from "$lib/stores";

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
        const randomAction = Math.floor(Math.random() * $actions.length);

        choosenPlayer.set($players[randomPlayer]);
        choosenAction.set($actions[randomAction]);

        isGameStarted.set(true);
    }
</script>

<grid class="place--center h--100vh">
    <container class="container">
        <h1>Greetings</h1>
        <p>
            Aliquid ex delectus maiores, nam sit reiciendis placeat ratione
            blanditiis, laudantium vel ipsum modi fuga molestias voluptatibus
            laboriosam debitis est sed assumenda.
        </p>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        <button>Let's go</button>
    </container>
</grid>

<grid class="place--center h--100vh">
    <container class="container">
        <form on:submit|preventDefault={addPlayer}>
            <label for="name">Enter a player name:</label>
            <input type="text" id="name" bind:value={inputPlayer} />
            <button type="submit">Add player</button>
        </form>
    </container>
</grid>

{#if $players.length > 0}
    <grid class="place--center h--100vh">
        <container class="container">
            <h2>Players:</h2>
            <ul>
                {#each $players as player}
                    <li>{player.name}</li>
                {/each}
            </ul>

            <button
                on:click={startGame}
                disabled={$players.length < 2 || $actions.length < 1}
            >
                Start game
            </button>
        </container>
    </grid>
{/if}

{#if $isGameStarted}
    <grid class="place--center h--100vh">
        <container class="container">
            <h2>Gameplay:</h2>
            <p>Selected player: {$choosenPlayer.name}</p>
            <p>Selected dare: {$choosenAction.description}</p>

            <button on:click={startGame}> Next </button>
        </container>
    </grid>
{/if}
