import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent {
  qid:any;
  quiz:any;
  constructor(private _route: ActivatedRoute, private _quiz: QuizService, private router: Router){}

  ngOnInit(){
    this.qid=this._route.snapshot.params['qid'];

    this._quiz.getQuiz(this.qid).subscribe((data)=>{
      this.quiz=data;
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  }
  startQuiz() {
    Swal.fire({
      title: 'Do you want to Start the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      icon: 'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start-quiz/' + this.qid]);
      }
    })
  }
}
