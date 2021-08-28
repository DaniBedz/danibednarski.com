<svelte:head>
	<title>The Portfolio of Dani Bednarski - danibednarski.com</title>
	<meta name="description" content="The portfolio website of Dani Bednarski. My name is Dani and I'm a web developer based in Melbourne, Australia.
        What motivates me is making things that people love to use, and want to share with others.
        Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see." />
	<html lang="en" />
</svelte:head>

<script context="module">
    export async function load( { page } ) {
        const screenshotsPng = Object.values(import.meta.globEager('/static/projects/**/*.png'))
            .filter((path) => path.default.includes(page.params.slug));
        let pngPaths = screenshotsPng.map((path) => path.default);

        const screenshotsAvif = Object.values(import.meta.globEager('/static/projects/**/*.avif'))
            .filter((path) => path.default.includes(page.params.slug));
        let avifPaths = screenshotsAvif.map((path) => path.default);

        const screenshotData = [];

        for (let i = 0; i < pngPaths.length; i++) {
            const entry = {
                id: i,
                pngSrc: pngPaths[i],
            };
            for (let j = 0; j < avifPaths.length; j++) {
                if (avifPaths[j].includes(`${ page.params.slug }${ i }`)) {
                    entry.avifSrc = avifPaths[j];
                }
            }
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

    import AppBar from '$lib/AppBar.svelte';
    import AppMenu from '$lib/AppMenu.svelte';
    import AppMenuItem from '$lib/AppMenuItem.svelte';
    import Carousel from '$lib/Carousel.svelte';
    import Pill from '$lib/Pill.svelte';
    import ProjectDescription from '$lib/ProjectDescription.svelte';
    import ProjectHeader from '$lib/ProjectHeader.svelte';
    import ProjectTitle from '$lib/ProjectTitle.svelte';
    import TechnologiesUsed from '$lib/TechnologiesUsed.svelte';

    export let descriptionData;
    export let github;
    export let liveSite;
    export let projectNameData;
    export let screenshotData;
    export let technologiesUsed;
    export let titleData;
</script>

<main>
    <AppBar />
    {#key projectNameData}
        <AppMenu>
            <AppMenuItem href="#screenshots" text="Screenshots" />
            <AppMenuItem href="#description" text="Description" />
            <AppMenuItem href="#technologies-used" text="Technologies used" />
            <AppMenuItem href={ github } text="GitHub" icon={ faExternalLinkAlt } target="_blank" rel="noreferrer" />
            <AppMenuItem href={ liveSite } text="Live Site" icon={ faExternalLinkAlt } target="_blank" rel="noreferrer" />
        </AppMenu>
    {/key}
    <article>
        <Carousel { screenshotData } />
        <ProjectHeader { projectNameData } />
        <ProjectTitle { titleData } />
        <ProjectDescription { descriptionData } />
        <TechnologiesUsed>
            {#each technologiesUsed as technology}
                <Pill text={ technology } />
            {/each}
        </TechnologiesUsed>
    </article>
    <slot/>
</main>

<style>
    main {
        display: flex;
        height: 100%;
    }

    article {
        position: static;
        height: 100%;
    }
</style>