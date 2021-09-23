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
                // eslint-disable-next-line no-console
                console.log(error);
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
        font-size:3rem;
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 2.5rem;
    }

    input, textarea {
        border: none;
        width: 30rem;
        color: var(--color-primary-dark);
        display: flex;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 0.375rem;
    }

    textarea {
        height: 10rem;
    }

    input[type=submit] {
        width: auto;
        padding: 0.75rem 1.5rem;
        background: var(--color-primary-light);
        border: 2px solid var(--color-primary-dark);
        color: var(--color-primary-dark);
    }
    input[type=submit]:hover {
        color: var(--color-primary-light);
        border:2px solid var(--color-primary-light);
        background: var(--color-primary-dark);
    }
</style>