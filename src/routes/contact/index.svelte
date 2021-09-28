<script>
    import { send } from 'emailjs-com';
    import { createForm } from 'felte';

    let buttonText = 'Send';

    const { form, reset } = createForm({
        onSubmit: async (values) => {
            buttonText = 'Sending';
            send('service_i47aoaq', 'template_aflqbbg', values, 'user_O8soHnleeJBxVzS3CBIrf').then(() => {
                buttonText = 'Sent';
                reset();
                setTimeout(() => {
                    buttonText = 'Send';
                }, 5000);
            }, (error) => {
                buttonText = 'Error';
                console.error(error);
            });
        },
    });
</script>

<main>
    <h1>Contact Me</h1>
    <form use:form >
        <input type="text" name="from_name" placeholder="From" required>
        <input type="email" name="email" placeholder="Email" required>
        <textarea type="text" name="message" placeholder="Message" required />
        <input type="submit" value={ buttonText } />
    </form>
</main>
<slot />

<style>
    main {
        flex-grow: 1;
    }

    h1 {
        color: var(--color-primary-text);
        font-size:2rem;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 2.5rem;
        padding: 0.5rem;
        background-color: var(--color-primary-dark);
    }

    input, textarea {
        border: 2px solid var(--color-primary-light);
        min-width: 15rem;
        width: 35vw;
        max-width: 40rem;
        color: var(--color-text);
        background-color: var(--color-primary-dark);
        display: flex;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 0.375rem;
    }

    textarea {
        height: 10rem;
    }

    input[type=submit] {
        display: grid;
        /* margin: auto; */
        width: auto;
        padding: 0.75rem 1.5rem;
        border: 2px solid var(--color-primary-dark);
        background: var(--color-primary-light);
        color: var(--color-primary-dark);
        text-align: center;
        -webkit-appearance: none;
        border-radius: 10px;
        -webkit-border-radius: 10px;
    }
    input[type=submit]:hover {
        color: var(--color-primary-light);
        border:2px solid var(--color-primary-light);
        background: var(--color-primary-dark);
    }
</style>