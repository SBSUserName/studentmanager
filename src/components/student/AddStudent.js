import React, { Component } from "react";
import TextInputGroup from "../textInputGroup/TextInputGroup";
import { v1 as uuidv1 } from "uuid";
import { Consumer } from "../../context";
import axios from "axios";

export default class AddStudent extends Component {
    state = {
        name: "",
        username: "",
        phone: "",
        errors: {},
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitStudent = async (dispatch, e) => {
        e.preventDefault();

        console.log(dispatch);

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
            phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newStudent)

        dispatch({type: 'ADD_STUDENT', payload: res.data})

        this.props.history.push('/')
    };

    render() {
        const { name, username, phone, errors } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="add-student-wrapper">
                            <h2 className="title">Add Student</h2>

                            <form
                                onSubmit={this.submitStudent.bind(this, dispatch)}
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
                }}
            </Consumer>
        );
    }
}
