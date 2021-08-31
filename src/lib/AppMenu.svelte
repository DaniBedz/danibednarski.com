<script>
    import { isMenuOpen } from './stores.js';

    import daniImg from '../../static/dani.png';

    import { fly } from 'svelte/transition';

    let showMenu;
    isMenuOpen.subscribe((value) => {
        showMenu = value;
    });

</script>

{#if showMenu}
    <div class="wrapper" transition:fly={{ x: -200 }}>
        <nav>
            <a href="/">
                <img src={ daniImg } alt="dani text" />
            </a>
            <slot/>
        </nav>
    </div>
{/if}

<style>
    /* Menu styles */
    .wrapper {
        min-width: 15rem;
    }

    nav {
        position: fixed;
        height: 100%;
        width: 15rem;
        background-color: var(--color-primary-dark);
    }

    img {
        height: calc(171px * 0.4);
        width: calc(456px * 0.4);
        display: flex;
        margin: 0.5rem auto;
        padding-bottom: 2rem;
    }
</style>