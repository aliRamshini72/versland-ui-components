import React from "react";
import Progress from "../progress/Progress";

const Statistic = ({title, value, percent}: { title: string, value: string, percent?: number }) => {
    return (
        <div className={'bg-slate border-b border-solid mb-4 p-2 rounded border-slate-300'}>
            <label className={'text-primary-light mb-2'}>
                {title}
            </label>
            <p className={'text-black f-large mb-1'}>{value}</p>
            {percent !== undefined &&
                <Progress percent={percent}/>
            }
        </div>
    )
}

export default Statistic