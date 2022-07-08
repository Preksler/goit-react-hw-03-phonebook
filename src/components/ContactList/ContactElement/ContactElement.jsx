import PropTypes from 'prop-types';
import css from "./ContactElement.module.css"

const ContactElement = ({ contactItem, onDeleted }) => {
    const { id, name, number } = contactItem;
    return (
        <li
            key={id}
            className={css.list__item}>
            <span className={css.list__name}>{name}:</span>
            <span className={css.list__number}>{number}</span>
            <button
                className={css.list__btn}
                type="button"
                id={id}
                onClick={e => {
                    onDeleted(e.currentTarget.id)
                }}>
                Delete
            </button>
        </li>
    )
}

ContactElement.propTypes = {
    contactItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })
}

export default ContactElement;