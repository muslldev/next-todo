"use client";

import IconButton from "../IconButton/IconButton";
import { useTodoStore } from "@/store";

interface TodoItemProps {
  text: string;
  done?: boolean;
}

export default function TodoItem({ text, done }: TodoItemProps) {
  const { doneTask, removeTask } = useTodoStore();

  const handleDone = () => {
    if (!done) {
      doneTask(text);
      removeTask(text);
    }
  };

  return (
    <div className="flex justify-between bg-[#15101C] rounded-xl items-center h-20 w-full px-5">
      <h1 className={!done ? "text-[#9E78CF]" : "text-[#78CFB0] line-through"}>
        {text}
      </h1>
      {!done && (
        <div className="flex gap-2">
          <IconButton source="/check.svg" alt_text="check" click={handleDone} />
          <IconButton
            source="/delete.svg"
            alt_text="delete"
            click={() => removeTask(text)}
          />
        </div>
      )}
    </div>
  );
}
