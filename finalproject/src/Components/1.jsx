import React, { useState, useEffect } from "react";

function Welcome() {
    return (
        <p className="m-4">Welcome to the final Project Page1</p>
    );
}

function CurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Updates every second

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="m-4">Current date is: {currentDate.toString()}</p>
    );
}

export { CurrentDate, Welcome };
