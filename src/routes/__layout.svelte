<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';

    import AppBar from '$lib/AppBar.svelte';
    import AppMenu from '$lib/AppMenu.svelte';
    import AppMenuItem from '$lib/AppMenuItem.svelte';
    import { isNavOpen, handleResize } from '$lib/core';
    import Head from '$lib/Head.svelte';
    import Logo from '$lib/Logo.svelte';
    import WaveSvg from '$lib/wave.svelte';

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
<background>
    <WaveSvg />
</background>

<svelte:window on:resize={ () => handleResize(windowWidth) } bind:innerWidth={ windowWidth } />

<layout style={ showMenu ? 'grid-template-columns: 50px 14rem auto;' : 'grid-template-columns: 50px 0 auto;'}>
    <AppBar />
    <div in:fly|local={{ x: -400, duration: 600 }}>
        {#if showMenu}
            <AppMenu>
                <Logo />
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
    background {
        position: absolute;
        width: 100vw;
        z-index: -1;
    }

    layout {
        display: grid;
        height: 100%;
    }
</style>