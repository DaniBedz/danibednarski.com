<script>
    export let descriptionData;
</script>

<div>
    {#each descriptionData as paragraph}
        <p>
            { paragraph }
        </p>
    {/each}
</div>

<style>
    div {
        font-size: calc(1vw + 0.5rem);
        color: var(--color-text);
    }
</style>