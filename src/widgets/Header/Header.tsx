import styles from './Header.module.css';
import { Button } from '@/shared/ui/Button';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TaskFlow</h1>
      <div className={styles.buttons}>
        <Button>Profile</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
};