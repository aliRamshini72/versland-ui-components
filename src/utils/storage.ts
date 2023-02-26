enum StorageKey {
    BANNERS = 'banners'
}

const initial = [
    {
        "_id": "63a3f745f546b5495b840439",
        "name": "1671690053486",
        "uri": "/uploads/banner-img/1671690053486",
        "url": "https://blog.versland.io/copy-trading/",
        "status": true,
        "createdAt": "2022-12-22T06:20:53.537Z",
        "updatedAt": "2022-12-22T06:20:53.537Z",
        "__v": 0
    },
    {
        "_id": "63b3bcc6d6a3b269cfe1799f",
        "name": "1672723654102",
        "uri": "/uploads/banner-img/1672723654102",
        "url": "https://versland.io/login",
        "status": true,
        "createdAt": "2023-01-03T05:27:34.263Z",
        "updatedAt": "2023-01-03T05:27:34.263Z",
        "__v": 0
    },
    {
        "_id": "63b3bcddd6a3b269cfe179e2",
        "name": "1672723677884",
        "uri": "/uploads/banner-img/1672723677884",
        "url": "https://versland.io/login",
        "status": true,
        "createdAt": "2023-01-03T05:27:57.917Z",
        "updatedAt": "2023-01-03T05:27:57.917Z",
        "__v": 0
    }
]
export default class Storage {
    public static getBanner(): any[] {
        const res = localStorage.getItem(StorageKey.BANNERS);
        if (res) {
            return JSON.parse(res)
        } else return initial
    }

    public static setBanner(banners: any[]): void {
        localStorage.setItem(StorageKey.BANNERS, JSON.stringify(banners))
    }
}