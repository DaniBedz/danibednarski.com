<script>
    import { onMount } from 'svelte';

    import AppBar from '$lib/AppBar.svelte';
    import AppMenu from '$lib/AppMenu.svelte';
    import AppMenuItem from '$lib/AppMenuItem.svelte';
    import { isNavOpen, handleResize } from '$lib/core';
    import Head from '$lib/Head.svelte';
    import WaveSvg from '$lib/Wave.svelte';

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
<WaveSvg />

<svelte:window
    on:resize={ () => handleResize(windowWidth) }
    bind:innerWidth={ windowWidth }
/>

<layout
    class={ showMenu ? 'layout-menu-open' : 'layout-menu-closed' }
>
        <AppBar />
        <div>
            {#if showMenu}
            <AppMenu>
                <AppMenuItem href='/resume' text='Resume' internal />
                <AppMenuItem href='https://github.com/danibedz' text='GitHub' target='_blank' rel='noreferrer' />
                <AppMenuItem href='https://www.linkedin.com/in/danibednarski/' text='LinkedIn' target='_blank' rel='noreferrer' />
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
        transition: all 0.6s ease;
    }

    .layout-menu-open {
        grid-template-columns: 50px 14rem auto;
    }

    .layout-menu-closed {
        grid-template-columns: 50px 0 auto;
    }
</style>