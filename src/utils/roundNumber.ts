import countDecimals from "./countDecimals";

export default function roundSize(amount: number, minSize?: number) : number {
    if (!amount) {
        return 0
    }
    if (minSize) {
        const precision = countDecimals(minSize)
        const factor = Math.pow(10, precision);
        const tempNumber = amount * factor;
        const roundedTempNumber = Math.floor(tempNumber);
        return roundedTempNumber / factor;
    }
    return 0


}
