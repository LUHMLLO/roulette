<script lang="ts">
    import DaresList from "./_lib/dares.json";
    import TruthsList from "./_lib/truths.json";

    enum Difficulty {
        Easy = "easy",
        Medium = "medium",
        Hard = "hard",
    }

    enum Option {
        Dare = "dare",
        Truth = "truth",
    }

    type Action = {
        description: string;
        difficulty: Difficulty;
        option: Option;
    };

    type Player = {
        name: string;
    };

    let gameScreen: number = 0;

    let actions: Action[] = [
        ...(DaresList as Action[]),
        ...(TruthsList as Action[]),
    ];

    let players: Player[] = [];

    let roundPlayer: Player | undefined = undefined;
    let roundDifficulty: Difficulty | undefined = undefined;
    let roundOption: Option | undefined = undefined;
    let roundAction: Action | undefined = undefined;

    function randomName(): string {
        return "player #" + Math.floor(Math.random() * 1000);
    }

    function addPlayer(event: Event): void {
        const inputElement = (
            event.target as HTMLFormElement
        ).querySelector<HTMLInputElement>('input[name="playerName"]');

        const capturedName = inputElement ? inputElement.value : "";

        if (capturedName) {
            players = [...players, { name: capturedName.trim() }];
        } else {
            players = [...players, { name: randomName().trim() }];
        }

        (event.target as HTMLFormElement).reset();
    }

    function shuffle<T>(array: T[]): T[] {
        const shuffledArray = [...array];

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i],
            ];
        }

        return shuffledArray;
    }

    function choosePlayer(): void {
        let availablePlayers = shuffle(players).filter(
            (p) => p.name !== roundPlayer?.name
        );

        do {
            roundPlayer = players[Math.floor(Math.random() * players.length)];
        } while (!availablePlayers.includes(roundPlayer));
    }

    function chooseAction(): void {
        let availableActions = shuffle(actions).filter(
            (a) =>
                a.description !== roundAction?.description &&
                a.difficulty === roundDifficulty &&
                a.option === roundOption
        );

        do {
            roundAction = actions[Math.floor(Math.random() * actions.length)];
        } while (!availableActions.includes(roundAction));
    }
</script>

{#if gameScreen == 0}
    <header>
        <h4 class="clr-accent">Bonjour!</h4>
        <h3>Bienvenue to Roulette.</h3>
        <p>
            Let's see if Lady Luck is on your side today. With so many
            possibilities, who knows what the outcome will be!
        </p>
    </header>
    <button on:click={() => gameScreen++}>Let's Play</button>
{/if}

{#if gameScreen == 1}
    <header>
        <h3>Who's playing?</h3>
        <p>The game requires a minimum of 2 players to be able to start.</p>
    </header>

    <form on:submit|preventDefault={addPlayer}>
        <input type="text" name="playerName" class="text-start w-100" />

        <button type="submit" class="ps-absolute my-auto top bottom right">
            <icon class="size-32">
                <i class="iconoir-plus" />
            </icon>
        </button>
    </form>

    {#if players.length > 0}
        <row class="justify-center align-center gap-16">
            {#each players as player}
                <h6>{player.name}</h6>
            {/each}
        </row>
    {/if}

    <button
        disabled={players.length < 2 || players.length < 1}
        on:click={() => {
            choosePlayer();
            gameScreen++;
        }}
    >
        Start Round
    </button>
{/if}

{#if gameScreen == 2}
    {#if roundPlayer}
        <header>
            <h3>{roundPlayer.name}</h3>
        </header>
    {/if}

    {#if !roundDifficulty}
        <row class="align-center justify-center gap-16">
            <button on:click={() => (roundDifficulty = Difficulty.Easy)}>
                Easy
            </button>
            <button on:click={() => (roundDifficulty = Difficulty.Medium)}>
                Medium
            </button>
            <button on:click={() => (roundDifficulty = Difficulty.Hard)}>
                Hard
            </button>
        </row>
    {/if}

    {#if !roundOption && roundDifficulty}
        <row class="align-center justify-center gap-16">
            <button
                on:click={() => {
                    roundOption = Option.Truth;
                    chooseAction();
                }}
            >
                Truth
            </button>
            <button
                on:click={() => {
                    roundOption = Option.Dare;
                    chooseAction();
                }}
            >
                Dare
            </button>
        </row>
    {/if}

    {#if roundAction && roundDifficulty && roundOption}
        <column
            id="card"
            class="align-center justify-center text-center px-16 py-8 bg-accent corners bord bord-onAccent"
        >
            <h4>{roundAction.description}</h4>
        </column>

        <row class="align-center justify-center gap-16">
            <button
                disabled={players.length < 2 || players.length < 1}
                on:click={() => {
                    roundDifficulty = undefined;
                    roundOption = undefined;
                    choosePlayer();
                }}
            >
                Skip
            </button>
            <button
                disabled={players.length < 2 || players.length < 1}
                on:click={() => {
                    roundDifficulty = undefined;
                    roundOption = undefined;
                    choosePlayer();
                }}
            >
                Next
            </button>
        </row>
    {/if}
{/if}

<style lang="scss">
    #card {
        width: 250px;
        max-width: 70vw;
        height: 350px;
        max-height: 60vh;

        &::before,
        &::after {
            content: "";

            position: absolute;

            display: inherit;

            border: inherit;
            border-radius: inherit;

            width: inherit;
            max-width: inherit;
            height: inherit;
            max-height: inherit;
        }

        &::before {
            background-color: var(--clr-accentDark);

            rotate: -6deg;
            z-index: -2;
        }

        &::after {
            background-color: var(--clr-accentDark);

            rotate: -3deg;
            z-index: -1;
        }
    }
</style>
