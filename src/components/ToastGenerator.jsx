import { useRef } from 'react';
import { Toast } from './Toast';

export function ToastGenerator() {
    const reference = useRef(null);
    const onToastCallEvent = () => {
        reference.current.classList.add('show');
        setTimeout(function () {
            reference.current.classList.remove('show');
        }, 3000);
    };

    return [
        ({ message, icon = undefined }) => {
            return (
                <Toast reference={reference} icon={icon} message={message} />
            );
        },
        onToastCallEvent,
    ];
}
