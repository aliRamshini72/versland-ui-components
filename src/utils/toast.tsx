import React from "react";
import classnames from "classnames";
// @ts-ignore
import ReactDOM from "react-dom/client";

enum ResultStatus {
    SUCCESS = 'success',
    WARNING = "warn",
    ERROR = 'error',
    INFO = 'info',

}

const getStatus = (type: string) => {
    switch (type) {
        case ResultStatus.SUCCESS :
            return <div className={'mb-4'}>
                <svg className={'w-6 h-6 mx-auto fill-green'} viewBox="64 64 896 896" focusable="false"
                     data-icon="check-circle"
                     width="1em" height="1em" aria-hidden="true">
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
                </svg>
            </div>
        case ResultStatus.ERROR :
            return <div className={'mb-4'}>
                <svg className={'w-6 h-6 mx-auto fill-red'} viewBox="64 64 896 896" focusable="false"
                     data-icon="close-circle"
                     width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                </svg>
            </div>
        case ResultStatus.WARNING :
            return <div className={'mb-4'}>
                <svg className={'w-6 h-6 mx-auto fill-accent stroke-accent'} viewBox="64 64 896 896" focusable="false"
                     data-icon="warning"
                     width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path
                        d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
            </div>
        case ResultStatus.INFO :
            return <div className={'mb-4'}>
                <svg className={'w-6 h-6 mx-auto fill-slate-300'} viewBox="64 64 896 896" focusable="false"
                     data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
            </div>
        default :
            return <div className={'mb-4'}>
                <svg className={'w-6 h-6 mx-auto fill-slate-300'} viewBox="64 64 896 896" focusable="false"
                     data-icon="exclamation-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
            </div>
    }
}


const GlobalMessage = (props: any) => {
    const {type, content} = props;
    const cls = classnames(
        'message-content rtl gap-x-2',
        type
    );
    return (
        <div className={cls}>
            {type && getStatus(type)}
            <p>{content}</p>
        </div>
    );
};


class Message {
    static success(content: string, timeout: number) {
        this.message('success', content, timeout);
    }

    static warn(content: string, timeout: number) {
        this.message('warn', content, timeout);
    }

    static info(content: string, timeout: number) {
        this.message('info', content, timeout);
    }

    static error(content: string, timeout: number) {
        this.message('error', content, timeout);
    }

    static message(type: string, content: string, timeout = 3000) {
        const container = document.createElement('div');
        container.setAttribute('id', 'toast-container');
        container.setAttribute('class', 'component-message-wrap');
        container.setAttribute('style', `-webkit-animation-duration: ${timeout}ms; animation-duration: ${timeout}ms`);
        document.body.appendChild(container);
        const messageContainer = ReactDOM.createRoot(container);
        messageContainer.render(
            <GlobalMessage type={type} content={content}/>
        )
        setTimeout(() => {
            messageContainer.unmount()
            // unmountComponentAtNode(container);
            container.remove();
        }, timeout);
    }
}


function success(msg: string) {
    Message.success(msg, 3000)
}

function info(msg: string) {
    Message.info(msg, 3000)
}


function error(msg: string | any) {
    Message.error(msg, 3000)
}

function warning(msg: string) {
    Message.warn(msg, 3000)
}

const toast = {
    warning, error, success, info
}

export default toast;
