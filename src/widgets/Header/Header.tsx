import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import styles from './Header.module.css';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1><Link to="/" className={styles['link']}>TaskFlow</Link></h1>
      <div className={styles.buttons}>
        <Button onClick={() => navigate('/profile')}>Profile</Button>
        <Button onClick={() => navigate('/login')}>Login</Button>
        <Button onClick={() => navigate('/register')}>Register</Button>
      </div>
    </header>
  );
};