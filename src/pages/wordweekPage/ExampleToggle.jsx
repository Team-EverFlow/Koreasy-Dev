const ExampleToggle = (visibleExamples, wordId) => {
    if (visibleExamples.includes(wordId)) {
        return visibleExamples.filter(id => id !== wordId);
    } else {
        return [...visibleExamples, wordId];
    }
};

export default ExampleToggle;
