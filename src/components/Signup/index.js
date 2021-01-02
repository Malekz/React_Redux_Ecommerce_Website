import React, { Component } from 'react';

// Component
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

// Styles
import './styles.scss';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { displayName } = this.state;
    return (
      <div className="signup">
        <div className="wrapper">
          <h2>Signup</h2>

          <form>
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full name"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
