<svelte:head>
    <link rel="stylesheet" href="https://luisrmelo.vercel.app/css/main.css" />

    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
    />

    <style>
        :root {
            --bordRadius: var(--px--24);
            --inputBordRadius: var(--bordRadius);
            --buttonBordRadius: var(--bordRadius);

            --fontFamily: "Schibsted Grotesk", sans-serif;
            --headingFontFamily: "Bebas Neue", cursive;
            --buttonFontFamily: var(--fontFamily);

            --clr-first: var(--clr-gray--10);
            --clr-second: var(--clr-gray--9);
            --clr-third: var(--clr-gray--8);
            --clr-fourth: var(--clr-gray--7);

            --clr-accentLight: var(--clr-red--4);
            --clr-accent: var(--clr-red--5);
            --clr-accentDark: var(--clr-red--6);

            --clr-onAccent: var(--clr-gray--0);

            --clr-complementaryLight: var(--clr-amber--4);
            --clr-complementary: var(--clr-amber--5);
            --clr-complementaryDark: var(--clr-amber--6);

            --clr-onComplementary: var(--clr-first);

            --clr-heading: var(--clr-gray--0);
            --clr-content: var(--clr-gray--1);
            --clr-link: var(--clr-accent);
        }
    </style>
</svelte:head>

<grid class="place-center h-100vh">
    <container>
        <column class="gap-32 align-center justify-center text-center">
            <slot />
        </column>
    </container>
</grid>
