<script>
    import HomeIcon from '/static/home.svg';

    export let href;
    export let tooltip = false;
</script>

    <a { href } sveltekit:prefetch draggable="false">
        <button { tooltip } aria-label={ tooltip } flow="right">
            <img src={ HomeIcon } alt='home'>
        </button>
    </a>

<style>
    button {
        display: flex;
        margin: 1rem auto;
        padding: 0;
        border: none;
        background: transparent;
        transition:transform .25s ease;
    }

    button:hover {
        transform:scale(1.1);
    }

    img {
        height: 40px;
        width: 40px;
    }


    /* Tooltip Styles */
    [tooltip] {
        position: relative;
    }

    /* Applies to all tooltips */
    [tooltip]::before,
    [tooltip]::after {
        display: none;
        position: absolute;
        line-height: 1;
        opacity: 0;
        text-transform: none;
        user-select: none;
        pointer-events: none;
    }
    [tooltip]::before {
        content: '';
        border: 5px solid;
        z-index: 1001;
    }
    [tooltip]::after {
        content: attr(tooltip);
        min-width: 3em;
        max-width: 21em;
        padding: 1ch 1.5ch;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--color-primary-dark);
        background: var(--color-text);
        border-radius: .3ch;
        box-shadow: 0 1em 2em -.5em var(--color-primary-dark);
        overflow: hidden;
        z-index: 1;
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
        right: calc(0em - 5px);
        transform: translate(.5em, -50%);
        border-left-width: 0;
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-right-color: var(--color-text);
    }
    [tooltip][flow^="right"]::after {
        top: 50%;
        left: calc(100% + 5px);
        transform: translate(.5em, -50%);
    }

    /* Keyframes */
    @keyframes tooltips-vert {
        to {
            transform: translate(-50%, 0);
            opacity: 1;
        }
    }

    @keyframes tooltips-horz {
        to {
            transform: translate(0, -50%);
            opacity: 1;
        }
    }

    [tooltip][flow^="right"]:hover::before,
    [tooltip][flow^="right"]:hover::after {
        animation: tooltips-horz 300ms ease-out forwards;
    }
</style>