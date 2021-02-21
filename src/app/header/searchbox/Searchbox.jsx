import React from 'react';
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { Icon, SearchForm } from './Searchbox.module.css';

const Searchbox = () => {
  return (
    <div className='d-flex'>
      <Form.Control id='inlineFormInput' placeholder='Search' />
      <AiOutlineSearch className={Icon} />
    </div>
  );
};

export default Searchbox;
