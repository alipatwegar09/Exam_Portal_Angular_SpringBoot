package com.example.examserver.service;

import java.util.Set;


import com.example.examserver.model.exam.Question;
import com.example.examserver.model.exam.Quiz;

public interface QuestionService {
	public Question addQuestion(Question question);
	public Question updateQuestion(Question question);
	public Set<Question> getQuetions();
	
	public Question getQuestions(Long queId);
	
	public Set<Question> getQuestionsofQuiz(Quiz quiz);
	
	public void deleteQuestion(Long QueId);
}
