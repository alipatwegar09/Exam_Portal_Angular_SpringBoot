package com.example.examserver.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.examserver.model.exam.Quiz;
@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long>{

}
