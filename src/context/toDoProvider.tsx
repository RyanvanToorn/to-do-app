// First time using a context provider - but it essentially serves as a logic wrapper for actions performed on the to-do items
import React, { createContext, useEffect, useState } from "react";
import type { ToDoItem } from "types_shared/todoItem";
import { todoDb } from "@db/todoDb";
import { v4 as uuidv4 } from "uuid";

interface ToDoContextValue {
  todos: ToDoItem[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const ToDoContext = createContext<ToDoContextValue | undefined>(undefined);

export const ToDoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<ToDoItem[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const stored = await todoDb.getAll();
      setTodos(stored);
    };
    loadTodos();
  }, []);

  const addTodo = async (title: string) => {
    const newTodo: ToDoItem = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: Date.now(),
    };
    await todoDb.add(newTodo);
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = async (id: string) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      await todoDb.update({ ...todo, completed: !todo.completed });
    }
  };

  const deleteTodo = async (id: string) => {
    await todoDb.delete(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return <ToDoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>{children}</ToDoContext.Provider>;
};
