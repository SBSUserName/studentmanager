import React, { Component } from "react";
import TextInputGroup from "../textInputGroup/TextInputGroup";
import axios from "axios";

export default class EditStudent extends Component {
    state = {
        name: "",
        username: "",
        phone: "",
        errors: {},
    };

    // async componentDidMount() {
    //     const { id } = this.props.match.params

    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

    //     const student = res.data

    //     this.setState({
    //         name: student.name,
    //         username: student.username,
    //         phone: student.phone
    //     })
    // }

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

        const updStudent = {
            name,
            username,
            phone,
        };

        this.props.history.push("/");
    };

    render() {
        const { name, username, phone, errors } = this.state;

        return (
            <div className="add-student-wrapper">
                <h2 className="title">Add Student</h2>

                <form onSubmit={this.submitStudent} className="student-form">
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
