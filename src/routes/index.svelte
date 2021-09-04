<main>
    <div>
        <h1>Ahoy!</h1>
        <p>My name is Dani and I'm a web developer based in Melbourne, Australia.</p>
        <p>What motivates me is making things that people love to use, and want to share with others.</p>
        <p>Please explore the site, check out some of the projects that I have worked on, and <a href="/contact">reach out</a> if you like what you see.</p>
    </div>
        <img src="/coding.svg" alt="coder"/>
</main>
<slot />

<style>
    div {
        margin-top: 40%;
        margin-left: 3rem;
        width: calc(35vw + 1.5rem);
        z-index: 1;
    }
    h1 {
        color: var(--color-primary-light);
        font-size: 3rem;
    }
    p {
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: var(--color-text);
        font-size: calc(1vw + 0.5rem);
    }

    a {
        color: var(--color-primary-light);
        font-size: calc(1vw + 0.5rem);
    }

    img {
        width: calc(25rem + 20vw);
        display: flex;
        margin: auto;
        position: fixed;
        bottom: 0;
        right: 0;
    }
</style>