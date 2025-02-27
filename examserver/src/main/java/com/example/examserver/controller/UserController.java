package com.example.examserver.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.examserver.helpers.UserFoundException;
import com.example.examserver.model.Role;
import com.example.examserver.model.User;
import com.example.examserver.model.UserRole;
import com.example.examserver.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		System.out.println(user+"requeed url");
		
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		Set<UserRole> roles =new HashSet<>();
		Role role=new Role();
		//role.setRoleId(45L);
		role.setRoleName("Normal");
		UserRole userRole=new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);
		roles.add(userRole);
		return this.userService.createUser(user, roles);
	}
	
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		System.out.println(username+"in user controller");
		return this.userService.getUser(username);
	}
	
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
	  this.userService.deleteUser(userId);
	}
	
	@ExceptionHandler(UserFoundException.class)
	public ResponseEntity<?> exceptionHanlder(UserFoundException e){
		 return ResponseEntity
	            .status(HttpStatus.CONFLICT) // 409 Conflict (appropriate for duplicate user errors)
	            .body(e.getMessage());

	}
}
