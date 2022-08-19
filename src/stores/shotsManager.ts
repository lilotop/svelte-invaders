import { writable } from "svelte/store";
import { gameClock } from "./clocks";


const defenderShotSpeed = 50;
const alienShotSpeed = 10;

let nextShotId = 0;

export enum ShotType {
    Defender, // going up, hurting aliens and ship
    Alien, // going down, hurting player and shields
    Ship // staying in same place but takes entire vertical space at once, hurts player and shields, ship is stationary while firing
}

export type Shot = {
    x: number,
    y: number,
    limit: number,
    type: ShotType,
    id?: number
};

let shots = writable<Array<Shot>>([]);

gameClock.subscribe(clock => {
    // update existing shots locations each time the game clock ticks
    shots.update(currentValue => {
        return currentValue.flatMap(shot => {
            switch (shot.type) {
                case ShotType.Alien:
                    return (shot.y > shot.limit) ?  {...shot, y: shot.y + alienShotSpeed} : [];
                    case ShotType.Defender:
                        return (shot.y < shot.limit) ? {...shot, y: shot.y + defenderShotSpeed}: [];
                default:
                    return shot; // ship shots do not move vertically
            }
        })
    })
});

function add(shot: Shot) {
    shots.update(currentValue => [...currentValue, {...shot, id: nextShotId++}]);
}

function remove(id: number) {
    shots.update(currentValue => currentValue.filter(shot => shot.id !== id));
}

function clear() {
    shots.set([]);
}

export default {subscribe: shots.subscribe, add, clear}