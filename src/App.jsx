import React from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProjectDetails from "./components/SelectedProjectDetails";

function App() {
  const [projectState, setProjectState] = React.useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleAddProject (enterPojectValues) {
    setProjectState(prevState =>{
      const projectId = Math.random();
      const newProejct = {
        ...enterPojectValues,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, newProejct]
      }
    })
  }

  function handleStartProject () {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    });
  }

  function handleCancelPRoejct () {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      }
    });
  }

  function handleSelectProject (id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let projectTypeContent = <SelectedProjectDetails project={selectedProject}/>;

  if (projectState.selectedProjectId === null) {
    projectTypeContent = <NewProject onAddNewProject={handleAddProject} onCancel={handleCancelPRoejct}/>;
  } else if (projectState.selectedProjectId === undefined) {
    projectTypeContent = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartProject} projects={projectState.projects} onSelectProject={handleSelectProject} />
      {projectTypeContent}
      {/* <NewProject /> */}
      {/* <NoProjectSelected onStartAddProject={handleStartProject} /> */}
    </main>
  );
}

export default App;
