<script>
    import Prism from 'svelte-prismjs';

    import { drag } from '$lib/drag';
    import { isNavOpen } from '$lib/store.js';

    let showMenu;

    let code = `
    const name = 'Dani Bednarski';

    const about = () => {
        return 'My name is Dani and I am a web developer based in Melbourne, Australia.';
    };

    const motivation = () => {
        return 'What motivates me is making things that people love to use, and want to share with others.';
    };

    const usePortfolio = () => {
        return 'Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see.';
    };
    `;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });
</script>

<main id="main" use:drag>
    <code class={ showMenu ? 'menu-open hide-scrollbar' : 'menu-closed hide-scrollbar' }>
        <Prism showLineNumbers={true}>
            {code}
        </Prism>
    </code>

    <wrapper draggable="false">
        <img on:drag|preventDefault src="/coding.svg" alt="coder" draggable="false" />
    </wrapper>
    </main>
<slot />

<style>
    main {
        display: grid;
        grid-template-rows: 50% 50%;
        padding: 0;
    }
    code {
        grid-row: 1 / 1;
        margin: auto;
    }

    .menu-open {
        width: calc((100vw - 50px) - 14rem - 4.8em);
    }

    .menu-closed {
        width: calc(100vw - 50px - 4.8em);
    }

    wrapper {
        display: grid;
        grid-row: 2 / 2;
        justify-items: end;
        align-items: end;
    }
    img {
        width: 70vw;
        max-width: 35rem;
        -webkit-user-drag: none;
    }
</style>