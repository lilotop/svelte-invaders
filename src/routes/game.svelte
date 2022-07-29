<script lang="ts">
	import Playfield from '../components/playfield.svelte';
	import { calcPlayfieldDimensions } from '../utils';

	let clientHeight: number;
	let clientWidth: number;

	let playfieldWidth: number, playfieldHeight: number, clientRatio: number, playfieldRatio: number;

	$: [playfieldWidth, playfieldHeight] = calcPlayfieldDimensions(clientWidth, clientHeight);

	// for debug only
	$: {
		clientRatio = clientWidth / clientHeight;
		playfieldRatio = playfieldWidth / playfieldHeight;
	}
</script>

<div class="grow flex bg-black text-yellow-200 items-center justify-center" bind:clientHeight bind:clientWidth>
	<div class="absolute right-2 top-2 opacity-40 font-mono text-sm">
		<div>{clientWidth} x {clientHeight}</div>
		<div>{playfieldWidth} x {playfieldHeight}</div>
		<div>C.R {clientRatio.toFixed(3)}</div>
		<div>PFR {playfieldRatio.toFixed(3)}</div>
	</div>
	<Playfield width={playfieldWidth} height={playfieldHeight} />
</div>

<style>
</style>
