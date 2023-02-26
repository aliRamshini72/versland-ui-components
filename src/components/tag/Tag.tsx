import React from "react";
import {CloseOutlined} from '@ant-design/icons'

const getStyle = (color: string) => {
    if (color === 'red') {
        return {
            color: '#cf1322',
            background: "#fff1f0",
            borderColor: "#ffa39e",
            borderWidth: 'thin',
            borderStyle: 'solid'
        }
    } else if (color === 'green') {
        return {
            color: 'green',
            background: '#f6ffed',
            borderColor: '#b7eb8f',
            borderWidth: 'thin',
            borderStyle: 'solid'
        }
    } else {
        return {
            color: '#1d39c4',
            background: '#f0f5ff',
            borderColor: '#adc6ff',
            borderWidth: 'thin',
            borderStyle: 'solid'
        }
    }
}

export default React.memo(function Tag(props: any) {
    const {icon, children, color, className, onClose} = props;

    return (
        <div style={getStyle(color)}
             className={'rounded overflow-hidden py-1 px-2 f-small inline-block w-fit ' + (className ? className : '')}>
            <div className={'flex ltr flex-row gap-x-2 flex-wrap items-center f-small'}>
                {icon}
                {children}
                {onClose && <CloseOutlined onClick={onClose}/>}
            </div>
        </div>
    )
})