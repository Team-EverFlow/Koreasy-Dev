import React from 'react';
import '../../styles/wordtestSheetPage/WordTestScore.scss';

const WordTestScore = ({ correction, quizzes }) => {
    const score = correction / quizzes;
    let comment = 'Oh unknown..?';
    if (score === 1) comment = '🎉 Great! 🎉';
    else if (score >= 0.5) comment = '🎉 Good Job!';
    else if (score >= 0.3) comment = '🤟 Well done!';
    else comment = '🤟 Try Again';

    return (
        <div className="wordtestscore-container">
            <div className="wordtestscore-grade">
                {correction}/{quizzes}
            </div>
            <div className="wordtestscore-text">Right answers</div>
            <div className="wordtestscore-good">{comment}</div>
        </div>
    );
};

export default WordTestScore;
