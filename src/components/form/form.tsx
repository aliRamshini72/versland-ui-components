import React, {FormEvent} from "react";

interface FormProps {
    onSubmit?(event: FormEvent<HTMLFormElement>): void

    children?: React.ReactNode
}

export default function Form(props: FormProps) {
    return <form onSubmit={async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (props.onSubmit)
            await props.onSubmit(event)
    }}>
        {props.children}
    </form>
}