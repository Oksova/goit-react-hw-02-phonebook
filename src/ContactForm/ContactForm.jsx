import React, { Component } from 'react';
import shortid from 'shortid';
import s from './ContactsForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.onSubmitForm}>
        <label className={s.formLabel} htmlFor={this.nameInputId}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label className={s.formLabel} htmlFor={this.numberInputId}>
          Number
          <input
            className={s.formInput}
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleNameChange}
            id={this.numberInputId}
          ></input>
        </label>
        <button className={s.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
