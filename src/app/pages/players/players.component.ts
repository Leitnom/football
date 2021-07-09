import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any;
  constructor(private activatedRoute: ActivatedRoute, private football: FootballService, private route: Router, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private messageService: MessageService) {

  }

  cargardatos() {
    this.football.getPlayers().subscribe((data: any) => {
      let players: any[] = [];
      for (let i = 0; i < data.length; i++) {
        let team = data[i] as any;
        players.push(team);
      }
      this.players = players;
    }, (error) => {
      console.log(error);
    });
  }

  confirm(player: any) {
    this.confirmationService.confirm({
      message: '¿Quieres borrar este registro?',
      header: 'Confirma la eliminacion!',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.football.deletePlayer(player).subscribe(data => {
          this.cargardatos();
          this.confirmationService.close();
          this.messageService.add({ key: 'myKey2', severity: 'success', summary: 'Exito', detail: 'Player eliminado con exito' });
        },
          error => {
            this.confirmationService.close();
            this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Error!', detail: 'No se pudo eliminar' });
          })
      },
      reject: () => {
        this.confirmationService.close();
      }
    });
  }

  ngOnInit(): void {
    this.cargardatos();
    this.primengConfig.ripple = true;
  }

}
