import { Component } from "react";
import css from "./ContactForm.module.css"

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    }



    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label className={css.form__lable}>Name
                    <input
                        className={css.form__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label className={css.form__lable}>Number
                    <input
                        className={css.form__input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button type="submit" className={css.form__btn}>
                    Add contact
                </button>
            </form>
           
        )
    }
}

export default ContactForm;