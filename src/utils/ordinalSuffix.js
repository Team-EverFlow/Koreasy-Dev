/**
 * @param {number} number
 */
export function ordinalSuffix(number) {
    const j = number % 10;
    const k = number % 100;
    if (j === 1 && k !== 11) {
        return number + 'st';
    } else if (j === 2 && k !== 12) {
        return number + 'nd';
    } else if (j === 3 && k !== 13) {
        return number + 'rd';
    }
    return number + 'th';
}
