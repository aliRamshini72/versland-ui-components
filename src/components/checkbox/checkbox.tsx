import React from "react";

export default function Checkbox(props: any) {
    const {checked, onChange, label} = props;
    return (
        <div className="flex items-center gap-x-2">
            <input
                type="checkbox"
                id="versland-checkbox"
                name="confirmation"
                checked={checked}
                onChange={onChange}
                className="accent-primary-medium h-4 w-4"/>
            <label htmlFor="versland-checkbox" className="select-none text-black">{label}</label>
        </div>
    )
}