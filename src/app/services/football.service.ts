import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private url: string = 'http://localhost:3000'

  constructor( private http: HttpClient) {

  }
  // Consulta todas las leagues
  getLeagues(){
    return this.http.get(`${this.url}/leagues`)
  };

  // Consulta la league que tenga el id
  getLeagueById(id: string){
    return this.http.get(this.url +'/leagues?Identificador=' + id)
  }

  // Consulta los teams de una league
  getTeamsById(id: string){
    return this.http.get(this.url +'/teams?Liga=' + id)
  }


  // Consulta todos los equipos
  getTeams(){
    return this.http.get(`${this.url}/teams`)
  };

  // Consulta el team que tenga el id
  getTeamById(id: string){
    return this.http.get(this.url +'/teams?id=' + id)
  }

  // Consulta los players de un team
  getPlayersById(id: string){
    return this.http.get(this.url +'/players?teamId=' + id)
  }


  // Consulta todos los jugadores
  getPlayers(){
    return this.http.get(`${this.url}/players`)
  };
}
