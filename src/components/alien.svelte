<script lang="ts" context="module">
	export enum AlienType {
		PTS10 = 10,
		PTS20 = 20,
		PTS30 = 30
	}
</script>

<script lang="ts">
import gameClock from "../stores/gameClock";


	export let col: number;
	export let row: number;
	export let type: AlienType;
	export let registerApi;

	function getHitResult() {
		//TODO: animate explosion and remove image
		return true;
	}
	registerApi(row, col, getHitResult);

    $: animationState = ~~($gameClock / 1000 % 2) ? 'a' : 'b'; // change anumation state each second
</script>

<span class="flex flex-col items-center justify-center grow">
    <img src={`img/alien-${type}${animationState}.png`} alt="Alien">    
</span>

<style>
    img {
        width: 80%;
        height: 80%;
    }

</style>
