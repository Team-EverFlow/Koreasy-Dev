import React from 'react';
import './ExampleSentence.scss';
import Sound from '../assets/images/Sound.svg';

/**
 * @typedef {Json} exampleSentence
 * @property {string} sentenceKr
 * @property {string} sentenceEn
 */

/**
 * test
 * @param {{isSound: boolean, exampleSentence: {sentenceKr: string, sentenceKr: string} }} exampleText
 * @returns {React.ReactElement}
 */
function ExampleSentence({ isSound, exampleText }) {
    return (
        <div className="exsentence-background">
            {isSound && (
                <div className="sound">
                    <div className="sound-box">
                        <img src={Sound} alt="sound" />
                    </div>
                </div>
            )}
            <div>{exampleText.sentenceKr}</div>
            <div>{exampleText.sentenceEn}</div>
        </div>
    );
}

export default ExampleSentence;
