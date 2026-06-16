package com.sms;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService 
{
	@Autowired
	private StudentRepository repository;
	
	public List<Student>getAllStudents()
	{
		return repository.findAll();
	}
	public Student getStudentById(Long id)
	{
		return repository.findById(id).orElse(null);
	}
	public void deleteStudent(Long id)
	{
		repository.deleteById(id);
	}
	public Student saveStudent(Student student)
	{
		return repository.save(student);
	}
	public Student updateStudent(Student student)
	{
		return repository.save(student);
	}

}
