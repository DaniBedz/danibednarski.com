<script>
    export let text;
</script>

<div class="pill">
    { text }
</div>

<style>
    .pill {
        width: min-content;
        color: var(--color-primary-dark);
        background: var(--color-primary-light);
        font-size: calc(1vw + 0.5rem);
        margin: 0.3rem;
        padding: 0.3rem 1rem;
        border: 0.25rem solid var(--color-text);
        border-radius: 50px;
        white-space: nowrap;
    }

    .pill:hover {
        cursor: default;
    }
</style>