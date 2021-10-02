<script>
    import contactAvif from '/static/contact.avif';
    import contactPng from '/static/contact.png';
    import cvAvif from '/static/cv.avif';
    import cvPng from '/static/cv.png';
    import githubAvif from '/static/github.avif';
    import githubPng from '/static/github.png';
    import icon21Avif from '/static/icon21.avif';
    import icon21Png from '/static/icon21.png';
    import linkedInAvif from '/static/linkedin.avif';
    import linkedInPng from '/static/linkedin.png';
    import bedzmeAvif from '/static/bedzme.avif';
    import bedzmePng from '/static/bedzme.png';
    import myobAvif from '/static/myob.avif';
    import myobPng from '/static/myob.png';
    import taskrAvif from '/static/taskr.avif';
    import taskrPng from '/static/taskr.png';
    import thissiteAvif from '/static/thissite.avif';
    import thissitePng from '/static/thissite.png';
    import tictactoeAvif from '/static/tictactoe.avif';
    import tictactoePng from '/static/tictactoe.png';

    import ColorSwatchIcon from './ColorSwatch.svelte';

    import { drag } from '$lib/drag';
    import AppBarHomeIcon from '$lib/AppBarHomeIcon.svelte';
    import AppBarIcon from '$lib/AppBarIcon.svelte';
    import AppMenuToggle from '$lib/AppMenuToggle.svelte';

    const appBarData = [
        [{
            id: 0,
            projectIconPng: myobPng,
            projectIconAvif: myobAvif,
            tooltip: 'myob Sales Tracker',
            href: '/projects/salestracker',
            alt: 'myob Sales Tracker project',
            external: false,
        }],
        [{
            id: 1,
            projectIconPng: bedzmePng,
            projectIconAvif: bedzmeAvif,
            tooltip: 'bedz.me',
            href: '/projects/bedzme',
            alt: 'bedz.me project',
            external: false,
        }],
        [{
            id: 2,
            projectIconPng: taskrPng,
            projectIconAvif: taskrAvif,
            tooltip: 'Taskr',
            href: '/projects/taskr',
            alt: 'Taskr project',
            external: false,
        }],
        [{
            id: 3,
            projectIconPng: icon21Png,
            projectIconAvif: icon21Avif,
            tooltip: 'Twenty One',
            href: '/projects/21',
            alt: 'Twenty One project',
            external: false,
        }],
        [{
            id: 4,
            projectIconPng: tictactoePng,
            projectIconAvif: tictactoeAvif,
            tooltip: 'Tic-Tac-Toe',
            href: '/projects/tictactoe',
            alt: 'Tic-Tac-Toe project',
            external: false,
        }],
        [{
            id: 5,
            projectIconPng: thissitePng,
            projectIconAvif: thissiteAvif,
            tooltip: 'This Site',
            href: '/projects/thissite',
            alt: 'This Site project',
            external: false,
        }],
        [{
            id: 6,
            projectIconPng: cvPng,
            projectIconAvif: cvAvif,
            tooltip: 'Resume / CV',
            href: '/resume',
            alt: 'Resume / CV',
            external: false,
        }],
        [{
            id: 7,
            projectIconPng: githubPng,
            projectIconAvif: githubAvif,
            tooltip: 'GitHub Profile',
            href: 'https://github.com/danibedz',
            alt: 'GitHub Profile',
            external: true,
        }],
        [{
            id: 8,
            projectIconPng: linkedInPng,
            projectIconAvif: linkedInAvif,
            tooltip: 'LinkedIn Profile',
            href: 'https://www.linkedin.com/in/danibednarski',
            alt: 'LinkedIn Profile',
            external: true,
        }],
        [{
            id: 9,
            projectIconPng: contactPng,
            projectIconAvif: contactAvif,
            tooltip: 'Contact Me',
            href: '/contact',
            alt: 'Contact Me',
            external: false,
        }],
    ];
</script>

<wrapper>
    <nav>
        <AppBarHomeIcon
            tooltip={ 'Home' }
            href="/"
        />
        <AppMenuToggle />
        <ColorSwatchIcon />

        {#each appBarData as app}
            <div use:drag={ 'appBarIconExternal' } >
                <AppBarIcon
                    id={ app[0].id }
                    tooltip={ app[0].tooltip }
                    projectIconPng={ app[0].projectIconPng }
                    projectIconAvif={ app[0].projectIconAvif }
                    href={ app[0].href }
                    alt={ app[0].alt }
                    external={ app[0].external }
                />
            </div>
        {/each}
    </nav>
</wrapper>

<style>
    wrapper {
        height: 100%;
        width: 50px;
    }

    nav {
        height: 100%;
        width: 50px;
        position: fixed;
        background: linear-gradient(var(--color-primary-light), var(--color-primary-dark));
        z-index: 1;
    }
</style>
