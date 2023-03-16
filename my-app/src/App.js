import './App.css';
import React, { Component } from 'react';


class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    accept: false,

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
      </div>
    );
  }
}
 
export default App;


