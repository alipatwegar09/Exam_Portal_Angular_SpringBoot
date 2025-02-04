package com.example.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.examserver.model.exam.Category;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
}
