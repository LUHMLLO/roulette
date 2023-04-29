<script lang="ts">
    // start enums
    enum ActionType {
        Dare,
        Truth,
    }

    enum ActionDifficulty {
        Easy,
        Medium,
        Hard,
    }
    // end enums

    // start interfaces
    interface Action {
        type: ActionType;
        difficulty: ActionDifficulty;
        description: string;
    }

    interface Player {
        name: string;
    }

    interface Game {
        screen: number;
        isRunning: boolean;
        difficulty?: ActionDifficulty;
        type?: ActionType;
    }
    // end interfaces

    // start vars
    let captureName: string;
    let players: Player[] = [];
    let actions: Action[] = [];

    let game: Game = {
        screen: 0,
        isRunning: false,
    };

    let selectedPlayer: Player;
    let selectedDifficulty: ActionDifficulty | undefined;
    let selectedType: ActionType | undefined;
    let selectedAction: Action;
    // end vars

    //start functions
    function addPlayer() {
        if (captureName) {
            players = [...players, { name: captureName.trim() }];
        } else {
            players = [
                ...players,
                { name: "player #" + Math.floor(Math.random() * 100) },
            ];
        }
    }

    function addAction(
        type: ActionType,
        difficulty: ActionDifficulty,
        description: string
    ) {
        actions = [
            ...actions,
            { type: type, difficulty: difficulty, description: description },
        ];
    }

    function declareBaseActions() {
        addAction(
            ActionType.Dare,
            ActionDifficulty.Easy,
            "Do 20 jumping jacks"
        );

        addAction(ActionType.Dare, ActionDifficulty.Easy, "Do a silly dance");

        addAction(ActionType.Dare, ActionDifficulty.Easy, "Tell a joke");

        addAction(
            ActionType.Dare,
            ActionDifficulty.Easy,
            "Sing a song in a different language"
        );

        addAction(
            ActionType.Dare,
            ActionDifficulty.Easy,
            "Say the alphabet backwards"
        );

        addAction(ActionType.Dare, ActionDifficulty.Medium, "Do 10 push-ups");

        addAction(
            ActionType.Dare,
            ActionDifficulty.Medium,
            "Talk like a pirate for the rest of the game"
        );

        addAction(
            ActionType.Dare,
            ActionDifficulty.Medium,
            "Do an impression of your favorite celebrity"
        );

        addAction(
            ActionType.Dare,
            ActionDifficulty.Hard,
            "Wear your clothes backwards for the rest of the game"
        );

        addAction(
            ActionType.Dare,
            ActionDifficulty.Hard,
            "Take a shot of hot sauce"
        );

        addAction(
            ActionType.Dare,
            ActionDifficulty.Hard,
            "Take a shot of hot sauce"
        );

        addAction(
            ActionType.Truth,
            ActionDifficulty.Easy,
            "Whats your favorite drink?"
        );

        addAction(
            ActionType.Truth,
            ActionDifficulty.Medium,
            "Who was your first kiss?"
        );

        addAction(
            ActionType.Truth,
            ActionDifficulty.Hard,
            "Say the first and last letters of your crush name"
        );
    }

    function choosePlayer() {
        selectedPlayer = players[Math.floor(Math.random() * players.length)];
    }

    function chooseDifficulty(difficulty: ActionDifficulty) {
        selectedDifficulty = difficulty;
    }

    function chooseType(type: ActionType) {
        selectedType = type;
        chooseAction();
    }

    function chooseAction() {
        let filteredDifficulty = actions.filter(
            (action) => action.difficulty === selectedDifficulty
        );

        let filteredType = filteredDifficulty.filter(
            (action) => action.type === selectedType
        );

        selectedAction =
            filteredType[Math.floor(Math.random() * filteredType.length)];
    }

    function prepareGame() {
        game.screen = 1;
        declareBaseActions();
    }

    function startGame() {
        choosePlayer();
        game.screen = 2;
        game.isRunning = true;
    }

    function nextRound() {
        selectedDifficulty = undefined;
        selectedType = undefined;
        choosePlayer();
        chooseAction();
    }
    //end functions
</script>

{#if game.screen == 0}
    <grid class="place-center h-100vh">
        <container class="text-center">
            <h3 class="clr-accent">Bonjour!</h3>
            <h1>Bienvenue to Roulette.</h1>
            <p class="mb-16">
                Let's see if Lady Luck is on your side today.
                <br />
                With so many possibilities, who knows what the outcome will be!
            </p>
            <button on:click={() => prepareGame()}>Start playing</button>
        </container>
    </grid>
{/if}

{#if game.screen == 1}
    <grid class="place-center h-100vh">
        <container class="text-center">
            <h3>Who's going to play?</h3>

            <form
                on:submit|preventDefault={addPlayer}
                class="row align-center no-overflow"
            >
                <input type="text" name="name" bind:value={captureName} />

                <button type="submit">
                    <icon class="size-32">
                        <i class="iconoir-plus" />
                    </icon>
                </button>
            </form>

            {#if players.length > 0}
                <row class="justify-center align-center gap-16 my-16">
                    {#each players as player}
                        <h6>{player.name}</h6>
                    {/each}
                </row>
            {/if}

            <button
                disabled={players.length < 2 || players.length < 1}
                on:click={() => {
                    startGame();
                }}>Start game</button
            >
        </container>
    </grid>
{/if}

{#if game.screen == 2}
    {#if game.isRunning}
        <grid class="place-center h-100vh">
            <container class="text-center">
                <h1 class="clr-accent">{selectedPlayer.name}</h1>

                {#if selectedDifficulty == undefined}
                    <grid class="place-center mb-16">
                        <h6>Difficulty</h6>
                        <row class="align-center justify-center gap-16">
                            <button
                                on:click={() =>
                                    chooseDifficulty(ActionDifficulty.Easy)}
                            >
                                Easy
                            </button>
                            <button
                                on:click={() =>
                                    chooseDifficulty(ActionDifficulty.Medium)}
                            >
                                Medium
                            </button>
                            <button
                                on:click={() =>
                                    chooseDifficulty(ActionDifficulty.Hard)}
                            >
                                Hard
                            </button>
                        </row>
                    </grid>
                {/if}

                {#if selectedType == undefined}
                    <grid class="place-center mb-16">
                        <h6>Choose</h6>
                        <row class="align-center justify-center gap-16">
                            <button
                                on:click={() => chooseType(ActionType.Truth)}
                                disabled={selectedDifficulty == undefined}
                            >
                                Truth
                            </button>
                            <small>or</small>
                            <button
                                on:click={() => chooseType(ActionType.Dare)}
                                disabled={selectedDifficulty == undefined}
                                >Dare</button
                            >
                        </row>
                    </grid>
                {/if}

                {#if selectedAction}
                    <p class="mb-16">{selectedAction.description}</p>

                    <button
                        disabled={players.length < 2 || players.length < 1}
                        on:click={() => {
                            nextRound();
                        }}>Next</button
                    >
                {/if}
            </container>
        </grid>
    {/if}
{/if}
