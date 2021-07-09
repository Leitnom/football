import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-editplayer',
  templateUrl: './editplayer.component.html',
  styleUrls: ['./editplayer.component.css']
})
export class EditplayerComponent implements OnInit {

  editPlayer = new FormGroup({
    Avatar: new FormControl('', Validators.required),
    NombredelJugador: new FormControl('', Validators.required),
    teamId: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required)
  });

  teams: any;
  player: any;

  constructor(private football: FootballService, private activatedRoute: ActivatedRoute, private route: Router, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) {
    this.activatedRoute.params.subscribe(params => {
      this.football.getPlayerById(params.id).subscribe((data: any) => {
        this.player = data[0];
        this.editPlayer.setValue({
          'Avatar': this.player.Avatar,
          'NombredelJugador': this.player.NombredelJugador,
          'teamId': this.player.teamId,
          'id': this.player.id
        });
      }, (error) => {
        console.log(error);
      });
    })

    this.football.getTeams().subscribe((data: any) => {
      this.teams = data;
    }, (error) => {
      console.log(error);
    });

  }

  ngOnInit(): void {
  }

  editForm(form: any) {
    this.football.editPlayer(form).subscribe(data => {
      this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Exito', detail: 'Player editado con exito' });
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.route.navigate(['/players'])
      }, 1000);
    },
      error => {
        this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error!', detail: 'No se pudo editar' });
        setTimeout(() => {                           // <<<---using ()=> syntax
          this.route.navigate(['/players'])
        }, 1000);
      })
  }
}
