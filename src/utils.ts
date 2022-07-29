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