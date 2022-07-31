import { readable } from 'svelte/store';

export default readable(Date.now(), function start(set) {
	const interval = setInterval(() => {
		set(Date.now());
	}, 100);

	return function stop() {
		clearInterval(interval);
	};
});
