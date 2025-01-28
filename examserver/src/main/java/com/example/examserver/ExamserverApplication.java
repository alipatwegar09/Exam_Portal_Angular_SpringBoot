package com.example.examserver;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.examserver.model.Role;
import com.example.examserver.model.User;
import com.example.examserver.model.UserRole;
import com.example.examserver.service.UserService;

@SpringBootApplication
public class ExamserverApplication implements CommandLineRunner {
	public static void main(String[] args) {
		SpringApplication.run(ExamserverApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Runnning server");
		
//		User user=new User();
//		
//		user.setFirstName("Ali");
//		user.setLastName("Patwegar");
//		user.setUserName("alipatwegar09");
//		user.setPassword("Ali@1234");
//		user.setEmail("alipatwegar@gmail.com");
//		user.setPhone("9890063557");
//		user.setProfile("default.png");
//		
//		
//		Role role1=new Role();
//		role1.setRoleName("Admin");
//		
//		Set<UserRole> userRoleSet=new HashSet<>();
//		
//		UserRole userRole=new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		userRoleSet.add(userRole);
//		
//		User user1=this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUserName());
	}
}
