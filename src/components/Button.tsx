// src/components/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from '../types/Button';
import styles from '../styles/Button.module.css';

const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;