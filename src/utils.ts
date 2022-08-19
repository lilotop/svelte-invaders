import { Direction } from "./stores/controller";

const ASPECT_RATIO = 4 / 3;
const FLOAT_BUFFER = 10;

export function calcPlayfieldDimensions(clientWidth: number, clientHeight: number) {
    if(!clientWidth || !clientHeight) {
        return [0,0];
    }
    let playfieldWidth, playfieldHeight;
    let clientRatio = clientWidth / clientHeight;
    if (clientRatio > ASPECT_RATIO) {
        playfieldHeight = clientHeight;
        playfieldWidth = Math.floor(clientHeight * ASPECT_RATIO);
    } else if (clientRatio < ASPECT_RATIO) {
        playfieldWidth = clientWidth;
        playfieldHeight = Math.floor(clientWidth / ASPECT_RATIO);
    } else {
        playfieldWidth = clientWidth;
        playfieldHeight = clientHeight;
    }
    return [playfieldWidth - FLOAT_BUFFER, playfieldHeight - FLOAT_BUFFER];
}

export function calcMovementDelta(desiredDirection: Direction, playfieldWidth: number, ownWidth: number, currentLeft: number, speed: number) {
    switch (desiredDirection) {
        case Direction.Right:
            if (currentLeft + speed >= playfieldWidth - ownWidth) {
                return 0; // no movement possible
            } else {
                return speed;
            }
        case Direction.Left:
            if (currentLeft - speed <= 0) {
                return 0; // no movement possible
            } else {
                return -speed;
            }
        default:
            return 0;
    }

}