import { useRef } from 'react';
import { Toast } from './Toast';

/**
 * Toast 를 사용하기 위한 요소를 불러옵니다.
 * @returns {((function({message: string, icon?: boolean}): JSX.Element)| function(): void )[]}
 */
export function ToastGenerator() {
    const reference = useRef(null);
    const onToastCallEvent = () => {
        reference.current.classList.add('show');
        setTimeout(function () {
            if (!reference.current) return;
            reference.current.classList.remove('show');
        }, 3000);
    };

    return [
        ({ message, icon = false }) => {
            return (
                <Toast reference={reference} icon={icon} message={message} />
            );
        },
        onToastCallEvent,
    ];
}
