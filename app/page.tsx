"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Header } from "./_components/Header";

type TaskType = {
  id: string;
  title: string;
};

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<TaskType[] | undefined>([]);

  const getTasks = async () => {
    const res = await fetch("/api/task/getAll");
    const data = await res.json();
    setTasks(data);
  };

  const createTask = async () => {
    await fetch("/api/task/create", {
      method: "POST",
      body: JSON.stringify({
        title: inputValue,
      }),
    });
    getTasks();
  };

  const deleteTask = async (id: string) => {
    await fetch("/api/task/delete", {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
    });
    getTasks();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getTasks();
  }, []);

  return (
    <div className="pt-10">
      <Header />
      <div className="border w-100 h-screen">
        <Input
          placeholder="Add task here..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          onClick={() => {
            createTask();
          }}
          variant="secondary"
        >
          <ArrowUp />
        </Button>
        <div>
          {tasks?.map((task, index) => (
            <div key={index} className="flex">
              <div>{task.title}</div>
              <Trash onClick={() => deleteTask(task.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
