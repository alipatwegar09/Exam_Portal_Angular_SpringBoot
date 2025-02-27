import { Injectable } from '@angular/core';
import BASEURL from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  public quizzes() {
    return this.http.get(`${BASEURL}/quiz/`)
  }

  public addQuiz(quiz: any) {
    return this.http.post(`${BASEURL}/quiz/`, quiz)
  }
  public deleteQuiz(qid:any){
    return this.http.delete(`${BASEURL}/quiz/${qid}`)
  }
  public getQuiz(qid:any){
    return this.http.get(`${BASEURL}/quiz/${qid}`)
  }
  public updateQuiz(quiz:any){
    return this.http.put(`${BASEURL}/quiz/`, quiz)
  }
  public geQuizzesOfcategory(cid:any){
    return this.http.get(`${BASEURL}/quiz/category/${cid}`)
  }
}
