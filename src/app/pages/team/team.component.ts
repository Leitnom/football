import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  leagues: any;
  teams: any;
  players: any;

  constructor(private activatedRoute: ActivatedRoute, private football: FootballService) {
    this.activatedRoute.params.subscribe(params => {
      this.football.getTeamById(params.id).subscribe((data: any) => {
        this.teams = data;
        this.football.getLeagueById(this.teams[0].Liga).subscribe((data2: any) => {
          this.leagues = data2;
        }, (error) => {
          console.log(error);
        });
      }, (error) => {
        console.log(error);
      });

      this.football.getPlayersById(params.id).subscribe((data: any) => {
        this.players = data;
      }, (error) => {
        console.log(error);
      });

    })
  }

  ngOnInit(): void {
  }

}
