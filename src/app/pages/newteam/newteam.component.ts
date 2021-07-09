import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newteam',
  templateUrl: './newteam.component.html',
  styleUrls: ['./newteam.component.css']
})
export class NewteamComponent implements OnInit {
  newTeam = new FormGroup({
    LogodelEquipo: new FormControl(''),
    Nombredelequipo: new FormControl(''),
    Liga: new FormControl(''),
    id: new FormControl('')
  });

  leagues: any;

  constructor(private football: FootballService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.football.getLeagues().subscribe((data: any) => {
      this.leagues = data;
    }, (error) => {
      console.log(error);
    });

  }

 
  ngOnInit(): void {
  }

  newForm(form: any){
    this.football.newTeam(form).subscribe(data => {
      this.router.navigate(['/teams'])
      alert('hola');
    })
  }

}
