<script lang="ts">
	import Nav from '../components/nav.svelte';
	import Unsupported from '../components/unsupported.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	let innerHeight: number | null | undefined;
	let innerWidth: number | null | undefined;
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<div class="w-full h-screen flex flex-col bg-blue-900">
	<Nav />

	{#key $page.routeId}
		<div transition:fade={{ duration: 500 }} class="absolute h-full w-full pt-8 flex">
			{#if (innerHeight || 1000) < 480 || (innerWidth || 1000) < 640}
				<Unsupported currentWidth={innerWidth} currentHeight={innerHeight} />
			{:else}
				<slot />
			{/if}
		</div>
	{/key}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
