import React, { useState } from "react";

const Task_1 = () => {
    const [employees, setEmployees] = useState([
        { id: 1, firstName: "Ivan", lastName: "Maksimovich", daysWorked: 10, rate: 100 },
        { id: 2, firstName: "Vanya", lastName: "Vanov", daysWorked: 15, rate: 90 },
        { id: 3, firstName: "Max", lastName: "Sidorov", daysWorked: 12, rate: 120 },
    ]);

    const handleDaysWorkedChange = (id, daysWorked) => {
        setEmployees((prevEmployees) =>
            prevEmployees.map((employee) =>
                employee.id === id ? { ...employee, daysWorked: daysWorked } : employee
            )
        );
    };

    const handleRateChange = (id, rate) => {
        setEmployees((prevEmployees) =>
            prevEmployees.map((employee) =>
                employee.id === id ? { ...employee, rate: rate } : employee
            )
        );
    };

    const calculateSalary = (daysWorked, rate) => {
        return daysWorked * rate;
    };

    const totalSalary = employees.reduce(
        (acc, employee) => acc + calculateSalary(employee.daysWorked, employee.rate),
        0
    );

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Number of days</th>
                        <th>Bet</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>
                                <input
                                    type="number"
                                    value={employee.daysWorked}
                                    onChange={(e) =>
                                        handleDaysWorkedChange(employee.id, parseInt(e.target.value))
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={employee.rate}
                                    onChange={(e) => handleRateChange(employee.id, parseInt(e.target.value))}
                                />
                            </td>
                            <td>{calculateSalary(employee.daysWorked, employee.rate)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>Total salary: {totalSalary}</div>
        </div>
    );
};

export default Task_1;
