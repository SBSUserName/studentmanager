import React, { Component } from 'react'
import Student from "./Student";
import { Consumer } from "../../context";

export default class Students extends Component {
    render() {
        return (
            <Consumer>
                {(value) => {
                    const { students } = value;
    
                    return (
                        <div className="row py-5">
                            {students.map((student) => (
                                <div className="col-4" key={student.id}>
                                    <Student student={student} />
                                </div>
                            ))}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

