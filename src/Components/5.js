import React, { useState } from 'react';

const questions = [
    {
        question: 'What countries are part of the Eastern European Union?',
        options: [
            { id: 1, text: 'Poland' },
            { id: 2, text: 'Ukraine' },
            { id: 3, text: 'Belarus' },
            { id: 4, text: 'Meldeva' }
        ],
        answer: [1, 2, 3]
    },
    {
        question: 'Which oceans border the coast of Africa?',
        options: [
            { id: 1, text: 'South Pacific Ocean' },
            { id: 2, text: 'Southern Ocean' },
            { id: 3, text: 'Atlantic Ocean' },
            { id: 4, text: 'Indian Ocean' }
        ],
        answer: [3, 4]
    }
];

function Task_5() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerChange = (questionIndex, optionId) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[questionIndex] = updatedAnswers[questionIndex]
            ? [...updatedAnswers[questionIndex], optionId]
            : [optionId];
        setUserAnswers(updatedAnswers);
    };

    const handleResultsSubmit = () => {
        setShowResults(true);
    };

    const resetTest = () => {
        setShowResults(false);
        setUserAnswers([]);
    };

    return (
        <div>
        <h1>Test 3</h1>
            {showResults ? (
                <div>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={index} style={{ color: userAnswers[index] && JSON.stringify(userAnswers[index].sort()) === JSON.stringify(question.answer.sort()) ? 'green' : 'red' }}>
                                {question.question}
                                <br />
                                Your answer: {userAnswers[index] ? userAnswers[index].sort().map(answer => question.options.find(option => option.id === answer).text).join(', ') : 'No answer provided.'}
                                <br />
                                Correct answer: {question.answer.map(answer => question.options.find(option => option.id === answer).text).join(', ')}
                            </li>
                        ))}
                    </ul>
                    <button onClick={resetTest}>Reset Test</button>
                </div>
            ) : (
                <div>
                    {questions.map((question, index) => (
                        <div key={index}>
                            {question.question}
                            {question.options.map(option => (
                                <div key={option.id}>
                                    <label>
                                        <input type="checkbox" checked={userAnswers[index] && userAnswers[index].includes(option.id)} onChange={() => handleAnswerChange(index, option.id)} />
                                        {option.text}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button onClick={handleResultsSubmit}>Submit Answers</button>
                </div>
            )}
        </div>
    );
}

export default Task_5;
