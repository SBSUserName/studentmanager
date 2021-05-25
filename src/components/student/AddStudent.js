import React, { Component } from "react";
import TextInputGroup from "../textInputGroup/TextInputGroup";
import { v1 as uuidv1 } from "uuid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addStudent } from "../../actions/studentActions";

class AddStudent extends Component {
    state = {
        name: "",
        username: "",
        phone: "",
        errors: {},
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitStudent = (e) => {
        e.preventDefault();

        const { name, username, phone } = this.state;

        if (name === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
        }

        if (username === "") {
            this.setState({ errors: { username: "Username is required" } });
            return;
        }

        if (phone === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }

        const newStudent = {
            id: uuidv1(),
            name,
            username,
            phone,
        };

        this.props.addStudent(newStudent);

        this.props.history.push("/");
    };

    render() {
        const { name, username, phone, errors } = this.state;

        return (
            <div className="add-student-wrapper">
                <h2 className="title">Add Student</h2>

                <form
                    onSubmit={this.submitStudent}
                    className="student-form"
                >
                    <TextInputGroup
                        name="name"
                        label="Name"
                        value={name}
                        placeholder="Enter Name"
                        onChange={this.onChange}
                        error={errors.name}
                    />

                    <TextInputGroup
                        name="username"
                        label="Username"
                        value={username}
                        placeholder="Enter Username"
                        onChange={this.onChange}
                        error={errors.username}
                    />

                    <TextInputGroup
                        name="phone"
                        label="Phone"
                        value={phone}
                        placeholder="Enter Phone"
                        onChange={this.onChange}
                        error={errors.phone}
                    />

                    <input type="submit" />
                </form>
            </div>
        );
    }
}

AddStudent.propTypes = {
    addStudent: PropTypes.func.isRequired
}

export default connect(null, { addStudent })(AddStudent);