<script lang="ts">
	import Nav from '../components/nav.svelte';
	import Unsupported from '../components/unsupported.svelte';
	let innerHeight: number | null | undefined;
	let innerWidth: number | null | undefined;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="w-full h-screen flex flex-col">
	<Nav />

	{#if (innerHeight || 0) < 480 || (innerWidth || 0) < 640}
		<Unsupported currentWidth={innerWidth} currentHeight={innerHeight} />
	{:else}
		<slot />
	{/if}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
