<script lang="ts">
	import Alien, { AlienType } from './alien.svelte';
	const COLS = 7;
	const ROWS = 5;
	let aliens: Alien[][] = new Array(COLS);
	aliens.fill(new Array(ROWS));
</script>

<div class="flex flex-row">
	{#each aliens as alienCol, colIndex}
		<span class="flex flex-col">
			{#each alienCol as alienRow, rowIndex}
				<Alien col={colIndex} row={rowIndex} type={AlienType.PTS10} />
			{/each}
            </span>
	{/each}
</div>

<style>
</style>
