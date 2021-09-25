<script>
    import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import AppBar from '$lib/AppBar.svelte';
    import AppMenu from '$lib/AppMenu.svelte';
    import AppMenuItem from '$lib/AppMenuItem.svelte';
    import Head from '$lib/Head.svelte';
    import Logo from '$lib/Logo.svelte';
    import { isNavOpen, handleResize } from '$lib/store.js';

    let showMenu;
    let windowWidth;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

    onMount(() => {
        handleResize(windowWidth);
    });

</script>

<Head/>

<svelte:window on:resize={ () => handleResize(windowWidth) } bind:innerWidth={ windowWidth } />

<layout style={ showMenu ? 'grid-template-columns: 50px 14rem auto;' : 'grid-template-columns: 50px 0 auto;'}>
    <AppBar />
    <div in:fly|local={{ x: -400, duration: 600 }}>
        {#if showMenu}
            <AppMenu>
                <Logo />
                <AppMenuItem href='/resume' text='Resume' internal/>
                <AppMenuItem href='https://github.com/danibedz' text='GitHub' target='_blank' rel='noreferrer' icon={ faExternalLinkAlt } />
                <AppMenuItem href='https://www.linkedin.com/in/danibednarski/' text='LinkedIn' target='_blank' rel='noreferrer' icon={ faExternalLinkAlt } />
                <AppMenuItem href='/contact' text='Contact' internal />
            </AppMenu>
        {/if}
    </div>
    <slot />
</layout>

<style>
    layout {
        display: grid;
        height: 100%;
    }

    :global(:root) {
        --color-primary-light: rgb(34, 211, 238);
        --color-primary-dark: rgb(17, 24, 39);
        --color-primary-grey: rgb(55, 65, 81);
        --color-text: rgb(255, 255, 255);
        --color-green: rgb(16, 185, 129);

    }
    :global(html, body, #svelte) {
        height: 100%;
        overscroll-behavior: none;
    }

    :global(html, body, #svelte, input, button) {
        font-family: monospace, 'Courier New', Courier;
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
</style>