"use client";

import { useTodoStore } from "@/store";
import SearchBar from "../SearchBar/SearchBar";
import TodoItem from "../TodoItem/TodoItem";

export default function Board() {
  const { tasks, doneTasks } = useTodoStore();
  return (
    <div className="bg-[#1D1825] rounded-3xl flex justify-center py-12 w-2xl">
      <div className="flex flex-col gap-14">
        <SearchBar />
        {tasks.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-white">Tasks to do - {tasks.length}</h1>
            {tasks.map((task, index) => (
              <TodoItem key={index} text={task} />
            ))}
          </div>
        )}
        {doneTasks.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-white">Done - {doneTasks.length}</h1>
            {doneTasks.map((task, index) => (
              <TodoItem key={index} text={task} done={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
