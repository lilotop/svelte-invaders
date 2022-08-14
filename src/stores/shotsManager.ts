import { writable } from "svelte/store";
import gameClock from "./gameClock";

export enum ShotType {
    Defender, // going up, hurting aliens and ship
    Alien, // going down, hurting player and shields
    Ship // staying in same place but takes entire vertical space at once, hurts player and shields, ship is stationary while firing
}

export type Shot = {
    x: number,
    y: number,
    type: ShotType,
};

let shots = writable<Array<Shot>>([]);

gameClock.subscribe(clock => {
    // TODO: update existing shots locations
});

function add(shot: Shot) {
    shots.update(currentValue => [...currentValue, shot]);
}

function clear() {
    shots.set([]);
}

export default {subscribe: shots.subscribe, add, clear}