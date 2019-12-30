import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { share, take, map, tap } from 'rxjs/operators';

export interface twitchResult {
  data: Array<object>;
}

@Injectable()
export class ApiService {
  baseUrl = 'https://api.twitch.tv/helix/'
  clientHeader = {'Client-ID': 'yne9spn35mh0j47wtp05g367bpu9pe'}
  constructor(
    private http: HttpClient
  ) { }

  getTopGames(): Observable<twitchResult>{
    return this.http.get<twitchResult>(this.baseUrl + 'games/top', {headers: this.clientHeader});
  }

  getVideosForGame(gameId: string): Observable<twitchResult> {
    return this.http.get<twitchResult>(this.baseUrl + `videos?game_id=${gameId}`, {headers: this.clientHeader});
  }
}
