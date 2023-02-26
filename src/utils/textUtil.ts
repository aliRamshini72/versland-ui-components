



export const copyText = (text: string, cb?: () => void) => {
    if (navigator.clipboard && navigator.permissions) {
        navigator.clipboard.writeText(text).then(cb)
    } else if (document.queryCommandSupported('copy')) {
        const ele = document.createElement('textarea')
        ele.value = text
        document.body.appendChild(ele)
        ele.select()
        document.execCommand('copy')
        document.body.removeChild(ele)
        cb?.()
    }
}

export const pasteText= async ()=> {
   try {
       return  await navigator.clipboard.readText();
   }catch (e) {
       return  '';
   }


}
