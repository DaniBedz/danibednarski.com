<script>
    export let descriptionData;
</script>

<div id="description">
    {#each descriptionData as paragraph}
        <p>
            { paragraph }
        </p>
    {/each}
</div>

<style>
    #description {
        font-size: calc(1vw + 0.5rem);
        color: var(--color-text);
        margin: 0.5rem 2rem;
    }
    p {
        padding: 1rem;
    }
</style>