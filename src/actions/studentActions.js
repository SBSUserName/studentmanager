import { GET_STUDENTS, DELETE_STUDENT, ADD_STUDENT } from "./types";

export const getStudents = () => {
    return {
        type: GET_STUDENTS
    }
}

export const deleteStudent = (id) => {
    return {
        type: DELETE_STUDENT,
        payload: id
    }
}

export const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}