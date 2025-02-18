import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASEURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsofQuiz(qid:any){
    return this.http.get(`${BASEURL}/question/quiz/${qid}`)
  }
}
