import React from 'react';
import { FormContainter } from './FormContainer.module.css';

const FormContainer = ({ children }) => {
  return <div className={FormContainter}>{children}</div>;
};

export default FormContainer;
