<script>
    import Prism from 'svelte-prismjs';

    import CodingImage from '$lib/CodingImage.svelte';
    import { isNavOpen } from '$lib/core';
    import { drag } from '$lib/drag';
    import '../../src/code-block.css';

    let showMenu;

    let codeText = `
    const dani =
        {
            name: 'Dani Bednarski',
            job: 'Software Engineer',
            location: 'Melbourne, Australia',
            contact: 'email@danibednarski.com',
        };

    const interestsArray =
        [
            'Making software that people love to use',
            'Learning new things',
            'Problem solving',
        ];

    async function usePortfolio() {
        await exploreSite();
        await checkoutProjects();

        if (isInterested || isQuestion) {
            return contactMe(dani.contact);
        } else {
            alert('Have a great day!')
        };
    }
    `;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });
</script>

<main id="main">
    <codeBlock use:drag class={ showMenu ? 'menu-open' : 'menu-closed' }>
        <Prism showLineNumbers>
            { codeText }
        </Prism>
    </codeBlock>

    <wrapper use:drag draggable="false">
        <CodingImage />
    </wrapper>
</main>
<slot />

<style>
    main {
        display: flex;
        padding: 0;
    }
    codeBlock {
        margin: 1rem 1.4rem;
    }

    .menu-open {
        width: calc((100vw - 50px) - 14rem - 2.8em);
    }

    .menu-closed {
        width: calc(100vw - 50px - 2.8em);
    }

    wrapper {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 35vw;
        min-width: 20rem;
        max-width: 40rem;
        -webkit-user-drag: none;
    }
</style>