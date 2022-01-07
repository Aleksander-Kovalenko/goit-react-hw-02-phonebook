import React, { Component } from "react";
import "./App.css";
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  FilterList = [];
  Contacts = [...this.state.contacts];

  handleSubmitForm = (data) => {
    const checkedName = this.onSearchNameInState(data);

    if (checkedName) {
      return alert("Sorry, but this Name is in this Phone book");
    }
    this.createNewContact(data);
  };

  onSearchNameInState = (target) => {
    console.log();
    return this.state.contacts.some((item) => item.name === target.name);
  };

  createNewContact = (contact) => {
    this.Contacts.push(contact);
    this.setState({ contacts: this.Contacts });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmitForm} />
        <h3>Contacts</h3>
        {contacts.length >= 0 && (
          <ContactsList
            contacts={this.FilterList.length > 0 ? this.FilterList : contacts}
          />
        )}
      </>
    );
  }
}

export default App;
