import { nanoid } from "nanoid";
import React, { Component } from "react";
import { ContactsList } from "../ContactsList/ContactsList";

module.id = nanoid();

export class Form extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleForm = (e) => {
    const { value, name } = e.target;
    const contacts = [...this.state.contacts];
    contacts.push(value);
    console.log(contacts.length);

    this.setState({ [name]: contacts.length ? contacts : value });
  };
  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <span className="label-form">Name</span>
            <input
              onChange={this.handleForm}
              type="text"
              name="contacts"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={contacts}
            />
          </label>
          <button type="button" onChange={this.handleForm}>
            Add contact
          </button>

          <h3>Contacts</h3>
          {contacts.length > 0 && <ContactsList value={contacts} />}
        </form>
      </>
    );
  }
}
