import React, { Component } from 'react';
import css from './AddContactForm.module.css';

export class AddContactForm extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    const formData = {
      name,
      number,
    };
    this.props.handleAddContact(formData);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleFormSubmit}>
        <label className={css.formLabel}>
          <span>Name</span>
          <input type="text" name="name" required />
        </label>
        <label className={css.formLabel}>
          <span>Number</span>
          <input type="tel" name="number" required />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
