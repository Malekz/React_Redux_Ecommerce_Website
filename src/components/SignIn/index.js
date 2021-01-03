import React, { Component } from 'react';

// Components
import FormInput from './../../components/forms/FormInput';
import Button from './../../components/forms/Button';
import { signInWithGoogle, auth } from './../../firebase/utils';

// Styling
import './styles.scss';

const initialState = {
  email: '',
  password: '',
};

class SignIn extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="signin">
        <div className="container">
          <h2>Login</h2>
          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange}
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={this.handleChange}
              />

              <Button type="submit">Login</Button>

              <div className="socialSignin">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
