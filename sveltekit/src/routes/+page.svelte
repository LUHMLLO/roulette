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
        <container class="container text-center">
            <h3 class="clr-accent">Bonjour!</h3>
            <h1 class="clr-secondary">Bienvenue to Roulette.</h1>
            <p class="clr-tertiary text--24">
                Let's see if Lady Luck is on your side today.
                <br />
                With so many possibilities, who knows what the outcome will be!
            </p>
            <button
                class="theme-radius my--24"
                on:click={() => ($game.screen = 1)}>Start playing</button
            >
        </container>
    </grid>
{/if}

{#if $game.screen == 1}
    <grid class="place-center h-100vh">
        <container class="container text-center">
            <h3>Who's going to play?</h3>

            <form
                class="flex row bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden my--24"
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
                    class="bord--hidden"
                    bind:value={inputPlayerName}
                />
                <button class="p-0 m--0 bord--hidden">
                    <icon class="icon size--32 bg-accent clr-primary"
                        ><i class="iconoir-plus" /></icon
                    >
                </button>
            </form>

            {#if $players.length > 0}
                <row class="flex row justify--center align--center gap-16">
                    {#each $players as player}
                        <h6>{player.name}</h6>
                    {/each}
                </row>
            {/if}

            <button
                class="theme-radius my--24"
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
            <container class="container text-center">
                <h1 class="clr-accent">{$choosenPlayer.name}</h1>
                <p class="text--24">{$choosenAction.description}</p>

                <button
                    class="theme-radius my--24"
                    disabled={$players.length < 2 || $players.length < 1}
                    on:click={() => {
                        nextRound();
                    }}>Next</button
                >
            </container>
        </grid>
    {/if}
{/if}
