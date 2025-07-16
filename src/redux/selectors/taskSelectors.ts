import { createSelector } from "reselect";
import { RootState } from "./../store/store";


// Basis-Selektoren
export const getTasks = (state: RootState) => state.tasks.tasks;
export const getSelectedProject = (state: RootState) => state.tasks.selectedProject;

// Gefilterte Tasks nach Projekt
export const getFilteredTasks = createSelector(
    [getTasks, getSelectedProject],
    (tasks, selectedProject) => {
        return selectedProject === "All"
            ? tasks
            : tasks.filter(task => task.project === selectedProject);
    }
);
