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
        transition:transform 0.25s ease;
        max-height: 40px;
        max-width: 40px;
        min-height: 30px;
        min-width: 30px;
        height: calc(1rem + 3.5vw);
        width: calc(1rem + 3.5vw);
    }

    picture {
        transition:transform 0.25s ease;
    }

    picture:hover {
        transform:scale(1.2);
        transition:transform 0.25s ease;
    }

    button {
        display: flex;
        margin: 1rem auto 0;
        border: none;
        background: transparent;
        padding: 0;
    }
</style>