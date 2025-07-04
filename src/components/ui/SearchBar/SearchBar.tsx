"use client";

import { useState } from "react";
import Button from "../Button/Button";
import { useTodoStore } from "@/store";

export default function SearchBar() {
  const [todo, setTodo] = useState<string>("");

  const { addTask } = useTodoStore();

  const handleAdd = () => {
    if (todo) {
      addTask(todo);
      setTodo("");
    }
  };

  return (
    <div className="flex gap-3">
      <div className="rounded-xl border border-[#9E78CF] outline-none flex items-center pl-4 w-sm">
        <input
          className="outline-none h-5 placeholder:text-[#777] text-white w-full"
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Add a new task"
        />
      </div>
      <Button click={handleAdd} />
    </div>
  );
}
