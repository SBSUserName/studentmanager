import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteStudent } from "../../actions/studentActions"
import "./student.scss";

class Student extends Component {
    state = {
        showInfo: false,
    };

    showHideInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        });
    };

    deleteStudent = (id) => {
        this.props.deleteStudent(id)
    };

    render() {
        const { id, name, username, phone } = this.props.student;
        const { showInfo } = this.state;

        return (
            <div className="student-card">
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
                            this.deleteStudent(id)
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
    }
}

Student.propTypes = {
    student: PropTypes.object.isRequired,
    deleteStudent: PropTypes.func.isRequired
}

export default connect(null, { deleteStudent })(Student);