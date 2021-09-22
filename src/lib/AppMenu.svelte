<script>
    import { isNavOpen } from './store.js';

    let showMenu;
    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

    let windowWidth;

    $: if (windowWidth < 700) {
        isNavOpen.set(false);
    }
</script>

<svelte:window bind:innerWidth={windowWidth} />

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
        width: 15vw;
        min-width: 8rem;
        max-width: 13rem;
        margin-top: 7rem;
    }
    nav {
        position: fixed;
        height: 100%;
        width: 17vw;
        min-width: 10rem;
        max-width: 15rem;
        background-color: var(--color-primary-dark);
    }
</style>