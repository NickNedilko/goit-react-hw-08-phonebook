import React from 'react';
import css from './Contacts.module.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';



const ContactsPage = () => {


  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <Contacts  />
   
    </div>
  );
};

export default ContactsPage;