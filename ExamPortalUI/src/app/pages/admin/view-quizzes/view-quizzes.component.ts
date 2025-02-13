import { Component } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent {

quizzes=[
  {
    qid: 1,
    title: '',
    description: '',
    maxMarks: '',
    noOfQuestions: '',
    category: {
      cid: '',
      title: '',
      description: '',
    }
  }
]
  constructor(private _quiz: QuizService, private _snack: MatSnackBar) { }

  ngOnInit() {
    this._quiz.quizzes().subscribe((data: any) => {
      this.quizzes = data;
      console.log(data)
    },
      (error) => {
        this._snack.open("Error in loading data", '', {
          duration: 3000
        });
      }
    )
  }
  deleteQuiz(qid: any) {
    // if(qid== undefined || qid==null){
    //   console.log(qid);
    //   return;
    // }
    this._quiz.deleteQuiz(qid).subscribe((data)=>{
      this.quizzes=this.quizzes.filter((quiz)=>quiz.qid!=qid)
      this._snack.open("Quiz delete Successfully",'',{
        duration:3000
      })
    },(error)=>{
      this._snack.open("Something went wrong", '', {
        duration: 3000
      })
    })
  }

}

