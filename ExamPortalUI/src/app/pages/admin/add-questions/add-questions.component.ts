import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent {
  qId:any;
  qTitle:any;
  question={
    quiz:{
      qid:''
    },
    content:'',
    option1:'',
    option2: '',
    option3: '',
    option4: '',
    answer:''
  }
  constructor(private _route:ActivatedRoute,private _question:QuestionService,private _snack:MatSnackBar){}

  ngOnInit(){
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title']
    this.question.quiz['qid']=this.qId;
  }
  formSubmit() {
    console.log(this.question)
    if(this.question.content.trim()==''){
      return;
    }
    if (this.question.option1.trim() == '' || this.question.option2) {
      return;
    }
   this._question.addQuestiontoQuiz(this.question).subscribe((data)=>{
     this._snack.open("Success, Question is Added!", "", {
       duration: 3000
     })
     this.question = {
       quiz: {
         qid: ''
       },
       content: '',
       option1: '',
       option2: '',
       option3: '',
       option4: '',
       answer: ''
     }
   })
  }
}
