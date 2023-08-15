import React from 'react';

import TodayEvtEN from '../../utils/TodayCvtEN';

import '../../styles/todayWordPage/TodayCheckComponent.scss';

/**
 *
 * @param {{checkText: <Array>}} checkText
 * @returns
 */
function TodayCheckComponent({ checkText }) {
    const checkTextStatus = { ...checkText };

    const countTrueValues = Object.values(checkTextStatus).reduce(
        (count, value) => {
            if (value === false) {
                return count + 1;
            }
            return count;
        },
        0,
    );

    let cnt = countTrueValues;
    const allValuesTrue = Object.values(checkTextStatus).every(
        value => value === true,
    );
    let message = allValuesTrue
        ? {
              needWord: '🎉 You attended!',
              chierUp: TodayEvtEN(),
          }
        : {
              needWord: 'Check ' + cnt + ' more words',
              chierUp: 'for attenddance',
          };

    function sendTodayCheckData() {
        //
    }
    if (allValuesTrue) {
        sendTodayCheckData();
    }

    return (
        <div>
            <div className="today-check-background">
                <div className="circle-frame">
                    {Object.keys(checkTextStatus).map((item, index) => (
                        <div
                            key={index}
                            className={
                                checkTextStatus[item]
                                    ? 'check-word'
                                    : 'not-check-word'
                            }
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
                <div className="today-check-text-frame">
                    <span className="today-check-title">
                        {message.needWord}
                    </span>
                    <span className="today-check-info">{message.chierUp}</span>
                </div>
            </div>
        </div>
    );
}

export default TodayCheckComponent;
