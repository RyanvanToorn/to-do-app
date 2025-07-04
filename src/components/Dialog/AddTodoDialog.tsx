import React, { useState } from "react";
import { Dialog } from "./Dialog";
import { DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Button } from "@components/Button";
import { TextField } from "@components/TextField";
import Styles from "./Dialog.module.css";

export const AddTodoDialog = () => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState("My current task");

  const handleSave = () => {
    // Save logic here
    console.log("Saved:", todo);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Add ToDo Item
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} className={`${Styles.AddTodoDialog}`} extendedClass="add-todo-dialog">
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
          <TextField fullWidth value={todo} onChange={(e) => setTodo(e.target.value)} label="Todo" margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
