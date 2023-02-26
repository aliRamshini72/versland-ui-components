export default function countDecimals(value: any) {
    if (value.toString().includes('1e')) {
        return Math.abs(parseInt(value.toString().split("1e")[1]));
    }
    if (!value.toString().includes(".")) return 0;
    return value.toString().split(".")[1].length || 0;
}
