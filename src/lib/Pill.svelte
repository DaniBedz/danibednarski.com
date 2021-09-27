<script>
    export let text;
</script>

<pill>
    { text }
</pill>

<style>
    pill {
        width: min-content;
        color: var(--color-primary-dark);
        background: var(--color-primary-light);
        margin: 0.3rem;
        padding: 0.3rem 1rem;
        border: 0.25rem solid var(--color-text);
        border-radius: 50px;
        font-size: 1.25rem;
        white-space: nowrap;
    }

    pill:hover {
        cursor: default;
    }
</style>