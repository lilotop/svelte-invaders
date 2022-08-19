<script lang="ts">
	import shotsManager, { ShotType } from '../stores/shotsManager';
	export let playfield: { width: number; height: number };


</script>
<span class="absolute bottom-16 ">{$shotsManager.length}</span>
{#each $shotsManager as shot(shot.id) }
	<div class="absolute flex flex-row" style:bottom={`${shot.y}px`}
	style:left={`${shot.x}px`}></div>
{/each}


<style>
	div {
		width: 5px;
		height: 13px;
		background-color: blueviolet;
	}
</style>
