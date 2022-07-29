<script lang="ts">
	import AlienGrid from './alienGrid.svelte';
	export let width: number;
	export let height: number;
</script>

<div class="border-2" style:width={`${width}px`} style:height={`${height}px`}>
	<AlienGrid playfield={{ width, height }} />
</div>

<style>
</style>
