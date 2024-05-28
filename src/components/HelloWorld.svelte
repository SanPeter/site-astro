<script lang="ts">
    import dotenv from 'dotenv';

    dotenv.config();

    let message: string = process.env.MESSAGE || '';
</script>

<style>
    h1{
        --at-apply: text-purple-50
    }
</style>

<h1>Hello {message}!</h1>