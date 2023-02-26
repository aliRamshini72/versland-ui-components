import {Fragment, useRef, useState} from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import * as React from "react";
import classNames from "classnames";

interface Props {
    render: JSX.Element,
    dropdown: JSX.Element,
}

export default function Dropdown(props: Props) {
    const {render, dropdown} = props;
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const ref: any = useRef("drop-down-btn")
    useOutsideClick(ref, () => {
        setDropdownPopoverShow(false)
    })

    return React.cloneElement(render, {
            ...render.props,
            className: classNames('relative select-none', render.props.className),
            ref: ref,
            onClick: () => {
                setDropdownPopoverShow((value) => !value)
            }
        },
        <Fragment>
            {render.props.children}
            {React.cloneElement(dropdown, {
                ...dropdown.props,
                className: classNames({
                    'absolute shadow': dropdownPopoverShow,
                    'hidden': !dropdownPopoverShow
                }, dropdown.props.className),
                onClose: () => {
                    setDropdownPopoverShow(false)
                }
            })}
        </Fragment>
    )
}