import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  teams: any;
  players: any;

  constructor(private activatedRoute: ActivatedRoute, private football: FootballService) {
    this.activatedRoute.params.subscribe(params => {
      this.football.getPlyerById(params.id).subscribe((data: any) => {
        this.players = data;
        console.log(this.players[0])
        this.football.getTeamPlayerById(this.players[0].teamId).subscribe((data: any) => {
          this.teams = data;
        }, (error) => {
          console.log(error);
        });
      }, (error) => {
        console.log(error);
      });
      
    })
  }

  ngOnInit(): void {
  }

}
