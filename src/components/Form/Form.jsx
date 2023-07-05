import React, { useState } from 'react';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { getContacts } from 'redux/contacts/selectors';
import { addContactsThunk } from 'redux/contacts/contactsThunk';


const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const contacts = useSelector(getContacts)
const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const contact = {
    id: nanoid(),
    name,
    number,
  };

  const formSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');
    if(contacts.find(contact=>contact.name === name)){
      return toast.warning('this contact is already exists in phoneBook')
    }
    dispatch(addContactsThunk(contact))
  };

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  return (
    <form onSubmit={formSubmit} className={css.form}>
      <label htmlFor={inputNameId}>
        <span className={css.inputLabel}> Name</span>
        <input
          className={css.formInput}
          id={inputNameId}
          onChange={handleInputChange}
          value={name}
          type="text"
          name="name"
          required
        />
      </label>

      <label htmlFor={inputNumberId}>
        <span className={css.inputLabel}>Tel</span>
        <input
          className={css.formInput}
          id={inputNumberId}
          onChange={handleInputChange}
          value={number}
          type="tel"
          name="number"
          required
        />
      </label>
      <button type="submit" className={css.addBtn}>
        <BsFillTelephonePlusFill /> Add contact
      </button>
    </form>
  );
};

export default Form;
