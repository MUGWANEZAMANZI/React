import React, { useState, useEffect } from "react";

function Welcome() {
    return (
        <p>Welcome to the final Project Page1</p>
    );
}

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p>Current date is: {currentDate.toString()}</p>
    );
}

export { CurrentDate, Welcome };
