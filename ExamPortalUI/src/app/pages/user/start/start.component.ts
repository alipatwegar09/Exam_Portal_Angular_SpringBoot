import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

  qid: any;
  questions: any;
  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  isSubmit = false;
  timer: any;

  constructor(private locationSt:LocationStrategy,private _route:ActivatedRoute,private _question:QuestionService){}
  ngOnInit(){
this.preventBackButton();
this.qid=this._route.snapshot.params['qid'];
this.loadQuestions();

  }
  loadQuestions(){
    this._question.getQuestionsofQuizForTest(this.qid).subscribe((data) => {
this.questions=data;
this.timer=this.questions.length*2*60;
      this.startTimer();
console.log(data)
    })
  }
  preventBackButton(){
    history.pushState(null,location.href);
    this.locationSt.onPopState(()=>{
      history.pushState(null, location.href)
    })
  }
  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000)
  }
  submitQuiz() {
    Swal.fire({
      title: 'Do you want to Submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info'
    }).then(e => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }
    });
  }
  evalQuiz() {
    this.isSubmit = true;
    this.questions.forEach((q: { givenAnswer: any; answer: any; }) => {
      if (q.givenAnswer == q.answer) {
        this.correctAnswers++;
        let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
        this.marksGot += marksSingle;
      }
      if (q.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });
  }
  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} Min:${ss} Sec`;
  }

  printPDF() {
    window.print();
  }
}
