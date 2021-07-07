import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any;

  constructor(private football: FootballService) { 
    this.football.getTeams().subscribe((data: any) => {
      this.teams = data;
    }, (error) => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

}
