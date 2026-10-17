import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { Button } from '@/shared/ui/Button';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1><Link to="/">TaskFlow</Link></h1>
      <div className={styles.buttons}>
        <Button onClick={() => navigate('/profile')}>Profile</Button>
        <Button onClick={() => navigate('/login')}>Login</Button>
        <Button onClick={() => navigate('/register')}>Register</Button>
      </div>
    </header>
  );
};