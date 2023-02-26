export default function formatPriceValue(value: string) {
    if (value.toString().includes('.')) {
        const list = value?.toString().split(".")
        const beforDot = list[0].replace(new RegExp(/\B(?=(\d{3})+(?!\d))/g), ',')
        const afterDot = list[1];
        if (afterDot) {
            return beforDot + '.' + afterDot
        } else {
            return beforDot + '.'
        }
    } else {
        return value?.toString().replace(new RegExp(/\B(?=(\d{3})+(?!\d))/g), ',')
    }

}
