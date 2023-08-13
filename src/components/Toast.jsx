import './Toast.scss';

/**
 * Toast Component
 * @param reference 활성화를 위한 reference 값이 들어갑니다.
 * @param {string} message 토스트 메시지에 들어갈 메시지가 입력됩니다. 줄구분은 \n로 합니다.
 * @param {boolean} icon 만약에 활성화한다면, 경고 아이콘이 토스트에 표시됩니다.
 * @returns {JSX.Element}
 */
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
