package com.example.examserver.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.examserver.model.exam.Quiz;
import com.example.examserver.service.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
	@Autowired
	private QuizService quizService;
	@PostMapping("/")
	public ResponseEntity<?> addQuiz(@RequestBody Quiz quiz){
		return ResponseEntity.ok(this.quizService.addQuiz(quiz));
	}
	
	@PutMapping("/")
	public Quiz updateQuiz(@RequestBody Quiz quiz) {
		return this.quizService.updateQuiz(quiz);
	}
	@GetMapping("")
	public ResponseEntity<?> quizess() {
		return ResponseEntity.ok(this.quizService.getQuizzes());
	}
	@GetMapping("/{qid}")
	public Quiz getQuiz(@PathVariable("qid") Long qid) {
		return this.quizService.getQuiz(qid);
	}
	
	@DeleteMapping("/{qid}")
	public void deleteQuiz(@PathVariable("qid") Long qid) {
		this.quizService.deleteQuiz(qid);
	}
	
	
}
