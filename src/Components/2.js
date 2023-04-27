import React, { useState } from 'react';

const Task_2 = () => {
    const questions = [
        { question: 'What is the capital of France?', answer: 'Paris' },
        { question: 'Who wrote the play "Romeo and Juliet"?', answer: 'William Shakespeare' },
        { question: 'What is the chemical symbol for gold', answer: 'Au' }
    ];

    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnswers({ ...answers, [name]: value });
    }

    const handleSubmit = () => {
        setSubmitted(true);
    }

    const renderAnswers = () => {
        return questions.map((q, index) => {
            const isCorrect = answers[q.question] === q.answer;
            const answerColor = isCorrect ? 'green' : 'red';
            const answerText = isCorrect ? ', correct!' : `. Correct answer is: ${q.answer}`;

            return (
                <div key={index}>
                    <p>{q.question}</p>
                    {submitted ? (
                        <p style={{ color: answerColor }}>
                            {`Your answer: ${answers[q.question]}${answerText}`}
                            <hr style={{ border: '1px solid', color: isCorrect ? 'green' : 'red' }} />
                        </p>
                    ) : (
                        <input
                            type="text"
                            name={q.question}
                            value={answers[q.question] || ''}
                            onChange={handleInputChange}
                        />
                    )}
                </div>
            );
        });
    }

    return (
        <div>
            <h1>Test 1</h1>
            {renderAnswers()}
            {!submitted && (
                <button onClick={handleSubmit}>Finish test</button>
            )}
        </div>
    );
}

export default Task_2;
