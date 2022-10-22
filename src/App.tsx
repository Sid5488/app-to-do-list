import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuid } from 'uuid';

import './styles/global.css';

import styles from './App.module.css';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

import { ITask } from './interfaces/ITasksInterface';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [newTask, setNewTask] = useState<ITask>();

  const buttonBlock: boolean = task.length === 0;

  const handleCreateTask = (event: FormEvent): void => {
    event.preventDefault();

    setNewTask({ 
      id: uuid(), 
      status: false, 
      content: task
    });

    setTask('');
  };

  const onChangeTask = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <form>
          <input 
            className={styles['input-todo']}
            placeholder="Adicione uma nova tarefa" 
            onChange={onChangeTask}
            value={task}
            type="text" 
            required
          />

          <button 
            type="submit" 
            className={buttonBlock ? styles['button-block'] : ''}
            onClick={handleCreateTask}
            disabled={buttonBlock}
          >
            Criar 
            <PlusCircle size={20} />
          </button>
        </form>

        <Tasks task={newTask} />
      </div>
    </>
  );
};

export { App };
