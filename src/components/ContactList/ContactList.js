import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
import LoaderSpinner from 'components/Loader';
import { contactsSelectors } from 'redux/contacts';

const ContactList = () => {
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const loading = useSelector(contactsSelectors.getLoading);

    return (
        <ul className={s.contactList}>
            {/* отображает отсутствие контаков */}
            {contacts.length === 0 && (
                <p className={s.contactsNotFound}>
                    Oops, no contacts, add some
                </p>
            )}

            {/* отображает загрузку контаков */}
            {loading && <LoaderSpinner />}

            {contacts.map(({ id, name, number }) => (
                <li key={id} className={s.contactItem}>
                    <ContactItem name={name} number={number} id={id} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
