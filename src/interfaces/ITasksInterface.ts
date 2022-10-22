export interface ITask {
  id: string;
  status: boolean;
  content: string;
}

export interface ITasksProps {
  task?: ITask;
}

export interface ITaskCardProps {
  task: ITask;
  changeStatusTask: (id: string, status: boolean) => void;
  deleteTask: (id: string) => void;
}
