import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/selectors';
import { setFilter } from '../redux/filterSlice';

export function App() {
  const dispatch = useDispatch();
  const { findBy, value } = useSelector(getFilter);

  const handleFindBy = e => {
    e.preventDefault();
    dispatch(setFilter({ value, findBy: findBy === 'name' ? 'number' : 'name' }))
  };

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <div className="phonebook-container">
          <div>
          <h2>New Contact</h2>
          <ContactForm />
          </div>
          <div>
            <h2>Contacts</h2>
            <div style={{display: 'flex', flexDirection: 'row'}}>
            <button type="button" style={{ width: '75px' }} onClick={handleFindBy}>{findBy === 'name' ? 'ABC' : '123'}</button>
            <Filter />
            </div>
            <ContactList />
          </div>
        </div>
      </div>
    );

}
