<script lang="ts">
	import gameClock from '../stores/gameClock';
	import { calcMovementDelta } from '../utils';
    import {Direction, fire, move } from '../stores/controller';
	export let playfield: { width: number; height: number };
	let left: number, defenderWidth: number, defenderHeight: number;

    $: {
		defenderWidth = playfield.width / 30;
		defenderHeight = defenderWidth * 0.6;
		left = playfield.width / 2 - defenderWidth / 2;
	}
    $: {
        $gameClock;
		left += calcMovementDelta($move, playfield.width, defenderWidth, left, 10);

    }
</script>

<img
    src="img/defender.png" alt="Defender"
	class="absolute bottom-0"
	style:width={`${defenderWidth}px`}
	style:height={`${defenderHeight}px`}
	style:left={`${left}px`}
/>

<style>
	img {
		transition: left 100ms linear;
	}
</style>
