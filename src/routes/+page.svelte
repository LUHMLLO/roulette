<script lang="ts">
    import {
        addPlayer,
        choosenAction,
        choosenPlayer,
        game,
        players,
        startGame,
    } from "$lib/stores";

    let inputPlayerName: string;
</script>

{#if !$game.screen}
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
                on:click={() => ($game.screen = 1)}>Start playing</button
            >
        </container>
    </grid>
{/if}

{#if $game.screen == 1}
    <grid class="place--center h--100">
        <container class="container text--center">
            <h3>Who's going to play?</h3>

            <form
                class="flex row bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden"
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
                <button class="p--0 m--0 bord--hidden">
                    <icon class="icon size--32 bg-accent clr-primary"
                        ><i class="iconoir-plus" /></icon
                    >
                </button>
            </form>

            {#if $players.length > 0}
                <ul class="flex row justify--center align--center">
                    {#each $players as player}
                        <li>{player.name}</li>
                    {/each}
                </ul>
            {/if}

            <button
                class="bg-accent clr-primary px--24 py--12 theme-radius text--24 my--24"
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
        <grid class="place--center h--100">
            <container class="container text--center">
                <h1 class="clr-accent">{$choosenPlayer.name}</h1>
                <p class="text--24">{$choosenAction.description}</p>
            </container>
        </grid>
    {/if}
{/if}
