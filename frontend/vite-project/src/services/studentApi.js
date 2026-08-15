import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/student",
});

export const getStudents = async () => {
    const response = await API.get("/");
    return response.data;
};

export const getStudentById = async (id) => {
    const response = await API.get(`/${id}`);
    return response.data;
};

export const createStudent = async (studentData) => {
    const response = await API.post("/", studentData);
    return response.data;
};

export const updateStudent = async (id, studentData) => {
    const response = await API.put(`/${id}`, studentData);
    return response.data;
};

export const deleteStudent = async (id) => {
    const response = await API.delete(`/${id}`);
    return response.data;
};