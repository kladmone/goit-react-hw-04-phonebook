import css from './ContactList.module.css';
const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.delBtn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
