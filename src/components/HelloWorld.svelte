<script lang="ts">
    import dotenv from 'dotenv';

    dotenv.config();

    let message: string = process.env.MESSAGE || '';
</script>

<h1>Hello {message}!</h1>