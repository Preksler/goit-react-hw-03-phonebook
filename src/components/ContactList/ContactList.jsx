import PropTypes from 'prop-types';
import ContactElement from './ContactElement/ContactElement';
import css from "./ContactList.module.css"

const ContactList = ({ contactList, onDeleted }) => {
    return (
        <ul className={css.list}>
            {contactList.map(({ id, name, number }) => {
                return (
                    <ContactElement 
                        contactItem={{ id, name, number }}
                        key={id}
                        onDeleted={onDeleted}
                    />
                    
                )
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contactList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}

export default ContactList;