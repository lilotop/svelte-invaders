<script lang="ts">
	import Alien, { AlienType } from './alien.svelte';
	import gameClock from '../stores/gameClock';
	export let playfield: { width: number; height: number };
	const COLS = 7;
	const ROWS = 5;
	const GRID_WIDTH_FACTOR = 0.5;
	let aliens: Alien[][] = new Array(ROWS);
	let left: number, alienSize: number, gridWidth: number, gridHeight: number;
	let movingRight = false;
	let speed = 10;
	aliens.fill(new Array(COLS));
	
	$: {
		alienSize = playfield.width / COLS * GRID_WIDTH_FACTOR;
		gridWidth = alienSize * COLS;
		gridHeight = alienSize * ROWS;
		left = playfield.width /2 - (alienSize * COLS /2)
	}
	$: {
		$gameClock;
		if (movingRight) {
			if(left + speed >= playfield.width - gridWidth) {
				left = playfield.width - gridWidth
				movingRight = false;
			} else {
				left += speed;
			}

		}
		else {
			if(left - speed <=0) {
				left = 0;
				movingRight = true;
			} else {
				left -= speed;
			}
		}

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

<div class="flex flex-col absolute" style:width={`${gridWidth}px`} style:height={`${gridHeight}px`} style:left={`${left}px`}>
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
	div {
		transition:left 100ms linear
	}
</style>
