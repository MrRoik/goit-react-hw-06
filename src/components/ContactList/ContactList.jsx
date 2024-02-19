import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import selectedContacts from '../../redux/selectors';
import deleteContact from '../../redux/contactsSlice';

const ContactList = ({ id }) => {
  const contacts = useSelector(selectedContacts);
  const dispatch = useDispatch();
  const handleDelItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.itemCard}>
      {contacts.map(item => {
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
