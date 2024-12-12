import { useState } from "react";

function Menu() {
    const [showICT, setShowICT] = useState(false);
    const [showScience, setShowScience] = useState(false);

    return (
        <nav>
            <ul>
                <li>
                    <button
                        onClick={() => setShowICT(!showICT)}
                    >
                        School of ICT
                    </button>
                    {showICT && (
                        <ul>
                            <li className="p-2">Computer Science</li>
                            <li className="p-2">Information Systems</li>
                            <li className="p-2">Information Technology</li>
                            <li className="p-2">Computer Engineering</li>
                        </ul>
                    )}
                </li>
                <li>
                    <button
                        onClick={() => setShowScience(!showScience)}
                    >
                        School of Science
                    </button>
                    {showScience && (
                        <ul>
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
