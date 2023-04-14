import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { g as game } from "../../chunks/stores.js";
const Xscreen = "bg-dark block w--100vw h--100vh p--fixed inset overflow--hidden";
const Xframe = "bg-brown--1 flex column w--100 h--100 pt--16 px--24 pb--12 gap--12 bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden";
const Xcontent = "bg-primary block w--100 h--100 bord-secondary bord--solid bord-width--2 theme-radius overflow--hidden scroll--y";
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $game, $$unsubscribe_game;
  $$unsubscribe_game = subscribe(game, (value) => $game = value);
  const button = `my--auto px--12 py--6 clr-primary theme-radius text--center justify--center flex row align--center gap--6 bord-secondary bord--solid bord-width--2`;
  $$unsubscribe_game();
  return `<x-screen${add_attribute("class", Xscreen, 0)}><x-frame${add_attribute("class", Xframe, 0)}><x-content${add_attribute("class", Xcontent, 0)}>${slots.default ? slots.default({}) : ``}</x-content>

        <row class="align--center"><row class="justify--start"><icon class="bg-yellow--5 clr-tertiary icon size--24 bord-radius--24 bord-secondary bord--solid bord-width--2"></icon></row>
            <row class="justify--center align--center gap--6">${$game.onGoing ? `<button class="${"bg-red--5 " + escape(button, true)}"><p>Pass</p></button>
                    <button class="${"bg-green--5 " + escape(button, true)}"><p>Done</p></button>` : ``}</row>
            <row class="justify--end"><icon class="clr-tertiary icon size--24"><i class="iconoir-minus"></i></icon></row></row></x-frame></x-screen>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Frame, "RetroFrame").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
