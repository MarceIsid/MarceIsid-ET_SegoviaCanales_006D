import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApidatosService } from '../services/apidatos.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {Swiper} from 'swiper';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;;
  swiper?:Swiper;
  segmentList: Array<string> = ['assets/images/fisica.jpg', 'assets/images/ingles.jpg', 'assets/images/leng.png', 'assets/images/mate.jpg', 'assets/images/quimica.jpg'];
  selectedSegment: string = this.segmentList[0];

  ngOnInit(){    
  }
  
  posteos: any[]=[];

  constructor(private menucontroller: MenuController, private apidatos:ApidatosService, private router:Router,private module:IonicModule) {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  CargarApi(){
    this.apidatos.getPost().subscribe(resp => {
      console.log(resp);
  })

    this.apidatos.getPost().subscribe(
      datos => this.posteos = datos,
    )
  }

  buscarPost(Observable:any){
    this.router.navigate(['../detalle'],
    {queryParams:{post:JSON.stringify(Observable)}});
  }

  asistencia(){
    this.router.navigate(['/tabs/tab3']);
  }

  ajustes(){
    this.router.navigate(['/tabs/tab4']);
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e: any) {
    const index = e.target.swiper.activeIndex
    this.selectedSegment = this.segmentList[index]
  }
  _segmentSelected(index: number) {
    this.swiper?.slideTo(index)
  }

}
