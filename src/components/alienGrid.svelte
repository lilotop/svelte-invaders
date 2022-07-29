<script lang="ts">
	import Alien, { AlienType } from './alien.svelte';
	export let playfield: { width: number; height: number };
	const COLS = 7;
	const ROWS = 5;
	const GRID_WIDTH_FACTOR = 0.5;
	let aliens: Alien[][] = new Array(ROWS);
	let left: number, alienSize: number;
	aliens.fill(new Array(COLS));
	
	$: {
		alienSize = playfield.width / COLS * GRID_WIDTH_FACTOR;
		left = playfield.width /2 - (alienSize * COLS /2)
	}

	function getRowType(index: number) {
		switch (index) {
			case 0:
				return AlienType.PTS30;
			case 1:
			case 2:
				return AlienType.PTS20;

			default:
				return AlienType.PTS10;
		}
	}
</script>

<div class="flex flex-col border-2 absolute" style:width={`${alienSize * COLS}px`} style:height={`${alienSize * ROWS}px`} style:left={`${left}px`}>
	{#each aliens as row, rowIndex}
		{@const type = getRowType(rowIndex)}
		<span class="flex flex-row grow">
			{#each row as col, colIndex}
				<Alien col={colIndex} row={rowIndex} {type}/>
			{/each}
		</span>
	{/each}
</div>

<style>
</style>
