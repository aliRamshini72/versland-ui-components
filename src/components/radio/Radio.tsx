import classNames from "classnames";
import React from "react";

export interface RadioItem {
    label: string | JSX.Element,
    value: string,
}

export interface RadioProps {
    items: RadioItem[],
    selected: undefined | null | string,

    onChange(value: string): void
}

function Group(props: RadioProps) {
    const {items, selected, onChange} = props
    return (
        <div className={'radio-group rtl'}>
            {items.map((item: RadioItem) => <Item checked={selected === item.value} key={item.value}
                                                  onClick={() => onChange(item.value)}>
                {item.label}
            </Item>)}
        </div>
    )
}

export interface ItemProps {
    checked: boolean,

    onClick(): void,

    children: string | JSX.Element | null | undefined | never[]
}

function Item(props: ItemProps) {
    const {checked, onClick, children} = props;
    return (
        <div onClick={onClick}
             className={'radio flex flex-row flex-wrap items-center  gap-x-2 my-2'}>
            <div
                className={classNames('radio-outer-circle pointer', {"unselected": !checked})}
            >
                <div
                    className={classNames('radio-inner-circle', {'unselected-circle': !checked})}
                />
            </div>
            <div className={'flex-auto text-black'}>
                {children}
            </div>
        </div>
    )
}

export default {Group, Item}

