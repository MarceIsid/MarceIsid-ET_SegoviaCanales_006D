import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  profesores: any;
  constructor(private activated: ActivatedRoute, 
              private router: Router) { 
                this.activated.queryParams.subscribe(params=>{
                  this.profesores = JSON.parse(params['profesor'])
                })
              }

  ngOnInit() {
  }

  regresar(){
    this.router.navigate(['/tabs/tab1']);
  }

}
