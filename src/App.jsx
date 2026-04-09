import React from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProjectDetails from "./components/SelectedProjectDetails";

function App() {
  const [projectState, setProjectState] = React.useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(enterTask) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: enterTask,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    });
  }

  function handleAddProject(enterPojectValues) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProejct = {
        ...enterPojectValues,
        id: projectId
      }
    });
  }

  function handleAddProject(enterPojectValues) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const newProejct = {
        ...enterPojectValues,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProejct]
      }
    })
  }

  function handleStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    });
  }

  function handleCancelProejct() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,

      }
    });
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    });
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  let projectTypeContent =
    <SelectedProjectDetails
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />;

  if (projectState.selectedProjectId === null) {
    projectTypeContent = <NewProject onAddNewProject={handleAddProject} onCancel={handleCancelProejct} />;
  } else if (projectState.selectedProjectId === undefined) {
    projectTypeContent = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleStartProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {projectTypeContent}
      {/* <NewProject /> */}
      {/* <NoProjectSelected onStartAddProject={handleStartProject} /> */}
    </main>
  );
}

export default App;
