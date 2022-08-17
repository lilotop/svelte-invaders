import { readable } from 'svelte/store';

function createClock(tickFreqMillisec: number) {


    return readable(Date.now(), function start(set) {
        const interval = setInterval(() => {
            set(Date.now());
        }, tickFreqMillisec);

        return function stop() {
            clearInterval(interval);
        };
    });
}

export let gameClock = createClock(100);
export let flipAnimationClock = createClock(1000);
export let shotsClock = createClock(400);
