<script lang="ts">
	import shotsManager, { ShotType } from '../stores/shotsManager';
	export let playfield: { width: number; height: number };
</script>

{#each $shotsManager as shot }
	<div>{shot.x}:{shot.y}</div>
{/each}


<style>
</style>
