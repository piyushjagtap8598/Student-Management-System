import React,{useEffect,useState} from "react";
import StudentService from "../services/StudentService";
import { Link, useNavigate } from "react-router-dom";

function StudentList(){

    const navigate = useNavigate();

    const[student,setStudent]=useState([]);
    const[search,setsearch]=useState("");
    useEffect(()=>{
        loadStudents();
    },[]);
    const loadStudents=()=>{
     StudentService.getAllStudent().then((Response) => {
        setStudent(Response.data);
     })   
     .catch((error) => {
        console.log(error);
     });
    };

      const deleteStudent=(id)=>{
        const confirmDelete=window.confirm("Are You Sure You Want To Delete This Student?");
        if (confirmDelete){
            StudentService.deleteStudent(id).then(() =>{
                loadStudents();
            })
            .catch((error) =>{
                console.log(error);
            });
        }
           
        };
    
         const logout =()=>{
            localStorage.removeItem("token");
            navigate("/");
         };
        
        const filteredStudents = student.filter((s)=>
        s.firstname?.toLowerCase().includes(search.toLowerCase()) ||
        s.lastname?.toLowerCase().includes(search.toLowerCase()) ||
        s.email?.toLowerCase().includes(search.toLowerCase())

        );
     
     

    return(
       <div className="container mt-5">

    <div className="card-header bg-primary text-white">
    <h3 className="text-center">Student Management System</h3>
</div>

            <div className="card-body">
                <Link to="/add-student">
                <button className="btn btn-success mb-3">
                    Add Student
                </button>
                </Link>

                <div className="row mb-4 justify-content-center">
                    <div className="col-md-6">
                        <input type="text" className="form-control form-control-lg shadow-sm" placeholder="Search Student" value={search} onChange={(e)=>setsearch(e.target.value)} style={{borderRadius:"25px"}}/>
                    </div>
                    <div className="col-md-13 text-end">
                        <h5>
                            Total Student:
                            <span className="badge bg-primary ms-2">
                                {filteredStudents.length}
                            </span>
                        </h5>
                    
                    </div>

                </div>


                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredStudents.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" 
                                    onClick={()=> navigate(`/edit-student/${student.id}`)}>
                                        Edit
                                    </button>

                                    <button className="btn btn-danger btn-sm"
                                    onClick={() => deleteStudent(student.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <div className="text-center mt-4">
                    <button className="btn btn-danger px-4" onClick={logout}>
                     Logout
                    </button>
                </div>

            </div>
        </div>

    

    );
}
export default StudentList;