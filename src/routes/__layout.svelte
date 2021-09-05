<svelte:head>
	<title>The Portfolio of Dani Bednarski - danibednarski.com</title>
	<meta name="description" content="The portfolio website of Dani Bednarski. My name is Dani and I'm a web developer based in Melbourne, Australia.
        What motivates me is making things that people love to use, and want to share with others.
        Please explore the site, check out some of the projects that I have worked on, and reach out if you like what you see." />
	<html lang="en" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</svelte:head>

<script>
    import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
    import { fly, fade } from 'svelte/transition';

    import AppBar from '$lib/AppBar.svelte';
    import AppMenu from '$lib/AppMenu.svelte';
    import AppMenuItem from '$lib/AppMenuItem.svelte';
</script>

    <div>
        <AppBar />
        <div in:fly|local={{ x: -400, duration: 600 }}>
            <AppMenu>
                <AppMenuItem href='/resume' text='Resume' internal/>
                <AppMenuItem href='https://github.com/danibedz' text='GitHub' target='_blank' rel='noreferrer' icon={ faExternalLinkAlt } />
                <AppMenuItem href='https://www.linkedin.com/in/danibednarski/' text='LinkedIn' target='_blank' rel='noreferrer' icon={ faExternalLinkAlt } />
                <AppMenuItem href='/contact' text='Contact' internal />
            </AppMenu>
        </div>
        <slot />
    </div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

    :global(:root) {
        --color-primary-light: rgb(34, 211, 238);
        --color-primary-dark: rgb(17, 24, 39);
        --color-primary-grey: rgb(55, 65, 81);
        --color-text: rgb(255, 255, 255);
        --color-green: rgb(16, 185, 129);

    }
    :global(html, body) {
        height: 100%;
        font-family: monospace, 'Courier New', Courier;
        overscroll-behavior: none;
    }
    :global(body) {
        background: var(--color-primary-dark);
        color: var(--color-text);
        font-size: 16px;
        background-image: url('/wave.svg');
        background-size: cover;
        background-repeat: no-repeat;
        margin: 0;
    }
    :global(a, button) {
        cursor: pointer;
        font-family: monospace, 'Courier New', Courier;
        font-size: 16px;
        text-decoration: none;
    }

    :global(button:focus) {
        outline: none !important;
    }

    div {
        display: flex;
    }
</style>