<script lang="ts">
	import { goto } from '$app/navigation';
	function onKeyDown(e: any) {
		//  32 = space
		if (e.keyCode === 32) {
			goto('/game');
		}
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<div class="flex flex-col items-center justify-center h-full w-full bg-blue-900 text-violet-300">
	<div class="text-9xl my-10 fixed alien">👾</div>
    <div class="text-9xl my-10 fixed stick">🕹</div>
	<div class="text-4xl my-10 text">Hit &lt;space&gt; to start the game</div>
</div>

<style>
    :root {
        --animationDuration: 6s;
    }
	.text {
		opacity: 1;
		animation: fade var(--animationDuration) infinite ease-in;
	}
    .alien {
        animation: fromLeft var(--animationDuration) infinite;
    }
    .stick {
        animation: fromRight var(--animationDuration) infinite;
    }

	@keyframes fade {
		0%,
		100% {
			opacity: 0;
		}
		20%,
		80% {
			opacity: 1;
		}
	}
	@keyframes fromLeft {
		0%, 100% {
			left: -400px;
		}
		70% {
			left: 100px;
		}
	}
	@keyframes fromRight {
		0%, 100% {
			right: -400px;
		}
		70% {
			right: 100px;
		}
	}
</style>
