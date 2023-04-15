<?php
/*
Plugin Name: RoulettePress
Plugin URI: https://github.com/LUHMLLO/roulette.com/
Description: A truth and dare game where you just insert the players name and start.
Version: 1.0.0
Author: LUHMLLO
Author URI: https://github.com/LUHMLLO
License: GPL2
*/
?>

<?php
class Game
{
    public $captureName = '';
    public $players = array();
    public $actions = array();
    public $game = array(
        'screen' => 0,
        'isRunning' => false,
        'selected' => array(
            'player' => '',
            'action' => ''
        )
    );

    function addPlayer()
    {
        if ($this->captureName) {
            $player = trim($this->captureName);
        } else {
            $player = 'player #' . rand(0, 100);
        }

        $this->players[] = array('name' => $player, 'lives' => 7);
        $this->captureName = '';
    }

    function addAction($type, $description)
    {
        $this->actions[] = array('type' => $type, 'description' => $description);
    }

    function declareBaseActions()
    {
        $this->addAction('dare', "Do 20 jumping jacks");
        $this->addAction('dare', "Do a silly dance");
        $this->addAction('dare', "Tell a joke");
        $this->addAction('dare', "Sing a song in a different language");
        $this->addAction('dare', "Say the alphabet backwards");
        $this->addAction('dare', "Do 10 push-ups");
        $this->addAction('dare', "Talk like a pirate for the rest of the game");
        $this->addAction('dare', "Do an impression of your favorite celebrity");
        $this->addAction('dare', "Wear your clothes backwards for the rest of the game");
        $this->addAction('dare', "Take a shot of hot sauce");
    }

    function selectPlayer()
    {
        $this->game['selected']['player'] = $this->players[rand(0, count($this->players) - 1)];
    }

    function selectAction()
    {
        $this->game['selected']['action'] = $this->actions[rand(0, count($this->actions) - 1)];
    }

    function prepareGame()
    {
        $this->game['screen'] = 1;
        $this->declareBaseActions();
    }

    function startGame()
    {
        $this->selectPlayer();
        $this->selectAction();
        $this->game['screen'] = 2;
        $this->game['isRunning'] = true;
    }

    function nextRound()
    {
        $this->selectPlayer();
        $this->selectAction();
    }
}
?>

<?php
function roulettepress_shortcode()
{
    $html = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RoulettePress</title>
    
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="https://mindesignsystem.vercel.app/main.css">
        <style>
            :root {
                --base--fontFamily: 'Bebas Neue', cursive;
                --base--fontLineHeight: 0.85;
    
                --headings--fontFamily: 'Bebas Neue', cursive;
                --headings--fontLineHeight: 0.75;
            }
        </style>
    </head>
    
    <body class="bg-dark w--100vw h--100vh inset">
        <main
            class="bg-brown--1 flex column w--100 h--100 p--12 gap--12 bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden">
            <content
                class="bg-primary w--100 h--100 bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden scroll--y">
    
                <grid class="place--center h--100" x-show="game.screen == 0">
                    <container class="container text--center">
                        <h3 class="clr-accent">Bonjour!</h3>
                        <h1 class="clr-secondary">Bienvenue to Roulette.</h1>
                        <p class="clr-tertiary text--24">
                            Let's see if Lady Luck is on your side today.
                            <br />
                            With so many possibilities, who knows what the outcome will be!
                        </p>
                        <button class="bg-accent clr-primary px--24 py--12 theme-radius text--24 my--24"
                            @click="prepareGame()">Gather your players</button>
                    </container>
                </grid>
    
                <grid class="place--center h--100" x-show="game.screen == 1">
                    <container class="container text--center">
                        <h3>Who's going to play?</h3>
    
                        <div class="flex row bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden">
                            <input type="text" class="bord--hidden" x-model="captureName" />
                            <button class="p--0 m--0 bord--hidden" @click="addPlayer()">
                                <icon class="icon size--32 bg-accent clr-primary"><i>add</i></icon>
                            </button>
                        </div>
    
                        <ul class="flex row justify--center align--center" x-show="players.length > 0">
                            <template x-for="player in players">
                                <li x-text="player.name"></li>
                            </template>
                        </ul>
    
                        <button class="bg-accent clr-primary px--24 py--12 theme-radius text--24 my--24"
                            x-show="players.length > 1" @click="startGame()">Start game</button>
                    </container>
                </grid>
    
                <grid class="place--center h--100"
                    x-show="game.screen == 2 && game.selected.player.name && game.selected.action.description">
                    <container class="container text--center">
                        <h1 class="clr-accent" x-text="game.selected.player.name"></h1>
                        <p class="text--24" x-text="game.selected.action.description"></p>
                    </container>
                </grid>
    
            </content>
    
            <row class="align--center">
                <row class="justify--start">
                    <icon
                        class="bg-yellow--5 clr-tertiary icon size--24 bord-radius--24 bord-secondary bord--solid bord-width--2" />
                </row>
                <row class="justify--center align--center gap--6" x-show="game.isRunning">
                    <button
                        class="bg-red--5 my--auto px--12 py--6 clr-primary theme-radius text--center justify--center flex row align--center gap--6 bord-secondary bord--solid bord-width--2"
                        @click="nextRound()">
                        <p>Pass</p>
                    </button>
                    <button
                        class="bg-green--5 my--auto px--12 py--6 clr-primary theme-radius text--center justify--center flex row align--center gap--6 bord-secondary bord--solid bord-width--2"
                        @click="nextRound()">
                        <p>Done</p>
                    </button>
                </row>
                <row class="justify--end text--end">
                    <p class="clr-tertiary">Roulette</p>
                </row>
            </row>
        </main>
    </body>
    `;

    $html = '<roulettepress shadowroot="open">' . $html . '</div>';
    return $html;
}

add_shortcode('roulettepress', 'roulettepress_shortcode');
?>