<script lang="ts">
	import gameState, { GameState } from '../stores/gameState';
</script>

{#if $gameState === GameState.Paused}
	<div class="absolute flex w-full h-full">
		<div class="font-mono font-extrabold text-slate-300 text-6xl m-auto p-3 border-slate-400 border-2 bg-slate-700 bg-opacity-90">
			<div class="message">PAUSED</div>
		</div>
	</div>
{/if}

<style>
	.message {
		animation-name: breath;
		animation-iteration-count: infinite;
		animation-duration: 2000ms;
	}
	@keyframes breath {
		0%,
		100% {
			opacity: 100%;
		}
		50% {
			opacity: 0%;
		}
	}
</style>
