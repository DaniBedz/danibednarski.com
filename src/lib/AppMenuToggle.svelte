<script>
    import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa/src/fa.svelte';

    import { isNavOpen } from '$lib/store';

    let showMenu;

    isNavOpen.subscribe((value) => {
        showMenu = value;
    });

    function toggleMenu() {
        isNavOpen.set(!showMenu);
    }

</script>

<button id="expander" aria-label="expand menu" href="/" on:click={ toggleMenu } tooltip={ `${ showMenu ? 'Hide' : 'Show' } Menu` } flow="right">
    <div id="arrow" class={showMenu ? 'toggle-arrow' : null }>
        <Fa icon={ faAngleLeft } size="2x" />
    </div>
</button>

<style>
    .toggle-arrow {
        transform: rotate(-180deg);
        transition: all .3s ease;
    }

    button {
        display: flex;
        position: fixed;
        bottom: 1rem;
        margin: 1rem auto;
        margin-left: 0.75rem;
        height: 40px;
        width: 40px;
        min-height: 40px;
        min-width: 40px;
        border-radius: 50%;
        border: none;
        background-color: var(--color-primary-light);
        border: 3px solid var(--color-primary-dark);

    }

    button:hover {
        color: var(--color-primary-light);
        background-color: var(--color-primary-dark);
        border: 2px solid var(--color-primary-light);
    }

    #arrow {
        margin: auto;
        transition: all .3s ease;
    }

    /* START TOOLTIP STYLES */

    /* Applies to all tooltips */
    [tooltip]::before,
    [tooltip]::after {
        text-transform: none;
        line-height: 1;
        user-select: none;
        pointer-events: none;
        position: absolute;
        display: none;
        opacity: 0;
    }
    [tooltip]::before {
        content: '';
        border: 5px solid;
        z-index: 1001;
    }
    [tooltip]::after {
        content: attr(tooltip);
        text-align: center;
        min-width: 3em;
        max-width: 21em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 1ch 1.5ch;
        border-radius: .3ch;
        box-shadow: 0 1em 2em -.5em var(--color-primary-dark);;
        background: var(--color-text);
        color: var(--color-primary-dark);
        z-index: 1000;
    }

    /* Make the tooltips respond to hover */
    [tooltip]:hover::before,
    [tooltip]:hover::after {
        display: block;
    }

    /* Don't show empty tooltips */
    [tooltip='']::before,
    [tooltip='']::after {
        display: none !important;
    }

    [tooltip][flow^="right"]::before {
        top: 50%;
        border-left-width: 0;
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-right-color: var(--color-text);
        right: calc(0em - 5px);
        transform: translate(.5em, -50%);
    }
    [tooltip][flow^="right"]::after {
        top: 50%;
        left: calc(100% + 5px);
        transform: translate(.5em, -50%);
    }

    /* KEYFRAMES */
    @keyframes tooltips-vert {
        to {
        opacity: 1;
        transform: translate(-50%, 0);
        }
    }

    @keyframes tooltips-horz {
        to {
        opacity: 1;
        transform: translate(0, -50%);
        }
    }

    [tooltip][flow^="right"]:hover::before,
    [tooltip][flow^="right"]:hover::after {
        animation: tooltips-horz 300ms ease-out forwards;
    }

    @keyframes stretch {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);

        }
        100% {
            transform: scale(1);
        }
    }
</style>