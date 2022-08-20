<script lang="ts">
	import Playfield from '../components/playfield.svelte';
	import { calcPlayfieldDimensions } from '../utils';
	import { answer, keyboardHandler } from '../stores/controller';
import gameState, { GameState } from '../stores/gameState';

	let clientHeight: number;
	let clientWidth: number;

	let playfieldWidth: number, playfieldHeight: number, clientRatio: number, playfieldRatio: number;

	//TODO: should be done elsewhere after proper initialization (e.g. after game over)
	gameState.set(GameState.Running);

	$: [playfieldWidth, playfieldHeight] = calcPlayfieldDimensions(clientWidth, clientHeight);

	// for debug only
	$: {
		clientRatio = clientWidth / clientHeight;
		playfieldRatio = playfieldWidth / playfieldHeight;
	}
</script>

<svelte:window
	on:keydown={keyboardHandler}
	on:keyup={keyboardHandler}
/>

<div
	class="grow flex bg-black text-yellow-200 items-center justify-center"
	bind:clientHeight
	bind:clientWidth
>
	<div class="text-lg absolute left-5 top-5">
		{GameState[$gameState]}
	</div>
	<div class="text-xl text-blue-700 font-extrabold absolute left-5 top-14">
		{$answer === 42 ? '🐬 You have found the answer to life, the universe and everything! 🍺' : ''}
	</div>
	<div class="absolute right-2 top-2 opacity-40 font-mono text-sm">
		<div>{clientWidth} x {clientHeight}</div>
		<div>{playfieldWidth} x {playfieldHeight}</div>
		<div>C.R {clientRatio.toFixed(3)}</div>
		<div>PFR {playfieldRatio.toFixed(3)}</div>
	</div>
	{#if clientWidth}
		<Playfield width={playfieldWidth} height={playfieldHeight} />
	{/if}
</div>

<style>
</style>
