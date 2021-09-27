<script>
    import { isNavOpen } from '$lib/core';

    import toggleSvg from '/static/toggle.svg';

    import '/src/tooltip.css';

    let showMenu;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

    function toggleMenu() {
        isNavOpen.set(!showMenu);
    }
</script>

<button
    id="toggle"
    on:click={ toggleMenu }
    tooltip={ `${ showMenu ? 'Hide' : 'Show' } Menu` }
    flow="right"
    draggable="false"
>
    <picture>
        <img
            src={ toggleSvg }
            alt="toggle menu"
            height="40px"
            width="40px"
            draggable="false"
            class={ showMenu ? '' : 'toggle-arrow' }
        >
    </picture>
</button>

<style>
    .toggle-arrow {
        transform: rotate(180deg);
    }

    img {
        transition:transform .25s ease;
    }

    picture {
        transition:transform .25s ease;
    }

    picture:hover {
        transform:scale(1.2);
        transition:transform .25s ease;
    }

    button {
        display: flex;
        margin: 1rem auto 0;
        border: none;
        background: transparent;
        padding: 0;
    }
</style>