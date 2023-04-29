<script lang="ts">
    // start enums
    enum ActionDifficulty {
        Easy,
        Medium,
        Hard,
    }

    enum ActionType {
        Dare,
        Truth,
    }
    // end enums

    // start interfaces
    interface Action {
        difficulty: ActionDifficulty;
        type: ActionType;
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
    let actions: Action[] = [
        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Dare,
            description: "Do 20 jumping jacks",
        },

        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Dare,
            description: "Do a silly dance",
        },

        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Dare,
            description: "Tell a joke",
        },

        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Dare,
            description: "Sing a song in a different language",
        },

        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Dare,
            description: "Say the alphabet backwards",
        },

        {
            difficulty: ActionDifficulty.Medium,
            type: ActionType.Dare,
            description: "Do 10 push-ups",
        },

        {
            difficulty: ActionDifficulty.Medium,
            type: ActionType.Dare,
            description: "Talk like a pirate for the rest of the game",
        },

        {
            difficulty: ActionDifficulty.Medium,
            type: ActionType.Dare,
            description: "Do an impression of your favorite celebrity",
        },
        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Dare,
            description: "Wear your clothes backwards for the rest of the game",
        },

        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Dare,
            description: "Take a shot of hot sauce",
        },

        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Dare,
            description: "Take a shot of hot sauce",
        },

        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Truth,
            description: "Whats your favorite drink?",
        },

        {
            difficulty: ActionDifficulty.Medium,
            type: ActionType.Truth,
            description: "Who was your first kiss?",
        },

        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Truth,
            description: "Say the first and last letters of your crush name",
        },
        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Truth,
            description: "What is your favorite food?",
        },
        {
            difficulty: ActionDifficulty.Medium,
            type: ActionType.Dare,
            description: "Sing a song in public",
        },
        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Truth,
            description: "Have you ever stolen something before?",
        },
        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Dare,
            description: "Jump into a pool fully clothed",
        },
        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Truth,
            description: "What is your biggest fear?",
        },
        {
            difficulty: ActionDifficulty.Medium,
            type: ActionType.Dare,
            description: "Do a cartwheel or a handstand",
        },
        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Truth,
            description: "Have you ever cheated on a test?",
        },
        {
            difficulty: ActionDifficulty.Hard,
            type: ActionType.Dare,
            description: "Eat a spoonful of hot sauce",
        },
        {
            difficulty: ActionDifficulty.Easy,
            type: ActionType.Truth,
            description: "What is your favorite TV show?",
        },
        {
            difficulty: ActionDifficulty.Medium,
            type: ActionType.Dare,
            description: "Call a friend and tell them a joke",
        },
    ];

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
