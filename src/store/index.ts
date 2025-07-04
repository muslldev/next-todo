import { create } from "zustand";

interface TodoState {
  tasks: string[];
  doneTasks: string[];
  addTask: (task: string) => void;
  removeTask: (task: string) => void;
  doneTask: (task: string) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  tasks: [],
  doneTasks: [],
  addTask: (task: string) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  removeTask: (task: string) =>
    set((state) => ({ tasks: state.tasks?.filter((t) => t !== task) })),
  doneTask: (task: string) =>
    set((state) => ({ doneTasks: [...state.doneTasks, task] })),
}));
