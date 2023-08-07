import React from 'react';
import '../styles/colors.scss';

/**
 *
 * @param {*} direction 방향 설정: Left, Right
 * @param {*} color 색상 설정: MainColor, Gray
 * @returns
 */
const Chevrion = ({ direction, color }) => {
    const MainColor = getComputedStyle(
        document.documentElement,
    ).getPropertyValue('--main-color');
    const GrayColor = getComputedStyle(
        document.documentElement,
    ).getPropertyValue('--gray-color');

    let chevrionColor = GrayColor && '#8E8E93';

    if (color === 'MainColor') {
        chevrionColor = MainColor;
    }

    return (
        <div className="chevrion-box">
            {direction === 'Left' ? (
                <svg width="24" height="33" viewBox="0 0 24 33" fill="none">
                    <path
                        d="M6 15.8242C6 16.0928 6.09668 16.3291 6.30078 16.5332L14.8193 24.8584C15.002 25.0518 15.2383 25.1484 15.5176 25.1484C16.0762 25.1484 16.5059 24.7295 16.5059 24.1709C16.5059 23.8916 16.3877 23.6553 16.2158 23.4727L8.39551 15.8242L16.2158 8.17578C16.3877 7.99316 16.5059 7.74609 16.5059 7.47754C16.5059 6.91895 16.0762 6.5 15.5176 6.5C15.2383 6.5 15.002 6.59668 14.8193 6.7793L6.30078 15.1152C6.09668 15.3086 6 15.5557 6 15.8242Z"
                        fill={chevrionColor}
                    />
                </svg>
            ) : (
                <svg width="24" height="33" viewBox="0 0 24 33" fill="none">
                    <path
                        d="M18 17.1758C18 16.9072 17.9033 16.6709 17.6992 16.4668L9.18066 8.1416C8.99805 7.94824 8.76172 7.85156 8.48242 7.85156C7.92383 7.85156 7.49414 8.27051 7.49414 8.8291C7.49414 9.1084 7.6123 9.34473 7.78418 9.52734L15.6045 17.1758L7.78418 24.8242C7.6123 25.0068 7.49414 25.2539 7.49414 25.5225C7.49414 26.0811 7.92383 26.5 8.48242 26.5C8.76172 26.5 8.99805 26.4033 9.18066 26.2207L17.6992 17.8848C17.9033 17.6914 18 17.4443 18 17.1758Z"
                        fill={chevrionColor}
                    />
                </svg>
            )}
        </div>
    );
};

export default Chevrion;
