<script>
    import { isNavOpen } from './store.js';

    import daniImg from '../../static/dani.png';

    let showMenu;
    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

    let windowWidth;

    $: if (windowWidth < 700) {
        showMenu = false;
    }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<a href="/">
    <img src={ daniImg } alt="dani text" />
</a>
{#if showMenu}
    <div class="wrapper">
        <nav>
            <slot/>
        </nav>
    </div>
{/if}

<style>
    /* Menu styles */
    .wrapper {
        min-width: 15rem;
        margin-top: 7rem;
    }
    nav {
        position: fixed;
        height: 100%;
        width: 15rem;
        background-color: var(--color-primary-dark);
    }

    img {
        position: fixed;
        height: calc(171px * 0.4);
        width: calc(456px * 0.4);
        display: flex;
        top: 1rem;
        left: 5.5rem;
        padding-bottom: 2rem;
    }
</style>