<script lang="ts">
	import { gameClock } from '../stores/clocks';
	import { calcMovementDelta } from '../utils';
	import { fire, move } from '../stores/controller';
	import shotsManager, { ShotType } from '../stores/shotsManager';
	export let playfield: { width: number; height: number };
	let left: number, defenderWidth: number, defenderHeight: number;

	function triggerControl() {
		if ($fire) {
			shotsManager.add({
				type: ShotType.Defender,
				y: playfield.height,
				x: left + defenderWidth / 2
			});
		}
	}

	$: {
		defenderWidth = playfield.width / 30;
		defenderHeight = defenderWidth * 0.6;
		left = playfield.width / 2 - defenderWidth / 2;
	}
	$: {
		$gameClock;
		left += calcMovementDelta($move, playfield.width, defenderWidth, left, 10);
	}
	$: {
		$fire; // this responds to the fire store (trigger)
		triggerControl();
	}
</script>

<img
	src="img/defender.png"
	alt="Defender"
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
