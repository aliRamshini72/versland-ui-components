import serverError from './serverError'
import toast from './toast'


export default function showServerError(key: string) {
    if (serverError.hasOwnProperty(key.trim())) {
        // @ts-ignore
        toast.error(serverError[key.trim()])
    } else {
        toast.error("با پشتیبانی تماس بگیرید!!")
    }
}






