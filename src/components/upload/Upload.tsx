import React, {ChangeEvent, useRef, useState} from "react";
import classNames from "classnames";

export interface UploadProps {
    keyFormData: string,
    className?: string,
    preview?: boolean,
    children: JSX.Element,
    accept?: string

    onChange(data: FormData): void
}


export default function Upload(props: UploadProps) {
    const [img, setImg] = useState<any>()
    const ref: any = useRef(null)
    const {keyFormData, onChange, preview, children, className, accept} = props
    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            let reader = new FileReader();
            let file = e.target.files[0];
            reader.onloadend = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
            const data = new FormData();
            data.append(keyFormData, e.target.files[0]);
            if (onChange) onChange(data)
        }
    }
    return (
        <div className={classNames(className)}>
            <input ref={ref} accept={accept ? accept : 'image/*'} className={'upload-input hidden'} type={'file'}
                   onChange={onChangeFile}/>
            {React.cloneElement(children, {
                ...children.props,
                onClick: () => {
                    if (ref && ref.current && ref.current.click) {
                        ref.current.click()
                    }
                }
            })}
            {preview && img && <div className={'w-100 my-4'}>
                <img src={img} alt={'versland'}
                     className={'w-16 h-16 rounded overflow-hidden object-center object-cover'}/>
            </div>}
        </div>
    )
}