export enum TodoStatus {
  Cancelled = "CANCELLED",
  Completed = "COMPLETED",
  Ongoing = "ONGOING",
  Overdue = "OVERDUE",
}

//Meta data which should serve to bind colors or other variables to a status record.
export const TodoStatusMeta: Record<
  TodoStatus,
  {
    label: string;
    color: string;
  }
> = {
  [TodoStatus.Cancelled]: { label: "Cancelled", color: "grey" },
  [TodoStatus.Completed]: { label: "Completed", color: "green" },
  [TodoStatus.Ongoing]: { label: "Ongoing", color: "white" },
  [TodoStatus.Overdue]: { label: "Overdue", color: "red" },
};
