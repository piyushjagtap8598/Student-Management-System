package com.sms;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins="http://localhost:3000")
public class StudentController 
{
	@Autowired
	private StudentService service;
	
	@GetMapping
	public List<Student>getAllStudents()
	{
		return service.getAllStudents();
	}
	
	@PostMapping
	public Student saveStudent(@RequestBody Student student)
	{
		return service.saveStudent(student);
	}
       
	@DeleteMapping("/{id}")
	public String deleteStudent(@PathVariable Long id)
	{
		service.deleteStudent(id);
		return "Student Deleted Succesfully";
	}
	
	@PutMapping("/{id}")
	public Student updateStudent(@PathVariable Long id,@RequestBody Student student)
	{
		Student existingStudent = service.getStudentById(id);
		
		existingStudent.setFirstname(student.getFirstname());
		existingStudent.setLastname(student.getLastname());
		existingStudent.setEmail(student.getEmail());
		
		return service.updateStudent(existingStudent);
	}
}
