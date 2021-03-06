import "./Signup.scss";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../../components/LoginComponents/InputBox/index";

class Signup extends Component {
    state = {
        errorMessage: "",
        success: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        axios
            .post("http://localhost:8080/api/v1/users/register", {
                email: event.target.email.value,
                position: event.target.position.value,
                password: event.target.password.value,
                first_name: event.target.first_name.value,
                last_name: event.target.last_name.value,
                phone: event.target.phone.value,
                address: event.target.address.value,
            })
            .then(() => {
                this.setState({ success: true, errorMessage: "" });
                event.target.reset();
            })
            .catch((error) => {
                this.setState({ success: false, errorMessage: error.response.data });
            });
    };

    render() {
        return (
            <main className="signup-page">
                <form className="signup" onSubmit={this.handleSubmit}>
                    <h1 className="signup__title">Sign up</h1>

                    <Input type="text" name="first_name" label="First name" />
                    <Input type="text" name="last_name" label="Last name" />
                    <Input type="text" name="phone" label="Phone" />
                    <Input type="text" name="address" label="Address" />
                    <Input type="text" name="email" label="Email" />
                    <Input type="text" name="position" label="Position" />
                    <Input type="password" name="password" label="Password" />

                    <button className="signup__button">Sign up</button>

                    {this.state.success && <div className="signup__message">Signed up!</div>}
                    {this.state.errorMessage && <div className="signup__message">{this.state.errorMessage}</div>}
                </form>
                <p className="signup__log-in-message">
                    Have an account? <Link to="/" className="signup__log-in-message">Log in</Link>
                </p>
            </main>
        );
    }
}

export default Signup;
