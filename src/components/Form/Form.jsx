import { nanoid } from "nanoid";
import React, { Component } from "react";
import { ContactsList } from "../ContactsList/ContactsList";

export class Form extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  // ПЕРЕДЕЛАТЬ ДВЕ ФУНКЦИИ КАК НА ВИДИО
  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };
  handleNumber = (e) => {
    const { value } = e.target;
    this.setState({ number: value });
  };
  // ФУНКЦИИ С ВЕРХУ

  handleButtonClick = (e) => {
    e.preventDefault();
    const contacts = [...this.state.contacts];
    const id = nanoid(5);

    const newContact = {
      id: id,
      name: this.state.name,
      number: this.state.number,
    };

    contacts.push(newContact);
    this.setState({ contacts: contacts });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleButtonClick}>
          <label htmlFor="">
            <span className="label-form">Name</span>
            <input
              onChange={this.handleInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
            />
          </label>
          <label htmlFor="">
            <span className="label-form">Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleNumber}
              value={number}
            />
          </label>
          <button type="button" onClick={this.handleButtonClick}>
            Add contact
          </button>

          <h3>Contacts</h3>
          {contacts.length > 0 && <ContactsList contacts={contacts} />}
        </form>
      </>
    );
  }
}
