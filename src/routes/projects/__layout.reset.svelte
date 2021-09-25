<svelte:head>
	<title>The Portfolio of Dani Bednarski - danibednarski.com</title>
	<meta name="description" content="The portfolio website of Dani Bednarski. My name is Dani and I'm a web developer based in Melbourne, Australia.
        What motivates me is making things that people love to use, and want to share with others.
        Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see." />
	<html lang="en" />
</svelte:head>

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
    import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import AppBar from '$lib/AppBar.svelte';
    import AppMenu from '$lib/AppMenu.svelte';
    import AppMenuItem from '$lib/AppMenuItem.svelte';
    import Carousel from '$lib/Carousel.svelte';
    import Logo from '$lib/Logo.svelte';
    import Pill from '$lib/Pill.svelte';
    import ProjectDescription from '$lib/ProjectDescription.svelte';
    import ProjectHeader from '$lib/ProjectHeader.svelte';
    import ProjectTitle from '$lib/ProjectTitle.svelte';
    import { isNavOpen, handleResize } from '$lib/store.js';
    import TechnologiesUsed from '$lib/TechnologiesUsed.svelte';

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

<svelte:window on:resize={ () => handleResize(windowWidth) } bind:innerWidth={ windowWidth } />

<layout style={ showMenu ? 'grid-template-columns: 50px 14rem auto' : 'grid-template-columns: 50px 0px auto'}>
    <AppBar />
    <nav in:fly|local={{ x: -400, duration: 600 }}>
        {#if showMenu}
            <AppMenu>
                <Logo />
                <AppMenuItem href="#screenshots" text="Screenshots" />
                <AppMenuItem href="#description" text="Description" />
                <AppMenuItem href="#technologies-used" text="Technologies used" />
                <AppMenuItem href={ liveSite } text="Live Site" icon={ faExternalLinkAlt } target="_blank" rel="noreferrer" />
                <AppMenuItem href={ github } text="GitHub" icon={ faExternalLinkAlt } target="_blank" rel="noreferrer" />
            </AppMenu>
        {/if}
    </nav>
    <main class={showMenu ? 'menu-open' : 'menu-closed' }>
        <Carousel class="carousel" { screenshotData } />
        <article>
            <ProjectHeader { projectNameData } />
            <ProjectTitle { titleData } />
            <ProjectDescription { descriptionData } />
            <TechnologiesUsed>
                {#each technologiesUsed as technology}
                    <Pill text={ technology } />
                {/each}
            </TechnologiesUsed>
        </article>
    </main>
    <slot/>
</layout>

<style>
    layout {
        display: grid;
    }

    article {
        margin: 2rem 4rem;
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
</style>