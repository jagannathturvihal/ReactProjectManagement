import React from 'react';
import Inputs from "./Inputs";
import Modal from './Modal';

export default function NewProject({ onAddNewProject, onCancel }) {
    const modal = React.useRef();

    const title = React.useRef();
    const description = React.useRef();
    const dueDate = React.useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "") {
            modal.current.open();
            return;
        }

        onAddNewProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Ok">
                <h2 className="text-xl font-bold text-stone-700 my-4"> Invalid Inputs</h2>
                <p className="text-stone-600 mb-4">Please make sure all fields are filled out correctly.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-800 hover:text-stone-950"
                            onClick={onCancel}>
                            Cancel
                        </button>
                    </li>
                    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    </li>
                </menu>
                <div>
                    <Inputs type="text" ref={title} lable="Title" />
                    <Inputs ref={description} lable="Description" textarea />
                    <Inputs type="date" ref={dueDate} lable="Due Date" />
                </div>
            </div>
        </>
    )
}