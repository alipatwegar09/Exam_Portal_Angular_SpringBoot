import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../services/category.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent {

  qId=0;
  quiz:any;
  categories = [
    {
      cid: 23,
      title: '',
    }
  ]
  constructor(private _route: ActivatedRoute,private _quiz:QuizService,private _snack:MatSnackBar,private _category:CategoryService,private router:Router){}
  ngOnInit(){
    this._category.categories().subscribe((data: any) => {
      this.categories = data;
      console.log(data)
    },
      (error) => {
        this._snack.open("Error in loading data", '', {
          duration: 3000
        });
      }
    )
    this.qId=this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qId).subscribe((data)=>{
      this.quiz=data;
      // this._quiz.updateQuiz(this.quiz).subscribe((data)=>{
      //   this._snack.open("Quiz Update Successfully",'',{
      //     duration:3000
      //   })
      // })
      console.log(this.quiz)
    },(error)=>{
      console.log(error)
    })
  }
  formSubmit() {
    this._quiz.updateQuiz(this.quiz).subscribe((data)=>{
      this._snack.open("Quiz Update Successfully",'',{
        duration:3000
      })
      this.router.navigate(['/admin/quizzes'])
    })
    
  }
}
