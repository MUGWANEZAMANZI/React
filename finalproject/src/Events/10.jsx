import { useState } from "react";

function Menu() {
    const [showICT, setShowICT] = useState(false);
    const [showScience, setShowScience] = useState(false);

    return (
        <nav>
            <ul className="flex space-x-4">
                {/* School of ICT Menu */}
                <li className="relative">
                    <button
                        className="rounded-md bg-yellow-300 p-2 mx-10 my-3"
                        onClick={() => setShowICT(!showICT)}
                    >
                        School of ICT
                    </button>
                    {showICT && (
                        <ul className="absolute left-0 mt-2 bg-green-400 rounded-md shadow-lg w-48 p-2 mx-10">
                            <li className="p-2">Computer Science</li>
                            <li className="p-2">Information Systems</li>
                            <li className="p-2">Information Technology</li>
                            <li className="p-2">Computer Engineering</li>
                        </ul>
                    )}
                </li>

                {/* School of Science Menu */}
                <li className="relative">
                    <button
                        className="rounded-md bg-yellow-300 p-2 mx-10 my-3"
                        onClick={() => setShowScience(!showScience)}
                    >
                        School of Science
                    </button>
                    {showScience && (
                        <ul className="absolute left-0 mt-2 bg-green-400 rounded-md shadow-lg w-48 p-2 mx-10">
                            <li className="p-2">Mathematics</li>
                            <li className="p-2">Chemistry</li>
                            <li className="p-2">Physics</li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
