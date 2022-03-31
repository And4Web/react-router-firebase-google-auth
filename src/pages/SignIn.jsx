import React from "react";
import "./pages.styles.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class SignIn extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
    console.log(this.state.email);
  };

  handleSubmit = (e) => {
    let history = useHistory();
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    history.push("/");
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="signIN">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            label="Email"
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Enter Your Email"
            onChange={this.handleChange}
          />
          <input
            required
            name="password"
            value={this.state.value}
            label="Password"
            type="password"
            placeholder="Enter Password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <button>Sign In With Google</button>
      </div>
    );
  }
}

export default withRouter(SignIn);
