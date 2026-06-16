import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import './App.css';
import StudentList from "./components/StudentList";
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import Login from './components/Login';

function ProtectedRoute({children})
{
  const token= localStorage.getItem("token");
  return token ? children :<Navigate to="/" />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>

        <Route path="/students" element={<ProtectedRoute> <StudentList /> </ProtectedRoute>} />

        <Route path="/add-student" element={ <ProtectedRoute> <AddStudent /> </ProtectedRoute>} />

        <Route path="/edit-student/:id" element={ <ProtectedRoute> <UpdateStudent/> </ProtectedRoute>} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
