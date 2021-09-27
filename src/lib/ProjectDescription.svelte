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
    div {
        font-size: 1.25rem;
        color: var(--color-text);
    }
</style>