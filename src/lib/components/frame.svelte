<script lang="ts">
    const corners = "theme-radius";
    const outline = "bord-secondary bord--solid bord-width--2";

    const icon = "icon size--24";
    const gap = "gap--6";
    const row = `flex row align--center ${gap}`;

    const button = `my--auto px--12 py--6 clr-primary theme-radius text--center justify--center ${row} ${outline}`;

    const noscroll = "overflow--hidden";
    const scrollColumn = "overflow--hidden scroll--y";

    const xScreen = `bg-dark block w--100vw h--100vh p--fixed inset ${noscroll}`;
    const xContent = `bg-primary block w--100 h--100 ${outline} ${corners} ${scrollColumn}`;
    const xFrame = `bg-brown--1 flex column w--100 h--100 pt--16 px--24 pb--12 gap--12 ${outline} ${corners} ${noscroll}`;
</script>

<x-screen class={xScreen}>
    <x-frame class={xFrame}>
        <x-content class={xContent}>
            <slot />
        </x-content>
        <row class="noshrink {row}">
            <row class="justify--start {row}">
                <icon
                    class=" bg-yellow--5 clr-tertiary bord-radius--24 {icon} {outline}"
                />
            </row>
            <row class="justify--center {row}">
                <button class="bg-red--5 {button}">
                    <p>Pass</p>
                </button>
                <button class="bg-green--5 {button}">
                    <p>Done</p>
                </button>
            </row>
            <row class="justify--end {row}">
                <icon class="clr-tertiary {icon}">
                    <i class="iconoir-minus" />
                </icon>
            </row>
        </row>
    </x-frame>
</x-screen>
