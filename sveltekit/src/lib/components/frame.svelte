<script lang="ts">
    import { game, nextRound } from "$lib/stores";

    const Xscreen =
        "bg-dark block w--100vw h--100vh p--fixed inset overflow--hidden";
    const Xframe =
        "bg-brown--1 flex column w--100 h--100 pt--16 px--24 pb--12 gap--12 bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden";
    const Xcontent =
        "bg-primary block w--100 h--100 bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden scroll--y";

    const button = `my--auto px--12 py--6 clr-primary theme-radius text--center justify--center flex row align--center gap--6 bord-secondary bord--solid bord-width--2`;

    function nextMinus() {
        nextRound();
    }
    function nextPlus() {
        nextRound();
    }
</script>

<x-screen class={Xscreen}>
    <x-frame class={Xframe}>
        <x-content class={Xcontent}>
            <slot />
        </x-content>

        <row class="align--center">
            <row class="justify--start">
                <icon
                    class="bg-yellow--5 clr-tertiary icon size--24 bord-radius--24 bord-secondary bord--solid bord-width--2"
                />
            </row>
            <row class="justify--center align--center gap--6">
                {#if $game.onGoing}
                    <button
                        class="bg-red--5 {button}"
                        on:click={() => nextMinus()}
                    >
                        <p>Pass</p>
                    </button>
                    <button
                        class="bg-green--5 {button}"
                        on:click={() => nextPlus()}
                    >
                        <p>Done</p>
                    </button>
                {/if}
            </row>
            <row class="justify--end">
                <icon class="clr-tertiary icon size--24">
                    <i class="iconoir-minus" />
                </icon>
            </row>
        </row>
    </x-frame>
</x-screen>
