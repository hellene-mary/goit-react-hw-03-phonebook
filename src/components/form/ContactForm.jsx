import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handlerChange = evt => {
    // this.setState({ name: evt.currentTarget.value });
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handlerSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit} className={css.form}>
        <ul className={css.formList}>
          <li className={css.formListItem}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handlerChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </li>
          <li>
            <p>Contact</p>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handlerChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </li>
        </ul>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
