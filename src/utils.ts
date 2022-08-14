import { Direction } from "./stores/controller";

const ASPECT_RATIO = 4 / 3;
const FLOAT_BUFFER = 10;

export function calcPlayfieldDimensions(clientWidth: number, clientHeight: number) {
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

//TODO: combine this with defender move logic, use the keyboard move enum instead of the 'movingRight'
// so that it is more generic. consolidate this to a function that gets:
// ownSize, playfield, moveDirection, speed and gameClock (for it to be reactive)
// only problem we have is how to switch directions for the alienGrid and also control vertical movement
// maybe we should return the delta instead of actually changing the 'left' and if the delta is 0 - change direction!
// for defender - don't bother to check the delta, just always add it to the 'left'.

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