import { CheckCircle, Trash } from 'phosphor-react';
import styles from './task.module.css';

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle weight="fill" /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}