import { readable } from 'svelte/store';
import gameState, { GameState } from './gameState';

let gameInProgress = false;

gameState.subscribe((state) => {
    gameInProgress = state === GameState.Running;
});

function createClock(tickFreqMillisec: number) {


    return readable(Date.now(), function start(set) {
        const interval = setInterval(() => {
            if (gameInProgress) {
                set(Date.now());
            }
        }, tickFreqMillisec);

        return function stop() {
            clearInterval(interval);
        };
    });
}

export let gameClock = createClock(100);
export let flipAnimationClock = createClock(1000);
export let shotsClock = createClock(400);
