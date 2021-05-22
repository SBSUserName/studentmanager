import axios from "axios";
import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
// import StudentImage from "../../assets/images/default_student.png";
import "./student.scss";

export default class Student extends Component {
    state = {
        showInfo: false,
    };

    showHideInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        });
    };

    deleteStudent = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        dispatch({ type: "DELETE_STUDENT", payload: id });
    };

    render() {
        const { id, name, username, phone } = this.props.student;
        const { showInfo } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;

                    return (
                        <div className="student-card">
                            {/* <div className="mb-3 text-center">
                                <img
                                    src={StudentImage}
                                    alt="student"
                                    className="img-fluid "
                                />
                            </div> */}

                            <div className="header-info">
                                <div
                                    className="d-flex header-title"
                                    onClick={this.showHideInfo}
                                >
                                    <h3 className="student-name me-2">
                                        {name}
                                    </h3>
                                    <i className="fas fa-sort-down d-flex align-items-center"></i>
                                </div>

                                <div className="d-flex">
                                    <Link
                                        className="d-flex align-items-center close-icon"
                                        to={{
                                            pathname: `edit/${id}`,
                                            state: {
                                                editProps: this.props.student
                                            }
                                        }}
                                    >
                                        <i className="fas fa-pencil-alt" style={{cursor: "pointer", color: "black"}}></i>
                                    </Link>
                                    <div
                                        className="d-flex align-items-center close-icon"
                                        onClick={() =>
                                            this.deleteStudent(id, dispatch)
                                        }
                                    >
                                        <i className="fas fa-times text-danger"></i>
                                    </div>
                                </div>
                            </div>

                            {showInfo ? (
                                <div className="detailed-info">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Username: {username}
                                        </li>

                                        <li className="list-group-item">
                                            Phone: {phone}
                                        </li>
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
