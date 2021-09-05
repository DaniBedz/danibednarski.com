<script>
    import { isNavOpen } from './store.js';

    let showMenu;
    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

</script>

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
</style>