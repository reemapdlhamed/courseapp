import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiURL: string = 'http://projectegy-003-site13.gtempurl.com';

  constructor(private httpClient: HttpClient) {}

  public getQuizById(id: number) {
    return this.httpClient.get(`${this.apiURL}/SolveQuiz/GetQustions?id=${id}`);
  }

  public getResult(ansIds: number[]) {
    // return this.httpClient.post(`${this.apiURL}/api/Quizzes/Solve`,{
    return this.httpClient.post(`${this.apiURL}/SolveQuiz/SolveQuiz`, {
      forQuizId: 1,
      selectedAnswerIds: ansIds,
    });
  }
}
