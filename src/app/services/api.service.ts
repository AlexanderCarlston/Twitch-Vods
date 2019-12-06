import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { share, take, map, tap } from 'rxjs/operators';

export interface twitchResult {
  data: Array<object>;
}

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getTopGames(): Observable<twitchResult>{
    return this.http.get<twitchResult>('http://localhost:8080/games')
    .pipe(
      map((response: twitchResult) => response),
      share(),
      tap(res => console.log(res))
    )
  }
}
