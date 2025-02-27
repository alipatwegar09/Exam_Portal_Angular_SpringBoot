import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent {
  catId: any;
  quizzes: any;
  constructor(private _route: ActivatedRoute, private _quiz: QuizService) { }
  ngOnInit() {
    //  this.catId=this._route.snapshot.params['catId'];
    console.log(this.catId)

    this._route.params.subscribe((params) => {
      this.catId = params['catId']
      if (this.catId == 0) {
        this._quiz.quizzes().subscribe((data:any) => {
          this.quizzes = data.filter((quiz: any) => quiz.active === true);;
          console.log(data)
        }, (error) => {

        })
      }
      else {
        this._quiz.geQuizzesOfcategory(this.catId).subscribe((data) => {
          this.quizzes = data;
          console.log(data);
        }, (error) => {
          console.log(error)
        })
      }
    })

  }
}
