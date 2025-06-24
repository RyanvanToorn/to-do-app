export interface ToDoItem {
  id: BigInteger;
  title: string;
  description: string;
  createdOn: Date;
  lastModifiedOn: Date;
  dueOn?: Date;
  isDeleted: boolean;
  DeletedOn: Date;
}
