
function ReuseBt({ text, color }) {
    // Define a set of color classes to use based on the color prop
    const colorClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-700',
        secondary: 'bg-gray-500 text-white hover:bg-gray-700',
        success: 'bg-green-500 text-white hover:bg-green-700',
        danger: 'bg-red-500 text-white hover:bg-red-700',
        warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
    };

    // Use a fallback for an unknown color or default to 'primary'
    const buttonClass = colorClasses[color] || colorClasses.primary;

    return (
        <div>
        <button
            className={`px-4 py-2 rounded-md ${buttonClass} focus:outline-none`}
        >
            {text}
        </button>
        </div>
    );
}

export default ReuseBt;