import React from 'react';
import { Task } from '../types';

interface Props {
  task: Task;
}

const Card: React.FC<Props> = ({ task }) => {
  return (
    <div
      style={{
        padding: '1rem',
        marginBottom: '1rem',
        background: '#fff',
        border: '5px solid #ccc',
        borderRadius: '15px',
      }}
    >
      {task.content}
    </div>
  );
};

export default Card;
