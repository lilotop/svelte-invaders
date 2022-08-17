<script lang="ts">
	import AlienGrid from './alienGrid.svelte';
import Defender from './defender.svelte';
import Shots from './shots.svelte';
	export let width: number;
	export let height: number;
	$: playfield = {width, height};
</script>

<div class="border-2 relative" style:width={`${width}px`} style:height={`${height}px`}>
	<AlienGrid {playfield} />
	<Defender {playfield} />
	<Shots {playfield} />
</div>

<style>
</style>
