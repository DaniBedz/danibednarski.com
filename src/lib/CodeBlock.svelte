<script>
    import Prism from 'svelte-prismjs';

    import { isNavOpen } from '$lib/core';
    import { drag } from '$lib/drag';
    import '../../src/code-block.css';

    let showMenu;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

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
</script>

    <div use:drag class={ showMenu ? 'menu-open' : 'menu-closed' }>
        <Prism showLineNumbers>
            { codeText }
        </Prism>
    </div>

<style>
    div {
        margin: 1rem 1.4rem;
        z-index: 2;
    }

    .menu-open {
        width: calc((100vw - 50px) - 14rem - 2.8em);
    }

    .menu-closed {
        width: calc(100vw - 50px - 2.8em);
    }

</style>
