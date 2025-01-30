package com.example.examserver.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.examserver.helpers.UserFoundException;
import com.example.examserver.model.User;
import com.example.examserver.model.UserRole;
import com.example.examserver.repo.RoleRepository;
import com.example.examserver.repo.UserRepository;
import com.example.examserver.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	//creating User
	@Override
	 public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		  User local =userRepository.findByusername(user.getUsername());
		  
		  if(local!=null) {
			  System.out.println("User alrady there!!");
			  throw new UserFoundException();
		  }
		  else {
			  for(UserRole ur: userRoles) {
				  roleRepository.save(ur.getRole());
			  }
			  user.getUserRoles().addAll(userRoles);
			  local=this.userRepository.save(user);
		  }
		  return local;
	}

	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return userRepository.findByusername(username);
	}

	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub
		userRepository.deleteById(userId);;
	}
}
