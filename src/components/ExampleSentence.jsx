import React, { useEffect } from 'react';
import '../styles/components/ExampleSentence.scss';
import Sound from '../assets/images/Sound.svg';

/**
 * @typedef {Json} exampleSentence
 * @property {string} sentenceKr
 * @property {string} sentenceEn
 */

/**
 * test
 * @param {{isSound: boolean, exampleSentence: {sentenceKr: string, sentenceEn: string} }} exampleText
 * @returns {React.ReactElement}
 */
function ExampleSentence({ isSound, ExampleSentence }) {
    return (
        <div className="exsentence-background">
            {isSound && (
                <div className="sound">
                    <div className="sound-box">
                        <img src={Sound} alt="sound" />
                    </div>
                </div>
            )}
            {ExampleSentence && <div>{ExampleSentence.sentenceKr}</div>}
            {ExampleSentence && <div>{ExampleSentence.sentenceEn}</div>}
        </div>
    );
}

export default ExampleSentence;
