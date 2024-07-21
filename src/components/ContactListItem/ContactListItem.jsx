import css from './ContactListItem.module.css';
import { useState } from 'react';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = () => {
    setIsDeleting(true);

    setTimeout(() => {
      dispatch(deleteContact(contact.id));
    }, 1200);
  };

  return (
    <li className={clsx(css['contact-list-item'], { [css['fade-out']] : isDeleting } )}>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
