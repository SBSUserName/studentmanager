import { ADD_STUDENT, DELETE_STUDENT, GET_STUDENTS } from "../actions/types";
import Student from "../components/student/Student";

const initialState = {
    students: [
        {
            id: 1,
            name: 'Kushal Shrestha',
            username: "mks",
            phone: "123-123-1234"
        },
        {
            id: 2,
            name: 'Bonish Koirala',
            username: "bonkon",
            phone: "456-456-4567"
        },
        {
            id: 3,
            name: 'Rikesh Bhansari',
            username: "rikachu",
            phone: "567-567-5678"
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_STUDENTS:
            return {
                ...state
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            }
        case ADD_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students]
            }
        default:
            return state;
    }
}