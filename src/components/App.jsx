import { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = formData => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...formData, id: nanoid() }],
      };
    });
  };

  handleChangeFilter = event => {
    const value = event.target.value;
    this.setState({ filter: value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stringifiedContacts) ?? [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContactForm handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
