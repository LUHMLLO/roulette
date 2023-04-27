<script lang="ts">
    import {
        addPlayer,
        choosenAction,
        choosenPlayer,
        game,
        nextRound,
        players,
        startGame,
    } from "$lib/stores";

    let inputPlayerName = "";
</script>

{#if !$game.screen}
    <grid class="place-center h-100vh">
        <container class="text-center">
            <h3 class="clr-accent">Bonjour!</h3>
            <h1>Bienvenue to Roulette.</h1>
            <p class="mb-16">
                Let's see if Lady Luck is on your side today.
                <br />
                With so many possibilities, who knows what the outcome will be!
            </p>
            <button on:click={() => ($game.screen = 1)}>Start playing</button>
        </container>
    </grid>
{/if}

{#if $game.screen == 1}
    <grid class="place-center h-100vh">
        <container class="text-center">
            <h3>Who's going to play?</h3>

            <form
                class="row align-center no-overflow"
                on:submit|preventDefault={() => {
                    addPlayer(
                        undefined,
                        inputPlayerName ? inputPlayerName.trim() : undefined,
                        undefined
                    );
                    inputPlayerName = "";
                }}
            >
                <input
                    type="text"
                    name="playername"
                    bind:value={inputPlayerName}
                />

                <button type="submit">
                    <icon class="size-32">
                        <i class="iconoir-plus" />
                    </icon>
                </button>
            </form>

            {#if $players.length > 0}
                <row class="justify-center align-center gap-16">
                    {#each $players as player}
                        <h6>{player.name}</h6>
                    {/each}
                </row>
            {/if}

            <button
                disabled={$players.length < 2 || $players.length < 1}
                on:click={() => {
                    startGame();
                }}>Start game</button
            >
        </container>
    </grid>
{/if}

{#if $game.screen == 2}
    {#if $game.onGoing}
        <grid class="place-center h-100vh">
            <container class="text-center">
                <h1 class="clr-accent">{$choosenPlayer.name}</h1>
                <p class="mb-16">{$choosenAction.description}</p>

                <button
                    disabled={$players.length < 2 || $players.length < 1}
                    on:click={() => {
                        nextRound();
                    }}>Next</button
                >
            </container>
        </grid>
    {/if}
{/if}
