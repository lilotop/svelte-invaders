<script lang="ts">
	import { page } from '$app/stores';
    const links = [
        { name: 'Home', url: '/'},
        { name: 'About', url: '/about'},
    ]
</script>

<nav class="flex justify-between w-full grow-0 bg-slate-700 text-white text-lg h-8 z-10">
    <div class="ml-5">👾 Svelte Invaders - by Lilo Elia</div>
    <div>
    {#each links as link }
        <a class="mx-4" href={link.url} class:font-bold={'/'+ $page.routeId === link.url}>{link.name}</a>
    {/each}
</div>
</nav>

<style>
</style>
