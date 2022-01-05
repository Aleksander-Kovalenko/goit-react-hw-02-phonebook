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

  // ПЕРЕДЕЛАТЬ ТРИ ФУНКЦИИ КАК НА ВИДИО
  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };
  handleNumber = (e) => {
    const { value } = e.target;
    this.setState({ number: value });
  };
  handleFilter = (e) => {
    const { value } = e.target;
    const { contacts } = this.state;

    this.setState({ filter: value });
    const oldArr = [...this.state.contacts];

    const searchNum = oldArr.filter(({ name }) => name.includes(value));
    console.log(searchNum);
    return searchNum;
    // console.log(oldArr);

    // this.setState({
    //   contacts: searchNum || oldArr,
    // });

    // this.setState({ contacts: searchNum });
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
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        {/* Оптимизировать форму, сделав переиспользываемый компонент label и input */}
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
        </form>

        <h3>Contacts</h3>
        <label htmlFor="">
          <span className="label-form">Search Number</span>
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

        {contacts.length >= 0 && <ContactsList contacts={contacts} /> &&
          filter.length && <ContactsList contacts={this.handleFilter} />}
      </>
    );
  }
}
