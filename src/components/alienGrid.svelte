<script lang="ts">
	import Alien, { AlienType } from './alien.svelte';
	import gameClock from '../stores/gameClock';
	import { calcMovementDelta } from '../utils';
	import { Direction } from '../stores/controller';
	export let playfield: { width: number; height: number };
	const COLS = 7;
	const ROWS = 5;
	const GRID_WIDTH_FACTOR = 0.5;
	let aliens: { [rowCol: number]: () => boolean } = {};
	let left: number, alienSize: number, gridWidth: number, gridHeight: number;
	let direction = Direction.Left;
	let speed = 10;

	$: {
		alienSize = (playfield.width / COLS) * GRID_WIDTH_FACTOR;
		gridWidth = alienSize * COLS;
		gridHeight = alienSize * ROWS;
		left = playfield.width / 2 - (alienSize * COLS) / 2;
		console.log('size: ' + alienSize);
	}
	$: {
		$gameClock;
		let delta = calcMovementDelta(direction, playfield.width, gridWidth, left, speed);
		if (delta) {
			// delta is not zero
			left += delta;
		} else {
			direction = Direction.flip(direction);
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
	function registerApi(row: number, col: number, getHitResult: () => boolean) {
		let rowCol = row * 10 + col;
		aliens[rowCol] = getHitResult;
	}
</script>

<div
	class="flex flex-col absolute"
	style:width={`${gridWidth}px`}
	style:height={`${gridHeight}px`}
	style:left={`${left}px`}
>
	{#each Array(ROWS) as _, rowIndex}
		{@const type = getRowType(rowIndex)}
		<span class="flex flex-row grow">
			{#each Array(COLS) as _, colIndex}
				<Alien col={colIndex} row={rowIndex} {type} {registerApi} />
			{/each}
		</span>
	{/each}
</div>
<div class="absolute bottom-5">{`pfw: ${playfield.width} gw: ${gridWidth} pos: ${left}`}</div>

<style>
	div {
		transition: left 100ms linear;
	}
</style>
