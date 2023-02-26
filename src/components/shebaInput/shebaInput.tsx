import React from "react";
import {convertFaNumToEnNum} from "../../utils/convertFaNumToEnNum";

function ShebaInput(props: any) {
    const {onChange, value} = props;
    const onChangeInput = (value: any) => {
        onChange(convertFaNumToEnNum(value.target.value));
    }
    return (
        <div className={'rounded border border-primary-light px-4 mb-4'}>
            <div className={'h-10 rtl items-center gap-x-2 flex flex-row flex-wrap'}>
                <div className={"flex-auto"}>
                    <input
                        className={'border-0 outline-0 ltr focus:outline-0 focus:border-0 w-full text-black '}
                        type={"tel"}
                        value={value}
                        placeholder={'شماره شبا'}
                        onChange={onChangeInput}
                    />
                </div>
                <div className={'flex-none'}>
                    <div className={'text-left w-10 text-black'}>
                        IR
                    </div>
                </div>
            </div>
        </div>
    )


}

export default ShebaInput
