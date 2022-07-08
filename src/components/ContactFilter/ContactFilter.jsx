import PropTypes from 'prop-types';
import css from "./ContactFilter.module.css"

const ContactFilter = ({ title, value, onChange}) => {
    return (
        <label className={css.form__lable}>
            {title}
            <input
                className={css.form__input}
                type="text"
                name='filter'
                value={value}
                onChange={onChange}>
            </input>
        </label>
    )
}

ContactFilter.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default ContactFilter;