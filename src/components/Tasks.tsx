import { useEffect, useState } from 'react';

import styles from './Tasks.module.css';

import clipboardImg from '../assets/imgs/clipboard.svg';

import { TaskCard } from './TaskCard';

import { ITasksProps, ITask } from '../interfaces/ITasksInterface';

const Tasks: React.FC<ITasksProps> = ({ task }: ITasksProps) => {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  const onCreateTask = (task: ITask): void => {
    setTasks(state => {
      const updatedTasks = state.filter(item => item.id !== task.id);

      return [...updatedTasks, task];
    });
  };

  const changeStatusTask = (id: string, status: boolean): void => {
    const listTasksCompleteds = tasks.filter(item => item.id === id)[0];

    const updatedTasks = tasks.map(item => {
      if(item.id === id) {
        const updated: ITask = {
          id: listTasksCompleteds.id,
          status,
          content: listTasksCompleteds.content
        };

        return updated;
      }

      return item;
    });

    if(listTasksCompleteds) {
      setTasksCompleted(state => status ? state +1 : state -1);
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (id: string): void => {
    const listTask = tasks.filter(item => item.id !== id);
    const taskToDelete = tasks.filter(item => item.id === id)[0];

    setTasksCompleted(state => {
      if(taskToDelete.status)
        return state -1;
      return state;
    });

    setTasks(listTask);
  };

  useEffect(() => {
    if(task) {
      onCreateTask(task);
    }
  }, [task]);

  return (
    <main className={styles.panel}>
      <header>
        <div>
          <span className={styles.blue}>Tarefas criadas</span>
          
          <div className={styles.counter}>
            <span>{tasks.length}</span>
          </div>
        </div>

        <div>
          <span className={styles.purple}>Concluídas</span>

          <div className={styles.counter}>
            {tasksCompleted > 0 
              ? <span>{`${tasksCompleted} de ${tasks.length}`}</span> 
              : <span>{tasksCompleted}</span>}
          </div>
        </div>
      </header>

      {tasks.length === 0 ? (
        <section className={styles.board}>
          <img src={clipboardImg} alt="Clipboard" />
        
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Cire tarefas e organize seus itens a fazer</span>
        </section>
      ) : (
        <section>
          {tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              changeStatusTask={changeStatusTask} 
              deleteTask={deleteTask}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export { Tasks };
