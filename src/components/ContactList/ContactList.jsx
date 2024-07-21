import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts?.filter(c => filter
    .findBy === '' || c[filter.findBy].toLowerCase().includes(filter.value)) || [];
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div className={css['contact-list']}>
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </ul>
    </div>
  );
};
