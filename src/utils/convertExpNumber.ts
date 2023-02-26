// export default function convertExpNumber(i: number) {
//     var str = '';
//     do {
//         let a = i % 10;
//         i = Math.trunc(i / 10);
//         str = a + str;
//     } while (i > 0)
//     return str;
// }
export default function convertExpNumber(i: number , decimal : number) {
    return Number(i).toFixed(8)
}
