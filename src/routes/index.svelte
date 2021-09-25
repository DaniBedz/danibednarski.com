<script>
    import Prism from 'svelte-prismjs';

    import { drag } from '$lib/drag';
    import { isNavOpen } from '$lib/store.js';
    import '../../src/code-block.css';

    let showMenu;

    let codeText = `
    const dani =
        {
            name: 'Dani Bednarski',
            job: 'Software Engineer 💻',
            location: 'Melbourne, Australia 🦘',
            contact: 'email@danibednarski.com',
        };

    const interestsArray =
        [
            'Making software that people 💙 to use',
            'Learning new things 🧠',
            'Problem solving 🛠',
        ];

    async function usePortfolio() {
        await exploreSite();
        await checkoutProjects();

        if (isInterested || isQuestion) {
            return contactMe(dani.contact);
        } else {
            alert('Have a great day! 🙂')
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
        <img src="/coding.svg" alt="coder" draggable="false" />
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
        display: grid;
        justify-items: end;
        align-items: end;
    }
    img {
        position: absolute;
        width: 40vw;
        min-width: 23rem;
        max-width: 35rem;
        -webkit-user-drag: none;
    }
</style>