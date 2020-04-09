import React from 'react';
import './MainContainer.css';

interface ContainerProps {
  name: string;
}

export const MainContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Welcome to our application</p>
    </div>
  );
};


