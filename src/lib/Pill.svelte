<script>
    export let text;
</script>

<pill>
    { text }
</pill>

<style>
    pill {
        width: min-content;
        background: var(--color-primary-dark);
        padding: 0.3rem 1rem;
        color: var(--color-text);
        border: 0.25rem solid var(--color-primary-light);
        border-radius: 50px;
        font-size: 1.25rem;
        white-space: nowrap;
    }

    pill:hover {
        background: var(--color-primary-light);
        color: var(--color-primary-dark);
        border: 0.25rem solid var(--color-text);
    }
</style>