package com.example.examserver.service;

import java.util.List;
import java.util.Set;

import com.example.examserver.model.exam.Category;
import com.example.examserver.model.exam.Quiz;


public interface QuizService {
	public Quiz addQuiz(Quiz quiz);
	public Quiz updateQuiz(Quiz quiz);
	public Set<Quiz> getQuizzes();
	
	public Quiz getQuiz(Long quizId);
	
	public void deleteQuiz(Long quizId);
	
	public List<Quiz> getQuizzesOfcategory(Category category);
}
