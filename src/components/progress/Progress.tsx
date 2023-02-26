import React from "react";

export default function Progress({percent} : {percent : number}){
    return (
        <div className={'ltr flex flex-row items-center gap-x-2'}>
            <span className={'text-black'}>{`% ${percent}`}</span>
            <div className={'flex-auto border border-solid border-slate-300 rounded overflow-hidden'}>
                <div style={{width : `${percent}%` , height : '5px'}} className={'bg-amber-400 rounded'}>
                </div>
            </div>
        </div>
    )
}