<script lang="ts">
	import AlienGrid from '../components/alienGrid.svelte';
	let clientHeight: number | null | undefined;
	let clientWidth: number | null | undefined;

</script>
<div class="border-blue-600 border-2 grow" bind:clientHeight bind:clientWidth>

	<span class="absolute right-0 top-0">{clientWidth}x{clientHeight}</span>
	<AlienGrid />

</div>
