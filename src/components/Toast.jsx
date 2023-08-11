import './Toast.scss';

export function Toast({ reference, message, icon = false }) {
    return (
        <div ref={reference} className="toast-group">
            <div className={`toast-content ${icon && 'toast-icon-content'}`}>
                {icon && <span className="toast-icon" />}
                <div className="toast-message">
                    {message.split('\\n').map(message_content => {
                        return (
                            <span className="toast-message-block">
                                {message_content}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
