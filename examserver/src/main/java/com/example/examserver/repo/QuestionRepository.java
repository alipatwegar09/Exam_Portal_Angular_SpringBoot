package com.example.examserver.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.examserver.model.exam.Question;
import com.example.examserver.model.exam.Quiz;
@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
	
	Set<Question> findByQuiz(Quiz quiz);
}
