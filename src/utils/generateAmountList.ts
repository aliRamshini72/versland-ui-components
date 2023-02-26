export default function generateAmountList(min: number, max: number, count: number) {
    const range = max - min;
    const t = range / count;
    let list = new Array();
    for (let i = 0; i < count + 1 ; i++) {
        list.push(min + (i * t))
    }
    return list;

}
