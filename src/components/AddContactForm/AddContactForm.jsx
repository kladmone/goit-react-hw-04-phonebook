import React, { useState } from 'react';
import css from './AddContactForm.module.css';
export const AddContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = {
      name,
      number,
    };
    handleAddContact(formData);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className={css.formLabel}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
