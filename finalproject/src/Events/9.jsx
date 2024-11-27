import { useState } from "react";

function NamesLog() {
    const [fullname, setName] = useState("");
    const [age, setAge] = useState("");

    // Declare function properly with 'const' or 'function' keyword
    const ConsoleT = (e) => {
        e.preventDefault();
        const data = { fullname, age };
        console.log("Submitted data", JSON.stringify(data)); // Use console.log instead of console.Log
        setAge("");
        setName("");
    };

    return (
        <div>
            <form onSubmit={ConsoleT}>
                <label>
                    Full Names:{" "}
                    <input
                    className="text-black"
                        type="text"
                        value={fullname}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Age:{" "}
                    <input
                    className="text-black"
                        type="date"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NamesLog;
