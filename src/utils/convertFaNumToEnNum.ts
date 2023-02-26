// @ts-ignore
// const p2e = (s: string) => s.replace(/[۰-۹]/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
// // @ts-ignore
// const a2e = (s: string) => s.replace(/[٠-٩]/g, (d: any[]) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
//

// export const convertFaNumToEnNum = (faNum: string) => {
//     return p2e(a2e(faNum))
// };
export const convertFaNumToEnNum = (faNum: string) => {

    let temp = "";
    for (let item of faNum) {
        switch (item) {
            case "۱" || "١": {
                temp += "1";
                break;
            }
            case "۲" || "٢": {
                temp += "2";
                break;
            }
            case "۳" || "٣": {
                temp += "3";
                break;
            }
            case "۴" || "٤": {
                temp += "4";
                break;
            }
            case "۵" || "٥": {
                temp += "5";
                break;
            }
            case "۶" || "٦": {
                temp += "6";
                break;
            }
            case "۷" || "٧": {
                temp += "7";
                break;
            }
            case "۸" || "٨": {
                temp += "8";
                break;
            }
            case "۹" || "٩": {
                temp += "9";
                break;
            }
            case "۰" || "٠": {
                temp += "0";
                break;
            }
            default: {
                temp += item;
                break;
            }
        }
    }
    return temp;
};

