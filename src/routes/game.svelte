<script lang="ts">
	import AlienGrid from '../components/alienGrid.svelte';
	let clientHeight: number | null | undefined;
	let clientWidth: number | null | undefined;

</script>
<div class="grow bg-black text-yellow-200" bind:clientHeight bind:clientWidth>

	<span class="absolute right-0 top-0 opacity-30">{clientWidth}x{clientHeight}</span>
	<AlienGrid />

</div>

<style>

</style>