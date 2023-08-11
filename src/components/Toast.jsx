import './Toast.scss';

export function Toast({ reference, message, icon = undefined }) {
    return (
        <div ref={reference} className="toast-message">
            {icon !== undefined && <span className={'toast-icon' + icon} />}
            {message}
        </div>
    );
}
