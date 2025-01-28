package com.example.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.examserver.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	public User findByusername(String username);
	
	public void deleteById(Long userId);
}
