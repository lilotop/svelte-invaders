import { writable } from 'svelte/store';
export enum Direction { Left = '◀', Right = '▶', None = '⏹' };
export namespace Direction {
    export function flip(direction: Direction): Direction {
        switch (direction) {
            case Direction.Left:
                return Direction.Right;
            case Direction.Right:
                return Direction.Left;
            default:
                return Direction.None;
        }
    }
}
let space = writable(false);
let arrows = writable(Direction.None);
let pause = writable(false);
let fourtyTwo = writable(0); // because every software must have an easter egg

export function keyboardHandler(e: any) {
    let isPressed = (e.type === 'keydown');
    switch (e.code) {
        case 'Space':
            space.set(isPressed);
            break;
        case 'ArrowLeft':
            arrows.set(isPressed ? Direction.Left : Direction.None);
            break;
        case 'ArrowRight':
            arrows.set(isPressed ? Direction.Right : Direction.None);
            break;
        case 'KeyP':
            if (isPressed) {
                pause.update(currentValue => !currentValue);
            }
            break;

        // easter egg
        case 'Numpad4':
        case 'Digit4':
            fourtyTwo.set(isPressed ? 4 : 0);
            break;
        case 'Numpad2':
        case 'Digit2':
            fourtyTwo.update(currentValue => (isPressed && (currentValue === 4 || currentValue === 42)) ? 42 : 0);
            break;
        // end easter egg
    }
}

export let fire = { subscribe: space.subscribe };
export let move = { subscribe: arrows.subscribe };
export let paused = { subscribe: pause.subscribe };
export let answer = { subscribe: fourtyTwo.subscribe };
