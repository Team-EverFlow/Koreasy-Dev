import React from 'react';

function TodayWord() {
    let word = {
        'first word': false,
        'second word': false,
        'third word': false,
        'slang word': false,
    };

    let today_stemp = false;

    const handleClick = word_name => {
        word[word_name] = true;
        console.log(word);
        const allTrue = Object.values(word).every(value => value);

        if (allTrue) {
            today_stemp = true;
            console.log('get today stamp!', today_stemp);
        } else {
            console.log('see all card!', today_stemp);
        }
    };

    return (
        <div>
            <div
                className="TodayWord"
                onClick={() => handleClick(Object.keys(word)[0])}
            >
                <button>first word</button>
            </div>
            <div
                className="TodayWord"
                onClick={() => handleClick(Object.keys(word)[1])}
            >
                <button>second word</button>
            </div>
            <div
                className="TodayWord"
                onClick={() => handleClick(Object.keys(word)[2])}
            >
                <button>third word</button>
            </div>
            <div
                className="TodayWord"
                onClick={() => handleClick(Object.keys(word)[3])}
            >
                <button>slang</button>
            </div>
        </div>
    );
}

export default TodayWord;
