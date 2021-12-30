import { nanoid } from "nanoid";
import { Component } from "react";

module.id = nanoid();

export class Form extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contacts = [...this.state.contacts];
    contacts.push(e.currentTarget.name.value);
    this.setState({ contacts: contacts });
    e.currentTarget.reset();
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            <span className="label-form">Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button></button>

          <ul>
            {this.state.contacts.map((item) => (
              <li key={nanoid(10)}>{item}</li>
            ))}
          </ul>
        </form>
      </>
    );
  }
}
