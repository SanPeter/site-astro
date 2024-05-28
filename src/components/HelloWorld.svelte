<script>
    import dotenv from 'dotenv';

    dotenv.config();

    let message = process.env.MESSAGE;
</script>

<h1>Hello {message}!</h1>