import { writable } from 'svelte/store';
import { paused } from './controller';

export enum GameState {
    Init,
    Running,
    GameOver,
    Paused,
}

const gameState = writable(GameState.Init);

paused.subscribe(()=> {
    gameState.update((currentValue)=> {
        if (currentValue === GameState.Running) {
            return GameState.Paused;
        }
        if (currentValue === GameState.Paused) {
            return GameState.Running;
        }
        return currentValue;
    })
});

export default gameState;