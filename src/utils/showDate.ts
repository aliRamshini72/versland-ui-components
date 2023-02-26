export default function showDate(date: string | Date, options: any) {
    try {
        const res = new Intl.DateTimeFormat('fa-IR', options).format(new Date(date))
        if (res.includes(',')) return res.split(",")[1].split(" ")[1] + " " + res.split(",")[0] + " " + res.split(",")[1].split(" ")[0]
        return res.split("،")[1].split(" ")[1] + " " + res.split("،")[0] + " " + res.split("،")[1].split(" ")[0]
    } catch (err: any) {
        return ''
    }
}