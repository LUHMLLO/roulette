import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape } from "../../chunks/index2.js";
import { g as game, p as players, c as choosenPlayer, a as choosenAction } from "../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $game, $$unsubscribe_game;
  let $players, $$unsubscribe_players;
  let $choosenPlayer, $$unsubscribe_choosenPlayer;
  let $choosenAction, $$unsubscribe_choosenAction;
  $$unsubscribe_game = subscribe(game, (value) => $game = value);
  $$unsubscribe_players = subscribe(players, (value) => $players = value);
  $$unsubscribe_choosenPlayer = subscribe(choosenPlayer, (value) => $choosenPlayer = value);
  $$unsubscribe_choosenAction = subscribe(choosenAction, (value) => $choosenAction = value);
  let inputPlayerName = "";
  $$unsubscribe_game();
  $$unsubscribe_players();
  $$unsubscribe_choosenPlayer();
  $$unsubscribe_choosenAction();
  return `${!$game.screen ? `<grid class="place--center h--100"><container class="container text--center"><h3 class="clr-accent">Bonjour!</h3>
            <h1 class="clr-secondary">Bienvenue to Roulette.</h1>
            <p class="clr-tertiary text--24">Let&#39;s see if Lady Luck is on your side today.
                <br>
                With so many possibilities, who knows what the outcome will be!
            </p>
            <button class="bg-accent clr-primary px--24 py--12 theme-radius text--24 my--24">Start playing</button></container></grid>` : ``}

${$game.screen == 1 ? `<grid class="place--center h--100"><container class="container text--center"><h3>Who&#39;s going to play?</h3>

            <form class="flex row bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden"><input type="text" class="bord--hidden"${add_attribute("value", inputPlayerName, 0)}>
                <button class="p--0 m--0 bord--hidden"><icon class="icon size--32 bg-accent clr-primary"><i class="iconoir-plus"></i></icon></button></form>

            ${$players.length > 0 ? `<ul class="flex row justify--center align--center">${each($players, (player) => {
    return `<li>${escape(player.name)}</li>`;
  })}</ul>` : ``}

            <button class="bg-accent clr-primary px--24 py--12 theme-radius text--24 my--24" ${$players.length < 2 || $players.length < 1 ? "disabled" : ""}>Start game</button></container></grid>` : ``}

${$game.screen == 2 ? `${$game.onGoing ? `<grid class="place--center h--100"><container class="container text--center"><h1 class="clr-accent">${escape($choosenPlayer.name)}</h1>
                <p class="text--24">${escape($choosenAction.description)}</p></container></grid>` : ``}` : ``}`;
});
export {
  Page as default
};
