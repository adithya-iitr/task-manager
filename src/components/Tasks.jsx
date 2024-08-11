import React, { useState, useRef } from "react";
import NewTask from "./NewTask";

export default function Tasks({ projects, projectId }) {
    const taskInput = useRef();
    const [allProjects, setAllProjects] = useState(projects);
    console.log(allProjects)
    const project = allProjects.find(project => project.id === projectId);

    function saveHandler() {
        const title = taskInput.current.value;
        if (title.trim() === "") return; // Ensure there's a task title

        setAllProjects(prevProjects => {
            return prevProjects.map(project => {
                if (project.id === projectId) {
                    const newTask={
                        task:title, 
                        id:Math.random()
                    }
                    project={
                        ...project,
                        tasks:[...project.tasks,newTask]
                    }
                    return project;
                }
                else{
                    return project;
                }
            });
        });
        taskInput.current.value = '';
    }

    function deleteHandler(taskId) {
        setAllProjects(prevProjects => {
            return prevProjects.map(project => {
                if (project.id === projectId) {
                    return { ...project, tasks: project.tasks.filter(task => task.id !== taskId) };
                }
                return project;
            });
        });
    }

    if (!project) {
        return <p className="text-stone-800 my-4">Project not found.</p>;
    }

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks for {project.title}</h2>
            <NewTask ref={taskInput} onSave={saveHandler} />
            {project.tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            {project.tasks.length > 0 && (
                <ul className="mt-8 p-4 rounded-md bg-stone-100">
                    {project.tasks.map(task => (
                        <li className="flex justify-between my-4" key={task.id}>
                            {task.task}
                            <button className="text-stone-700 hover:text-stone-950" onClick={() => deleteHandler(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
