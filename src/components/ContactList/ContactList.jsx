import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectedContacts, selectedFilters } from '../../redux/selectors';
//import selectedFilters from '../../redux/selectors';
import deleteContact from '../../redux/contactsSlice';

const ContactList = ({ id }) => {
  const contacts = useSelector(selectedContacts);
  const dispatch = useDispatch();
  const handleDelItem = () => {
    dispatch(deleteContact.deleteContact(id));
  };

  const filter = useSelector(selectedFilters);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  //visibleContacts.map ...

  return (
    <ul className={css.itemCard}>
      {visibleContacts.map(item => {
        return (
          <li key={item.id} className={css.listCard}>
            <Contact onDelete={handleDelItem} item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
/*
export const ContactList = ({ contact, onDel }) => {
  return (
    <ul className={css.itemCard}>
      {contact.map(item => {
        return (
          <li key={item.id} className={css.listCard}>
            <Contact onDelete={onDel} item={item} />
          </li>
        );
      })}
    </ul>
  );
};
*/
