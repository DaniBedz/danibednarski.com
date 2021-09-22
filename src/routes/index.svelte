<script>
    import { drag } from '$lib/drag';
</script>

<main>
    <div use:drag>
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

    </div>
        <img use:drag={'noZIndex'}  src="/coding.svg" alt="coder" draggable="false" />
</main>
<slot />

<style>
    div {
        margin-top: 40%;
        margin-left: 3rem;
        width: calc(35vw + 1.5rem);
        z-index: 2;
        -webkit-user-select: none;
        -moz-user-select: none;
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
        font-size: calc(0.7vw + 8px);
    }

    a {
        font-size: calc(1vw + 6px);
        text-decoration: underline var(--color-primary-light);
        color: white;
    }

    img {
        width: calc(10rem + 30vw);
        display: flex;
        margin: auto;
        position: fixed;
        bottom: 0;
        right: 0;
    }
</style>