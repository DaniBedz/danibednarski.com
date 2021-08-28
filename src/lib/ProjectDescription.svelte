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
        font-size: 1.5rem;
        color: var(--color-text);
        margin: 1rem 2rem;
    }
    p {
        padding: 1rem;
    }
</style>