<script lang="ts">
    import dotenv from 'dotenv';

    dotenv.config();

    let message: string = process.env.MESSAGE || '';
</script>

<style>
    h1{
        --at-apply: text-blue-400
    }
</style>

<h1>Hello {message}!</h1>