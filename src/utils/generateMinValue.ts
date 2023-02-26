export default function generateMinValue(decimal: number) {
    let str: string = '0.'
    for (let i = 0; i < decimal - 1; i++) {
        str += '0'
    }
    str += '1'
    return parseFloat(str)
}