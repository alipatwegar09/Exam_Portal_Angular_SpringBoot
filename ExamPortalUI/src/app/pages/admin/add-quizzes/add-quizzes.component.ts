import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrl: './add-quizzes.component.css'
})
export class AddQuizzesComponent {
  constructor(private _category:CategoryService,private _snack:MatSnackBar,private _quiz:QuizService){}

  formSubmit() {
    if (this.quizzes.title.trim() === '' || this.quizzes.title == null) {
      this._snack.open("Title is required", "", {
        duration: 3000
      })
      return;
    }
    this._quiz.addQuiz(this.quizzes).subscribe((data: any) => {
      this._snack.open("Success, Quiz is Added!", "", {
        duration: 3000
      })
      this.quizzes = {
        title: '',
        description: '',
        maxMarks: '',
        noOfQuestions: '',
        active: true,
        category: {
          cid: ''
        }
      }
      console.log(data)
    }, (error) => {
      console.log(error);
      this._snack.open("Something went wrong!", "", {
        duration: 3000
      })
    })
  }

  quizzes =
    {
      title: '',
      description: '',
      maxMarks: '',
      noOfQuestions: '',
      active:true,
      category:{
        cid:''
      }
    }
    categories=[
      {
        cid:23,
        title:'',
      }
    ]

  ngOnInit() {
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
  }
}
