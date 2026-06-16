import axios from "axios";
const API_URL="http://localhost:8080/student";

const getAuthHeader =()=> {
    const token=localStorage.getItem("token");
    return{
        Headers:{Authorization:`Bearer ${token}`}
    };
};

class StudentService{
    getAllStudent(){
        return axios.get(API_URL,getAuthHeader());
    }
    createStudent(student){
        return axios.post(API_URL,student,getAuthHeader());
    }
    deleteStudent(id){
        return axios.delete(`${API_URL}/${id}`,getAuthHeader());
    }
    updateStudent(id,student){
        return axios.put(`${API_URL}/${id}`,student,getAuthHeader());
    }
    getStudentById(id){
        return axios.get(`${API_URL}/${id}`);
    }
}
export default new StudentService();