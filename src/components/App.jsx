import { Component } from "react";
import { nanoid } from 'nanoid'

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import ContactFilter from "./ContactFilter/ContactFilter";
import Container from "./Container/Container";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
