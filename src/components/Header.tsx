import styles from './Header.module.css';

import rocketImg from '../assets/imgs/rocket.svg';
import logoApp from '../assets/imgs/todo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <img className={styles.rocket} src={rocketImg} alt="Rocket" />
        <img src={logoApp} alt="Logo App" />
      </div>
    </header>
  );
};

export { Header };