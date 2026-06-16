package com.sms;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000")
public class AuthController 
{
	@PostMapping("/login")
	public ResponseEntity<String>login(@RequestBody LoginRequest request)
	{
		if("admin".equals(request.getUsername()) && "admin123".equals(request.getPassword()))
				{
			String token= JwtUtil.generateToken(request.getUsername());
			return ResponseEntity.ok(token);
		}
		return ResponseEntity.badRequest().body("Invalid Credentials");
	}

}
