import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-newplayer',
  templateUrl: './newplayer.component.html',
  styleUrls: ['./newplayer.component.css']
})
export class NewplayerComponent implements OnInit {

  newPlayer = new FormGroup({
    Avatar: new FormControl('', Validators.required),
    NombredelJugador: new FormControl('', Validators.required),
    teamId: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
  });
  teams: any;

  constructor(private football: FootballService, private activatedRoute: ActivatedRoute, 
    private router: Router, private route: Router, private confirmationService: ConfirmationService,
     private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.football.getTeams().subscribe((data: any) => {
      this.teams = data;
    }, (error) => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

  newForm(form: any) {
    this.football.newPlayer(form).subscribe(data => {
      this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Exito', detail: 'Player creado de manera exitosa' });
      this.newPlayer.reset();
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.route.navigate(['/players'])
      }, 1000);
    },
      error => {
        this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error!', detail: 'No se pudo guardar' });
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.route.navigate(['/players'])
        }, 1000);
      })
  }
}
