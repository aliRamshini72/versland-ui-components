import {useEffect, useState} from "react";
import countDecimals from '../../utils/countDecimals'
import formatPriceValue from "../../utils/formatPriceValue";
import {convertFaNumToEnNum} from "../../utils/convertFaNumToEnNum";
import replaceAll from "../../utils/replaceAll";
import React from "react";


export default function PriceInput(props: any) {
    const {label, unit, onChange, value, disabled, maxValue, minValue, noError} = props;
    const [data, setData] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (value) {
            if (value > maxValue) setErrorMsg("مقدار بیش از حد مجاز است")
            else if (value < minValue) setErrorMsg("مقدار کم تر از حد مجاز است")
            else setErrorMsg('')
        } else {
            setErrorMsg('');
        }
        setData(formatPriceValue(value + ''))
        // setData(value?.toString().replace(/(?<!(\.\d*|^.{0}))(?=(\d{3})+(?!\d))/g, ','))
        // setData(value?.toString().replace(new RegExp(/\B(?=(\d{3})+(?!\d))/g), ','))
    }, [value])

    const onChangeInput = (event: any) => {
        const convert = convertFaNumToEnNum(event.target.value)
        const removeSeparator = convert.replace(/\$\s?|(,*)/g, '');
        if (isNaN(parseFloat(removeSeparator))) {
            onChange('')
        } else {
            let a = `${convert.replace(/\$\s?|(,*)/g, '')}`
            onChange(a)
        }
    }


    return (
        <div
            className={'mb-4'}
        >
            <div className={'rounded border border-primary-light px-4' + (disabled ? 'disabled' : '')}>
                <div className={'h-10 items-center gap-x-2 flex flex-row flex-wrap'}>
                    {label && <div className={'flex-none'}>
                            <span className={'f-small text-primary-light'}>
                                {label}
                            </span>
                    </div>}
                    <div className={'flex-auto w-min'}>
                        <input
                            className={'border-0 outline-0 ltr focus:outline-0 focus:border-0 w-full text-black '}
                            aria-label={'size-price-input' + unit}
                            name={'size-price-input' + unit}
                            type={"text"}
                            onChange={onChangeInput}
                            max={maxValue}
                            min={minValue}
                            step={minValue}
                            value={data}
                            readOnly={disabled}
                            onKeyPress={(event: any) => {
                                if (minValue >= 1) {
                                    if (event.key === '.') {
                                        return event.preventDefault();
                                    } else {
                                        if (!/[0-9]/.test(convertFaNumToEnNum(event.key))) {
                                            event.preventDefault();
                                        }
                                    }
                                } else {
                                    if (event.key === '.') {
                                        if (event.target.value.includes('.')) {
                                            return event.preventDefault();
                                        } else return
                                    } else {
                                        if (!/[0-9]/.test(convertFaNumToEnNum(event.key))) {
                                            return event.preventDefault();
                                        }
                                        let minDecimal = countDecimals(minValue);
                                        let targetDecimal = countDecimals(replaceAll(event.target.value, ',', ''));
                                        if (minDecimal <= targetDecimal) {
                                            return event.preventDefault();
                                        }

                                    }
                                }
                            }}
                        />
                    </div>
                    {unit && <div className={'flex-none'}>
                            <span className={'f-small text-primary-light '}>
                                {unit}
                            </span>
                    </div>}

                </div>
            </div>
            <div className={'text-right f-small'}>
                {!noError && errorMsg
                    ? <span className={'text-red-dark'}>
                        {errorMsg}
                    </span>
                    : <span className={'invisible'}>
                        ورسلند
                    </span>}

            </div>
        </div>
    )
}
