import { Component } from "react";
import { nanoid } from 'nanoid'

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import Container from "./Container/Container";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      try {
        this.setState({ contacts: JSON.parse(savedContacts) });
      }
      catch (e) {
        console.log(e);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmit = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const checkName = contacts.find(contact => contact.name === name);
      if (checkName) {
        alert(`${name} is already in contacts`);
        return contacts;
      }
      return {
        contacts: [
          {
            id: nanoid(),
            name,
            number,
          },
          ...contacts
        ]
      }
    })
  }

  handleFilterChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  filterContactsName = value => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(value.toLowerCase())
    })
  }

  deleteContact = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const afterDeleted = contacts.filter(contact => contact.id !== id);
      return { contacts: [...afterDeleted] }
    })
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit = {this.formSubmit} />
        <h2>Contacts</h2>
        <ContactFilter
          title="Find contacts by name"
          value={this.state.filter}
          onChange={this.handleFilterChange} />
        <ContactList
          contactList={this.filterContactsName(this.state.filter)}
          onDeleted={this.deleteContact} />
      </Container>
    )
  }
}
