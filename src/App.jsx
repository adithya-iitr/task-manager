import NewProjects from "./components/NewProjects";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [addProject, setAddedProject]=useState(false);
  const [projectData, setProjectData]=useState([]);
  const [selectedProject, setSelectedProject]=useState(null)
  function handleClick(){
    setAddedProject(prevAddProject=>prevAddProject=true)
    setSelectedProject(null)
  }
  function handleCancel(){
    setAddedProject(prevAddProject=>prevAddProject=false)
  }
  function handleSave(projectDetails){
    setAddedProject(prevAddProject=>prevAddProject=false)
    setProjectData(prevProjectData=>{
      const newProject={
        ...projectDetails,
        id:Math.random()
      }
      return [
        ...prevProjectData,
        newProject
      ]
    })
  }
  function handleSelect(id){
    setSelectedProject(prevSelectedProject=>prevSelectedProject=projectData.filter(project=>project.id===id)) 
  }
  function deleteHandler(){
    setSelectedProject(null)
    setProjectData(prevProjectData=>prevProjectData.filter(project=>project.id!==selectedProject[0].id))
  }
  return (
    <>
    <main className="my-8 flex gap-8 h-screen ">
      <ProjectSidebar clickHandler={handleClick} projects={projectData} onSelect={handleSelect}/>
      {!selectedProject? addProject? <NewProjects cancelHandler={handleCancel} saveHandler={handleSave}/>:<NoProjectSelected clickHandler={handleClick}/>:<SelectedProject project={selectedProject} onDelete={deleteHandler}/>}
    </main>
    </>
  );
}

export default App;
