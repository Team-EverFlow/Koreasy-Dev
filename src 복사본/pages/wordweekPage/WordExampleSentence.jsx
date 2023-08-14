import React from 'react';
import '../../styles/wordweekStyles/WordExampleSentence.scss';

const ExampleSentence = ({ exampleSentences }) => {
    return (
        <div className="example-container">
            {exampleSentences.map((sentence, index) => (
                <div key={index} className="example-sentence">
                    <div className="example-ko">{sentence.sentenceKr}</div>
                    <div className="example-en">{sentence.sentenceEr}</div>
                </div>
            ))}
        </div>
    );
};

export default ExampleSentence;
