import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal";
export default function NewProjects({cancelHandler, saveHandler}){
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();
    const modal=useRef();
    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=dueDate.current.value;
        if(enteredDescription.trim()==='' || enteredTitle.trim()==='' || enteredDueDate===''){
            modal.current.open();
            return;
        }
        const projectData={
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        }
        saveHandler(projectData);
    }
    return(
        <>
        <Modal ref={modal}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Inputs</h2>
            <p className="text-stone-600 mb-4">Oops...looks like you overlooked an input field</p>
            <p className="text-stone-600 mb-4">Please enter a value for every input field</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={cancelHandler}>Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button>
                </li>
            </menu>
            <div>
                <Input tag="input" type="text" ref={title}>Title: </Input>
                <Input tag="textarea" type="text" ref={description}>Description: </Input>
                <Input tag="input" type="date" ref={dueDate}>Due Date: </Input>
            </div>
        </div>
        </>
    )
}