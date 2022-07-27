<script lang="ts" context="module">
	export enum AlienType {
		PTS10 = 10,
		PTS20 = 20,
		PTS30 = 30
	}
</script>

<script lang="ts">
    export let col: number;
    export let row: number;
    export let type: AlienType;
</script>

<span class="border-red-600 border-2 p-1 m-2 flex flex-col items-center">
    <span class="text-3xl">{type}</span>
    <span class="font-mono">C{col} R{row}</span>
</span>

<style>
</style>
