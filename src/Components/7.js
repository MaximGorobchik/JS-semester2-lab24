import React, { useState } from "react";

function Task_7() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [tasks, setTasks] = useState({});

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleAddTask = (task) => {
        setTasks((prevTasks) => ({
            ...prevTasks,
            [selectedDate.toDateString()]: [
                ...(prevTasks[selectedDate.toDateString()] || []),
                task,
            ],
        }));
    };

    const handleDeleteTask = (taskIndex) => {
        setTasks((prevTasks) => {
            const selectedDateTasks = prevTasks[selectedDate.toDateString()];
            return {
                ...prevTasks,
                [selectedDate.toDateString()]: [
                    ...selectedDateTasks.slice(0, taskIndex),
                    ...selectedDateTasks.slice(taskIndex + 1),
                ],
            };
        });
    };

    const handleTaskToggle = (taskIndex) => {
        setTasks((prevTasks) => {
            const selectedDateTasks = prevTasks[selectedDate.toDateString()];
            const selectedTask = selectedDateTasks[taskIndex];
            return {
                ...prevTasks,
                [selectedDate.toDateString()]: [
                    ...selectedDateTasks.slice(0, taskIndex),
                    { ...selectedTask, done: !selectedTask.done },
                    ...selectedDateTasks.slice(taskIndex + 1),
                ],
            };
        });
    };

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysInMonth = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        0
    ).getDate();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i));
    }

    return (
        <div>
            <div>
                <h2>
                    {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
                </h2>
                <button onClick={() => setSelectedDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1))}>
                    Previous Month
                </button>
                <button onClick={() => setSelectedDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1))}>
                    Next Month
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {days.reduce(
                        (rows, day, index) => {
                            if (index % 7 === 0) rows.push([]);
                            rows[rows.length - 1].push(day);
                            return rows;
                        },
                        [[]]
                    ).map((week, rowIndex) => (
                        <tr key={rowIndex}>
                            {week.map((day, columnIndex) => (
                                <td key={columnIndex} onClick={() => handleDateClick(day)}>
                                    <div>{day.getDate()}</div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h3>Tasks for {selectedDate.toDateString()}</h3>
                {tasks[selectedDate.toDateString()] &&
                    tasks[selectedDate.toDateString()].map((task, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                checked={task.done}
                                onChange={() => handleTaskToggle(index)}
                            />
                            {task.text}
                            <button onClick={() => handleDeleteTask(index)}>Delete</button>
                        </div>
                    ))}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleAddTask({ text: e.target.elements.task.value, done: false });
                        e.target.elements.task.value = "";
                    }}
                >
                    <input type="text" name="task" />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </div>
    );
}
export default Task_7;