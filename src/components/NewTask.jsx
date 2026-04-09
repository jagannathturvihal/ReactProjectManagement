import React from 'react';

export default function NewTask({addTask}) {
    const [enterTaskValue, setEnterTaskValue] = React.useState('');

    const handleChange = (event) => {
        setEnterTaskValue(event.target.value);
    }

    const handleClick = () => {
        if (enterTaskValue.trim() === "") {
            return;
        }
        addTask(enterTaskValue);
        setEnterTaskValue("");
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enterTaskValue}
            />
            <button className="bg-stone-700 text-stone-300 hover:bg-stone-950 px-4 py-1 rounded-sm"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}