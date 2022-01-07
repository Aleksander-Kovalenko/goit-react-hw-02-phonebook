import { nanoid } from "nanoid";
import React, { Component } from "react";
import { ContactsList } from "../ContactsList/ContactsList";

export class Form extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  FilterList = [];

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // onSearchNameInState = (target) => {
  //   return this.state.contacts.some((item) => item.name === target);
  // };

  handleFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
    this.FilterList = [...this.state.contacts].filter(({ name }) =>
      name.includes(value)
    );
  };

  handleSubmit = (e) => {
    const id = nanoid(5);
    e.preventDefault();
    // const checkedName = this.onSearchNameInState(this.state.name);

    // if (checkedName) {
    //   alert("Sorry, but this Name is in this Phone Book ");
    //   return this.reset();
    // }

    // const contacts = [...this.state.contacts];
    const newContact = {
      id: id,
      name: this.state.name,
      number: this.state.number,
    };
    // contacts.push(newContact);
    // this.setState({ contacts: contacts });

    this.props.onSubmit(newContact);
    this.reset();
  };

  reset() {
    this.setState({ name: "", number: "" });
  }

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        {/* Дополнительно: стедлать переиспользываемый компонент label и input*/}

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <label>
            <span className="label-form">Name</span>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
            />
          </label>

          <label>
            <span className="label-form">Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
              value={number}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <label htmlFor="">
          <span className="label-form">Search contact</span>
          <input
            type="text"
            name="filter"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleFilter}
            value={filter}
          />
        </label>

        {/* <h3>Contacts</h3> */}
        {/* {contacts.length >= 0 && (
          <ContactsList
            contacts={this.FilterList.length > 0 ? this.FilterList : contacts}
          />
        )} */}
      </>
    );
  }
}
