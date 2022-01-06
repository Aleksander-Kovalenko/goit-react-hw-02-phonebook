import React, { Component } from "react";
import "./App.css";
import { Form } from "./Form/Form";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  handleSubmitForm = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        {/* Добавить состояние которое форма отправляет при сабмите */}
        <Form
          onSubmit={this.handleSubmitForm}
          contactsList={this.state.contacts}
        />
      </>
    );
  }
}

export default App;
