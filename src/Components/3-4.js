import React, { useState } from 'react';

const questions = [
    {
        question: 'What is the capital of Ukraine?',
        options: ['Kyiv', 'Kharkiv', 'Lviv', 'Odessa'],
        answer: 'Kyiv'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 'Jupiter'
    },
    {
        question: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Michelangelo', 'Pablo Picasso', 'Vincent van Gogh'],
        answer: 'Leonardo da Vinci'
    }
];

function Task_3_4() {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);

    const handleOptionChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleQuizSubmit = () => {
        setShowResult(true);
    };
    const resetTest = () => {
        setShowResult(false);
        setAnswers([]);
    };

    const renderQuizResult = () => {
        return (
            <div>
                {questions.map((q, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <div>{q.question}</div>
                        {answers[index] === q.answer ? (
                            <div style={{ color: 'green' }}>
                                Your answer is correct: {q.answer}
                            </div>
                        ) : (
                            <div style={{ color: 'red' }}>
                                Your answer is incorrect. The correct answer is: {q.answer}
                            </div>
                        )}
                    </div>
                ))}
                <button onClick={resetTest}>Reset Test</button>
            </div>

        );
    };

    const renderQuizForm = () => {
        return (
            <div>
                {questions.map((q, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <div>{q.question}</div>
                        {q.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <input
                                    type="radio"
                                    id={`q${index}_option${optionIndex}`}
                                    name={`q${index}`}
                                    value={option}
                                    checked={answers[index] === option}
                                    onChange={() => handleOptionChange(index, option)}
                                />
                                <label htmlFor={`q${index}_option${optionIndex}`}>
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>
                ))}
                <button onClick={handleQuizSubmit}>Submit Answers</button>
            </div>
        );
    };

    return (
        <div>
            <h1>Test 2</h1>
            {showResult ? renderQuizResult() : renderQuizForm()}
        </div>
    );
}

export default Task_3_4;
