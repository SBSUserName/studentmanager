import React, { Component } from "react";
import Student from "./Student";
import PropTypes from 'prop-types';
import { getStudents } from "../../actions/studentActions";
import { connect } from "react-redux";


class Students extends Component {
    componentDidMount() {
        this.props.getStudents();
    }

    render() {
        const { students } = this.props;
        return (
            <div className="row py-5">
                {students.map((student) => (
                    <div className="col-4" key={student.id}>
                        <Student student={student} />
                    </div>
                ))}
            </div>
        );
    }
}

Students.propTypes = {
    students: PropTypes.array.isRequired,
    getStudents: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    students: state.student.students
})

export default connect(mapStateToProps, {getStudents})(Students)