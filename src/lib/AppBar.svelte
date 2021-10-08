<script>
    import contactAvif from '/static/icons/contact.avif';
    import contactPng from '/static/icons/contact.png';
    import cvAvif from '/static/icons/cv.avif';
    import cvPng from '/static/icons/cv.png';
    import githubAvif from '/static/icons/github.avif';
    import githubPng from '/static/icons/github.png';
    import icon21Avif from '/static/icons/icon21.avif';
    import icon21Png from '/static/icons/icon21.png';
    import linkedInAvif from '/static/icons/linkedin.avif';
    import linkedInPng from '/static/icons/linkedin.png';
    import bedzmeAvif from '/static/icons/bedzme.avif';
    import bedzmePng from '/static/icons/bedzme.png';
    import myobAvif from '/static/icons/myob.avif';
    import myobPng from '/static/icons/myob.png';
    import taskrAvif from '/static/icons/taskr.avif';
    import taskrPng from '/static/icons/taskr.png';
    import thissiteAvif from '/static/icons/thissite.avif';
    import thissitePng from '/static/icons/thissite.png';
    import tictactoeAvif from '/static/icons/tictactoe.avif';
    import tictactoePng from '/static/icons/tictactoe.png';

    import ColorSwatchIcon from './ColorSwatch.svelte';

    import { browser } from '$app/env';

    import { onMount } from 'svelte';
    import { dndzone } from 'svelte-dnd-action';
    import { flip } from 'svelte/animate';
    import { writable } from 'svelte/store';

    import AppBarHomeIcon from '$lib/AppBarHomeIcon.svelte';
    import AppBarIcon from '$lib/AppBarIcon.svelte';
    import AppMenuToggle from '$lib/AppMenuToggle.svelte';

    let itemData = [
        {
            id: 1,
            projectIconPng: myobPng,
            projectIconAvif: myobAvif,
            tooltip: 'myob Sales Tracker',
            href: '/projects/salestracker',
            alt: 'myob Sales Tracker project',
            external: false,
        },
        {
            id: 2,
            projectIconPng: bedzmePng,
            projectIconAvif: bedzmeAvif,
            tooltip: 'bedz.me',
            href: '/projects/bedzme',
            alt: 'bedz.me project',
            external: false,
        },
        {
            id: 3,
            projectIconPng: thissitePng,
            projectIconAvif: thissiteAvif,
            tooltip: 'This Site',
            href: '/projects/thissite',
            alt: 'This Site project',
            external: false,
        },
        {
            id: 4,
            projectIconPng: taskrPng,
            projectIconAvif: taskrAvif,
            tooltip: 'Taskr',
            href: '/projects/taskr',
            alt: 'Taskr project',
            external: false,
        },
        {
            id: 5,
            projectIconPng: icon21Png,
            projectIconAvif: icon21Avif,
            tooltip: 'Twenty One',
            href: '/projects/21',
            alt: 'Twenty One project',
            external: false,
        },
        {
            id: 6,
            projectIconPng: tictactoePng,
            projectIconAvif: tictactoeAvif,
            tooltip: 'Tic-Tac-Toe',
            href: '/projects/tictactoe',
            alt: 'Tic-Tac-Toe project',
            external: false,
        },
        {
            id: 7,
            projectIconPng: cvPng,
            projectIconAvif: cvAvif,
            tooltip: 'Resume / CV',
            href: '/resume',
            alt: 'Resume / CV',
            external: false,
        },
        {
            id: 8,
            projectIconPng: githubPng,
            projectIconAvif: githubAvif,
            tooltip: 'GitHub Profile',
            href: 'https://github.com/danibedz',
            alt: 'GitHub Profile',
            external: true,
        },
        {
            id: 9,
            projectIconPng: linkedInPng,
            projectIconAvif: linkedInAvif,
            tooltip: 'LinkedIn Profile',
            href: 'https://www.linkedin.com/in/danibednarski',
            alt: 'LinkedIn Profile',
            external: true,
        },
        {
            id: 10,
            projectIconPng: contactPng,
            projectIconAvif: contactAvif,
            tooltip: 'Contact Me',
            href: '/contact',
            alt: 'Contact Me',
            external: false,
        },
];

    let items = [];
    let itemStore;

    onMount(async() => {
        const savedItemData = await JSON.parse(localStorage.getItem('AppMenuData'));
        itemStore = writable(savedItemData || itemData);
        itemStore.subscribe((value) => {
            items = value;
        });
    });

    const flipDurationMs = 100;

    function handleDndConsider(e) {
        if (browser) itemStore.set(e.detail.items);
    }

    function handleDndFinalize(e) {
        if (browser) {
            itemStore.set(e.detail.items);
            localStorage.setItem('AppMenuData', JSON.stringify(e.detail.items));
        }
    }
</script>

<wrapper>
    <nav>
        <AppBarHomeIcon
            tooltip={ 'Home' }
            href="/"
        />
        <AppMenuToggle />
        <ColorSwatchIcon />
        <div
            use:dndzone={{ items, flipDurationMs, ...{ dropFromOthersDisabled: true, dropTargetStyle: { outline: 'none' }, morphDisabled: true } }}
            on:consider={ handleDndConsider }
            on:finalize={ handleDndFinalize }
        >
            {#each items as item (item.id)}
                <div animate:flip={{ duration: flipDurationMs }}>
                    <AppBarIcon
                        id={ item.id }
                        tooltip={ item.tooltip }
                        projectIconPng={ item.projectIconPng }
                        projectIconAvif={ item.projectIconAvif }
                        href={ item.href }
                        alt={ item.alt }
                        external={ item.external }
                    />
                </div>
            {/each}
        </div>
    </nav>
</wrapper>

<style>
    wrapper {
        height: 100%;
        width: 50px;
        grid-column: 1;
    }

    nav {
        height: 100%;
        width: 50px;
        position: fixed;
        background: linear-gradient(var(--color-primary-light), var(--color-primary-dark));
        z-index: 1;
    }
</style>
