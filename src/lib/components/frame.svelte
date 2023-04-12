<script lang="ts">
    const outline = "bord-secondary bord--solid bord-width--2";
    const corners = "theme-radius";
    const noOverflow = "overflow--hidden";

    const xScreen = `bg-dark block w--100vw h--100vh p--fixed inset ${noOverflow}`;
    const xFrame = `bg-brown--1 block w--100 h--100 p--24 ${outline} ${corners} ${noOverflow}`;
    const xContent = `bg-primary block w--100 h--100 ${outline} ${corners} ${noOverflow} scroll--y`;
</script>

<x-screen class={xScreen}>
    <x-frame class={xFrame}>
        <x-content class={xContent}>
            <slot />
        </x-content>
    </x-frame>
</x-screen>
