import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BASEURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsofQuiz(qid:any){
    return this.http.get(`${BASEURL}/question/quiz/all/${qid}`)
  }

  public getQuestionsofQuizForTest(qid: any) {
    return this.http.get(`${BASEURL}/question/quiz/${qid}`)
  }
  public addQuestiontoQuiz(question:any){
    return this.http.post(`${BASEURL}/question/`, question)
  }
  public deleteQuestionofQuiz(qId: any) {
    return this.http.delete(`${BASEURL}/question/${qId}`)
  }
}
