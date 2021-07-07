import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private url: string = 'http://localhost:3000'

  constructor( private http: HttpClient) {

  }

  getLeagues(){
    return this.http.get(`${this.url}/leagues`)
  };

  getLeagueById(id: string){
    return this.http.get(`${this.url}/leagues/${id}`)
  }

  getTeams(){
    return this.http.get(`${this.url}/teams`)
  };


  getPlayers(){
    return this.http.get(`${this.url}/players`)
  };
}
