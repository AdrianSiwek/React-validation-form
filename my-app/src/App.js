import './App.css';
import React, { Component } from 'react';


class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    accept: false,
    message: '',

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    },
  } 

  messages = {
    username_incorrect: 'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji',
    email_incorrect: 'Email nie zawiera @',
    password_incorrect: 'Hasło musi być dłuższe niż 8 znaków',
    accept_incorrect: 'Nie zakceptowałeś regulaminu'
  }

  handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    if (type === 'text' || type === 'email' || type === 'password') {
      const value = event.target.value;
      this.setState({ [name]: value })
    } else if (type === 'checkbox') {
      const checked = event.target.checked;
      this.setState({[name]: checked})
    }
    
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const validation = this.validateForm();
    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        password: '',
        accept: false,
        message: 'Formularz został wysłany',

        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        },
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        },
      })
    }
  }

  validateForm = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;
    if (this.state.username.length > 10 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }
    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }
    if (this.state.password.length >= 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && password && accept) {
      correct= true;
    }
    return ({
      username,
      email,
      password,
      accept,
      correct
    })
  }

  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => this.setState({ message: '' }), 3000)
    }
  }

  render() { 
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imię
            <input
              type="text"
              id="user"
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && <span>{ this.messages.username_incorrect}</span>}
          </label>
          <label htmlFor="email">Twój email
            <input
              type="email"
              id="email"
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && <span>{ this.messages.email_incorrect}</span>}
          </label>
          <label htmlFor="user">Twoje hasło
            <input
              type="password"
              id="password"
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password && <span>{ this.messages.password_incorrect}</span>}
          </label>
          <label htmlFor="accept">
            <input
              type="checkbox"
              id='accept'
              name='accept'
              checked={this.state.accept}
              onChange={this.handleChange}
            />Wyrażam zgodę na Regulamin
          </label>
          {this.state.errors.accept && <span>{ this.messages.accept_incorrect}</span>}
          <button>Zapisz</button>
        </form>
        {this.state.message && <h4>{this.state.message}</h4>}
      </div>
    );
  }
}

 
export default App;


