import { openDB } from "idb";
import type { ToDoItem } from "types_shared/todoItem";

const DB_NAME: string = "todo-app-db";
const STORE_NAME: string = "todos";

const dbPromise = openDB(DB_NAME, 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    }
  },
});

export const todoDb = {
  async getAll(): Promise<ToDoItem[]> {
    const db = await dbPromise;
    return await db.getAll(STORE_NAME);
  },
  async add(todo: ToDoItem): Promise<void> {
    const db = await dbPromise;
    await db.add(STORE_NAME, todo);
  },
  async update(todo: ToDoItem): Promise<void> {
    const db = await dbPromise;
    await db.put(STORE_NAME, todo);
  },
  async delete(id: string): Promise<void> {
    const db = await dbPromise;
    await db.delete(STORE_NAME, id);
  },
  async clear(): Promise<void> {
    const db = await dbPromise;
    await db.clear(STORE_NAME);
  },
};
