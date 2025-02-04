package com.example.examserver.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.examserver.model.exam.Question;
import com.example.examserver.model.exam.Quiz;
import com.example.examserver.repo.QuestionRepository;
import com.example.examserver.service.QuestionService;
@Service
public class QuestionServiceImpl implements QuestionService {
	@Autowired
	private QuestionRepository questionRepository;
	
	@Override
	public Question addQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepository.save(question);
	}

	@Override
	public Set<Question> getQuetions() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.questionRepository.findAll()) ;
	}

	@Override
	public Question getQuestions(Long queId) {
		// TODO Auto-generated method stub
		return this.questionRepository.findById(queId).get();
	}


	@Override
	public Set<Question> getQuestionsofQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.questionRepository.findByQuiz(quiz);
	}

	@Override
	public void deleteQuestion(Long queid) {
		// TODO Auto-generated method stub
		Question question=new Question();
		question.setQueId(queid);
		this.questionRepository.delete(question);
	}

}
