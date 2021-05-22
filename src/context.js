import React, { Component } from 'react';
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "DELETE_STUDENT":
            return {
                ...state,
                students: state.students.filter(
                    (student) => student.id !== action.payload
                ),
            };
        case "ADD_STUDENT":
            return {
                ...state,
                students: [action.payload, ...state.students]
            };
        case "EDIT_STUDENT":
            return {
                ...state,
                students: state.students.map(student => 
                    student.id === action.payload.id ?
                        student = action.payload
                    :
                        student
                )
            }
        default:
            return state;
    }
}

export default class Provider extends Component {
    state = {
        students: [],
        dispatch: (action) => {
            this.setState((state) => reducer(state, action));
        }
    }

    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')

        this.setState({ students: res.data })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
