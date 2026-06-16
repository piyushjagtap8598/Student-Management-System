import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        
        StudentService.getStudentById(id)
            .then((response) => {
                setFirstName(response.data.firstname);
                setLastName(response.data.lastname);
                setEmail(response.data.email);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const updateStudent = (e) => {
        e.preventDefault();

        const student = {
            firstname,
            lastname,
            email
        };

        StudentService.updateStudent(id, student)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-warning">
                    <h3>Update Student</h3>
                </div>

                <div className="card-body">
                    <form>

                        <div className="mb-3">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button
                            className="btn btn-warning"
                            onClick={updateStudent}
                        >
                            Update
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudent;