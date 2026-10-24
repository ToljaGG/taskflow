import styles from './Modal.module.css';

interface ModalProps {
    title?: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

export function Modal({ 
    title,
    children, 
    onClose 
}: ModalProps) {
    return (
        <div className={styles['overlay']} onClick={onClose}>
            <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
                <button className={styles['close-button']} onClick={onClose}>×</button>
                {title && <h2 className={styles['title']}>{title}</h2>}
                {children}
            </div>
        </div>
    );
}