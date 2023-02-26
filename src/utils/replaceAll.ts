export default function replaceAll(value: any, search: string | RegExp , replace: string) {
    if (value) {
        // @ts-ignore
        if (!String.prototype.replaceAll) {
            return String(value).split(search).join(replace);
        } else {
            // @ts-ignore
            return String(value).replaceAll(search, replace)
        }
    }
    return ''
}
