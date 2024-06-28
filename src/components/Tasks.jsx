import NewTask from "./NewTask";
import { useState } from "react";
import { useRef } from "react";
export default function Tasks(){
    const taskInput=useRef();
    const [tasks, setTasks]=useState([]);
    function saveHandler(){
       const title=taskInput.current.value
       setTasks(prevTasks=>{
        const newTask={
            task:title,
            id:Math.random()
        }
        return[
            ...prevTasks,
            newTask
        ]
    })
    taskInput.current.value=''
    }
    function deleteHandler(id){
        setTasks((prevTasks)=>prevTasks.filter(task=>task.id!==id))
    }
    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask ref={taskInput} onSave={saveHandler}/>
            {tasks.length==0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            {tasks.length>0 && <ul className="mt-8 p-4 rounded-md bg-stone-100">
                {tasks.map(task=>(
                    <li className="flex justify-between my-4" key={task.id}>{task.task}
                    <button className="text-stone-700 hover:text-stone-950" onClick={()=>deleteHandler(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>}
        </section>
    )
}