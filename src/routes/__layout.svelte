<script lang="ts">
	import Nav from '../components/nav.svelte';
	let innerHeight: number | null | undefined;
	let innerWidth: number | null | undefined;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="mx-auto p-5">
	<Nav />
    <span class="absolute right-0 top-0">{innerWidth}x{innerHeight}</span>
	{#if (innerHeight || 0) < 480 || (innerWidth || 0) < 640 }
		<h2>Supported on desktop only</h2>
		<h2>This game requires a keyboard and a minimum resolution of 640x480</h2>
	{:else}
		<slot />
	{/if}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>