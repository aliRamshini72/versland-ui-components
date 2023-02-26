import React from "react";
import {useEffect, useMemo, useState} from "react";
import countDecimals from "../../utils/countDecimals";
import formatPriceValue from "../../utils/formatPriceValue";


interface Props {
    onChange: any,
    value: any,
    maxValue: any,
    minValue: any,
    balance: any,
}

function WithdrawIrtInput(props: Props) {
    const {onChange, value, maxValue, minValue, balance} = props;
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
        // setData(value?.toString().replace(new RegExp(/\B(?=(\d{3})+(?!\d))/g), ','))
    }, [value])

    const onChangeInput = (event: any) => {
        let a = `${event.target.value.replace(/\$\s?|(,*)/g, '')}`
        onChange(a)
    }


    const calculatedMaxValue = useMemo(() => {
        return ~~Math.min(balance, maxValue)
    }, [maxValue, balance])

    return (
        <div className={'mb-4'}>
            <div className={'rounded border border-primary-light px-4'}>
                <div className={'items-center h-10 flex flex-row gap-x-2 flex-wrap'}>
                    <div className={'flex-none'}>
                        <span onClick={() => onChange(calculatedMaxValue)} className={'f-small text-accent pointer '}>
                                MAX
                            </span>
                    </div>
                    <div className={'flex-auto'}>

                        <input
                            className={'border-0 outline-0 ltr focus:outline-0 focus:border-0 w-full text-black '}
                            type={'tel'}
                            onChange={onChangeInput}
                            max={maxValue}
                            min={minValue}
                            step={minValue}
                            value={data}
                            readOnly={false}
                            // defaultValue={value}
                            // formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            onKeyPress={(event: any) => {
                                if (minValue >= 1) {
                                    if (event.key === '.') {
                                        return event.preventDefault();
                                    } else {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }
                                } else {
                                    if (event.key === '.') {
                                        if (event.target.value.includes('.')) {
                                            return event.preventDefault();
                                        } else return
                                    } else {
                                        if (!/[0-9]/.test(event.key)) {
                                            return event.preventDefault();
                                        }
                                        let minDecimal = countDecimals(minValue);
                                        let targetDecimal = countDecimals(event.target.value);
                                        if (minDecimal <= targetDecimal) {
                                            return event.preventDefault();
                                        }

                                    }
                                }
                            }}
                        />
                    </div>
                    <div className={'flex-none'}>
                            <span className={'f-small text-primary-light '}>
                                تومان
                            </span>
                    </div>

                </div>

            </div>
            <div className={'text-right f-small'}>
                {errorMsg
                    ? <span className={'text-red-dark'}>
                        {errorMsg}
                    </span>
                    : <span className={'v-hidden'}>
                        ورسلند
                    </span>}

            </div>
        </div>



        // <div className={'price-input mb-10 '}>
        //     <Row align={'middle'}>
        //
        //         <Col span={4}>
        //             <div>
        //                 <p className={'f-small '}>
        //                     IRT
        //                 </p>
        //             </div>
        //         </Col>
        //         <Col span={16}>
        //
        //             <InputNumber
        //                 placeholder={"مقدار برداشت"}
        //                 max={calculatedMaxValue}
        //                 min={minValue}
        //                 step={1000}
        //                 controls={false}
        //                 style={{color: 'white'}}
        //                 value={value}
        //                 bordered={false}
        //                 formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        //                 // formatter={value => `${value}`.replace(/(?<!(\.\d*|^.{0}))(?=(\d{3})+(?!\d))/g, ',')}
        //                 parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
        //                 onChange={onChangeInput}
        //             />
        //
        //         </Col>
        //
        //
        //
        //     </Row>
        //
        // </div>
    )
}


export default WithdrawIrtInput
