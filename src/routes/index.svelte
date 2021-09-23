<script>
    import { drag } from '$lib/drag';
</script>

<main id="main" use:drag>
    <article>
        <span class='code return'>const name = '</span><span>Dani Bednarski</span><span class='code'>';</span><br>

        <span class='code return'>const about = () => &#123;</span>
        <span class='code indent'><br>return '</span><span class='indent'>My name is Dani and I am a web developer based in Melbourne, Australia.<span class='code'>';</span></span><br>
        <span class='code return'>&#125;;</span>
        <br>

        <span class='code return'>const motivation = () => &#123;</span>
        <span class='code indent'><br>return '</span><span class='indent'>What motivates me is making things that people love to use, and want to share with others.<span class='code'>';</span></span><br>
        <span class='code return'>&#125;;</span>
        <br>

        <span class='code return'>const usePortfolio = () => &#123;</span>
        <span class='code indent'><br>return '</span><span class='indent'>Please explore the site, check out some of the projects that I have worked on, and <a href="/contact">reach out</a> if you like what you see.<span class='code'>';</span></span><br>
        <span class='code return'>&#125;;</span>
        <br>
    </article>

    <wrapper draggable="false">
        <img on:drag|preventDefault src="/coding.svg" alt="coder" draggable="false" />
    </wrapper>
    </main>
<slot />

<style>
    main {
        display: grid;
        grid-template-rows: 50% 50%;
        padding: 0;
    }
    article {
        margin: calc(15vh) 3rem 3rem;
        grid-row: 1 / 1;
    }

    wrapper {
        display: grid;
        grid-row: 2 / 2;
        justify-items: end;
        align-items: end;
    }
    img {
        width: 70vw;
        max-width: 40rem;
        -webkit-user-drag: none;
    }
    .code {
        color: var(--color-primary-light);
    }
    .indent {
        position: relative;
        left: 2rem;
    }

    .return {
        line-height: 3em;
    }
    span {
        color: var(--color-text);
    }

    a {
        text-decoration: underline var(--color-primary-light) 3px;
        color: white;
    }
</style>