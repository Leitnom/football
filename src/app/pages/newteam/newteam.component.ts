import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/football.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-newteam',
  templateUrl: './newteam.component.html',
  styleUrls: ['./newteam.component.css']
})
export class NewteamComponent implements OnInit {
  newTeam = new FormGroup({
    LogodelEquipo: new FormControl('', Validators.min(6)),
    Nombredelequipo: new FormControl('', Validators.required),
    Liga: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
  });

  leagues: any;

  constructor(private football: FootballService, private activatedRoute: ActivatedRoute, private router: Router, private route: Router, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.football.getLeagues().subscribe((data: any) => {
      this.leagues = data;
    }, (error) => {
      console.log(error);
    });

  }


  ngOnInit(): void {
  }

  newForm(form: any) {
    this.football.newTeam(form).subscribe(data => {
      this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Exito', detail: 'Team creado con exito' });
      this.newTeam.reset();
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.route.navigate(['/teams'])
      }, 1000);
    },
      error => {
        this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error!', detail: 'No se pudo guardar' });
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.route.navigate(['/teams'])
        }, 1000);
      })
  }

}
