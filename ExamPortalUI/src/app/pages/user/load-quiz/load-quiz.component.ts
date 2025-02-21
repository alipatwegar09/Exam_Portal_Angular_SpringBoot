import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent {
  catId:any;
  quizzes:any;
constructor(private _route:ActivatedRoute,private _quiz:QuizService){}
  ngOnInit(){
    this.catId=this._route.snapshot.params['catId'];
    console.log(this.catId)
    if(this.catId==0 ){
     this._quiz.quizzes().subscribe((data)=>{
       this.quizzes=data;
       console.log(data)
     },(error)=>{

     })
    }
    else{

    }
  }
}
