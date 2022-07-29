<script lang="ts">
	import { page } from '$app/stores';
	export let currentWidth: number | null | undefined;
	export let currentHeight: number | null | undefined;
</script>

<div class="flex flex-col items-center justify-center h-full w-full text-lg space-y-2 bg-slate-400">
	<div class="text-5xl icons">💻📵</div>
	<div class="font-bold">Supported on desktop only</div>

	<div>This game requires a keyboard</div>
	<div>and a minimum resolution of 640x480</div>
	<div class="text-sm pt-5">
		Open <span class="font-mono font-bold text-blue-800">{$page.url}</span> in your desktop browser
	</div>
	<div class="text-gray-700 italic text-sm">
		(Current resolution: {currentWidth}x{currentHeight})
	</div>
</div>

<style>

    .icons {
        animation: jump 2s infinite;
    }

	@keyframes jump {
		0%, 30%, 70%,
		100% {
            transform: scale(1);
			
		}
		50% {
            transform: scale(0.9);
		}
	}
</style>
