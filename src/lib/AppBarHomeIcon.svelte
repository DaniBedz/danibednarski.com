<script>
    import HomeIcon from '/static/home.svg';
    import '/src/tooltip.css';

    export let href;
    export let tooltip;
</script>

    <a { href } sveltekit:prefetch draggable="false">
        <button { tooltip } aria-label={ tooltip } flow="right">
            <img src={ HomeIcon } alt='home' onmousedown='return false'>
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

    img:hover {
        transform:scale(1.1);
    }

    img {
        max-height: 40px;
        max-width: 40px;
        min-height: 30px;
        min-width: 30px;
        height: calc(1rem + 3.5vw);
        width: calc(1rem + 3.5vw);
    }
</style>