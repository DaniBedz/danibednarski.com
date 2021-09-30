<script context="module">
    export async function load( { page } ) {
        const pngPaths = [];
        const avifPaths = [];
        for (let i = 0; i < 3; i++) {
            let png = `/projects/${ page.params.slug }/${ page.params.slug }${ i }.png`;
            let avif = `/projects/${ page.params.slug }/${ page.params.slug }${ i }.avif`;
            pngPaths.push(png);
            avifPaths.push(avif);
        }

        const screenshotData = [];

        for (let i = 0; i < pngPaths.length; i++) {
            const entry = {
                id: i,
                pngSrc: pngPaths[i],
                avifSrc: avifPaths[i],
            };
            screenshotData.push(entry);
        }

        const project = (await import(`../../markdown/${ page.params.slug }.md`));

        return {
            props: {
                descriptionData: project.metadata.description,
                github: project.metadata.github,
                liveSite: project.metadata.liveSite,
                projectNameData: project.metadata.projectName,
                screenshotData,
                technologiesUsed: project.metadata.technologiesUsed,
                titleData: project.metadata.title,
            },
        };
    }
</script>

<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import AppBar from '$lib/AppBar.svelte';
    import AppMenu from '$lib/AppMenu.svelte';
    import AppMenuItem from '$lib/AppMenuItem.svelte';
    import Carousel from '$lib/Carousel.svelte';
    import { isNavOpen, handleResize } from '$lib/core';
    import Head from '$lib/Head.svelte';
    import Logo from '$lib/Logo.svelte';
    import ProjectDescription from '$lib/ProjectDescription.svelte';
    import ProjectHeader from '$lib/ProjectHeader.svelte';
    import ProjectTitle from '$lib/ProjectTitle.svelte';
    import TechnologiesUsed from '$lib/TechnologiesUsed.svelte';
    import WaveSvg from '$lib/Wave.svelte';


    export let descriptionData;
    export let github;
    export let liveSite;
    export let projectNameData;
    export let screenshotData;
    export let technologiesUsed;
    export let titleData;

    let showMenu;
    let windowWidth;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

    onMount(() => {
        handleResize(windowWidth);
    });
</script>

<Head />
<WaveSvg />

<svelte:window
    bind:innerWidth={ windowWidth }
    on:resize={ () => handleResize(windowWidth) }
/>

<layout class={ showMenu ? 'layout-menu-open' : 'layout-menu-closed' }>
    <AppBar />
    <nav in:fly|local={{ x: -400, duration: 600 }}>
        {#if showMenu}
            <AppMenu>
                <Logo />
                <AppMenuItem href="#screenshots" text="Screenshots" />
                <AppMenuItem href="#description" text="Description" />
                <AppMenuItem href="#technologies-used" text="Technologies Used" />
                <AppMenuItem href={ liveSite } text="Live Site" target="_blank" rel="noreferrer" />
                <AppMenuItem href={ github } text="GitHub" target="_blank" rel="noreferrer" />
            </AppMenu>
        {/if}
    </nav>
    <main class={showMenu ? 'menu-open' : 'menu-closed' }>
        <Carousel { screenshotData } />
        <article>
            <ProjectHeader { projectNameData } />
            <ProjectTitle { titleData } />
            <ProjectDescription { descriptionData } />
            <TechnologiesUsed { technologiesUsed } />
        </article>
    </main>
    <slot/>
</layout>

<style>
    layout {
        display: grid;
    }

    article {
        margin: 0 2rem 1rem;
    }

    main {
        position: absolute;
        right: 0;
        margin-top: 2rem;
    }

    .menu-open {
        width: calc((100% - 50px) - 14rem);
    }

    .menu-closed {
        width: calc(100% - 50px);
    }

    .layout-menu-open {
        grid-template-columns: 50px 14rem auto;
    }

    .layout-menu-closed {
        grid-template-columns: 50px 0 auto;
    }
</style>