import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  league: any;
  constructor(private activatedRoute: ActivatedRoute, private football: FootballService) {
    this.activatedRoute.params.subscribe(params => {
      this.football.getLeagueById(params.id).subscribe((data: any) => {
        this.league = data;
        console.log(this.league);
      }, (error) => {
        console.log(error);
      });

    })
  }

  ngOnInit(): void {
  }

}
