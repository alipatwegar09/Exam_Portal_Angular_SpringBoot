package com.example.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.examserver.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	public User findByuserName(String userName);
	
	public void deleteById(Long userId);
}
