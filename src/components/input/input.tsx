import {useCallback, useState} from "react";
import EyeIcon from '../icons/eyeIcon'
import EyeSlashIcon from '../icons/eyeSlashIcon'
import {convertFaNumToEnNum} from "../../utils/convertFaNumToEnNum";
import React from "react";

function Input(props: any) {

    const [visible, setVisible] = useState(false);
    const [inputType] = useState(props.type);
    const {placeHolder, icon, onChange, value, unit, autoComplete, align} = props;
    const handleChange = (e: any) => {
        onChange(convertFaNumToEnNum(e.target.value))
    }


    const changeVisibility = useCallback((visible: boolean) => {
        setVisible(visible);
    }, [])
    return (
        <div className={'rounded border border-primary-light px-4 mb-6'}>
            <div className={'h-10 items-center gap-x-2 flex flex-row flex-wrap'}>
                {icon && <div className={'flex-none'}>{icon}</div>}
                <div className={'flex-auto w-min'}>
                    <input
                        className={'border-0 outline-0 ltr focus:outline-0 focus:border-0 w-full text-black ' + align}
                        value={value}
                        type={inputType
                            ? inputType !== 'password'
                                ? inputType
                                : !visible
                                    ? 'password'
                                    : 'text'

                            : "text"
                        }
                        placeholder={placeHolder}
                        autoComplete={autoComplete ? autoComplete : 'on'}
                        onChange={handleChange}/>
                </div>
                {
                    unit &&
                    <div className={'flex-none'}><span className={'text-primary-light'}>{unit}</span></div>
                }

                {
                    inputType === 'password' ?
                        visible
                            ? <div className={'flex-none'}><EyeSlashIcon className={'fill-primary-light'}
                                                                         onClick={() => changeVisibility(false)}/>
                            </div>
                            : <div className={'flex-none'}><EyeIcon className={'fill-primary-light'}
                                                                    onClick={() => changeVisibility(true)}/></div>
                        : null
                }
            </div>
        </div>
    )
}

export default Input;
