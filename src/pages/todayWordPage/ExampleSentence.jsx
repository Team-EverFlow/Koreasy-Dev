import React from 'react';
import '../../styles/ExampleSentence.scss';
import Sound from '../../assets/images/Sound.svg';

/**
 *
 * @param {boolean} isSound
 * @param {string} exampleText
 * @param {string} mean
 * @returns
 */
function ExampleSentence({ isSound, exampleText, mean }) {
    return (
        <div className="background">
            {isSound === true ? (
                <div className="sound">
                    <div className="sound-box">
                        <img src={Sound} alt="sound" />
                    </div>
                </div>
            ) : null}
            <div>{exampleText}</div>
            <div>{mean}</div>
        </div>
    );
}

export default ExampleSentence;
