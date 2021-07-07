import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {

  league: any;
  constructor(private activatedRoute: ActivatedRoute, private football: FootballService) {
    this.activatedRoute.params.subscribe(params => {
      this.football.getLeagueById(params.id).subscribe((data: any) => {
        this.league = data;
        
      }, (error) => {
        console.log(error);
      });

    })
  }

  ngOnInit(): void {
  }

}
