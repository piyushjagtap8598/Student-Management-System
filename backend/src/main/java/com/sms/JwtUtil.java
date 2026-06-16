package com.sms;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil 
{
	private static final SecretKey KEY=Keys.hmacShaKeyFor("mysecretkeymysecretkeymysecretkey12".getBytes());
	
	public static String generateToken(String username) {
		return Jwts.builder().setSubject(username).setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis()+86400000)).signWith(KEY).compact();
	}
}
