<div id="technologies-used">
    <h2>Technologies Used</h2>
    <div id="pill-container">
        <slot/>
    </div>
</div>


<style>
    #technologies-used {
        margin: 0 2rem 1rem;
        padding: 0.5rem 1rem 1rem;
    }

    h2 {
        color: var(--color-primary-light);
        font-size: calc(1vw + 1rem);
        text-align: left;
    }

    #pill-container {
        display: flex;
        flex-wrap: wrap;
        padding: 0.5rem 1rem;
        justify-content: center;
    }
</style>