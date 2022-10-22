import { ChangeEvent, useState } from 'react';

import styles from './TaskCard.module.css';

import trashIcon from '../assets/imgs/trash.svg';

import { ITaskCardProps } from '../interfaces/ITasksInterface';

const TaskCard: React.FC<ITaskCardProps> = ({ 
  task, 
  changeStatusTask,
  deleteTask
}: ITaskCardProps) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const onChangeStatusTask = (status: boolean): void => {
    changeStatusTask(task.id, status);
  };

  const handleChangeStatusTask = (event: any): void => {
    setCompleted(event.target.checked);

    onChangeStatusTask(event.target.checked);
  };

  const onDelete = (): void => {
    deleteTask(task.id);
  };

  return (
    <div className={styles.card}>
      <div>
        <input 
          type="checkbox" 
          name="completed"
          onChange={handleChangeStatusTask}
        />
      </div>

      <div>
        {completed ? <s>{task.content}</s> : <p>{task.content}</p>}
      </div>

      <div>
        <button type="submit" onClick={onDelete}>
          <img src={trashIcon} alt="Trash Img" />
        </button>
      </div>
    </div>
  );
};

export { TaskCard };
