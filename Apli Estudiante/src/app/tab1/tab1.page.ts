import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
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
  segmentList: Array<string> = ['assets/images/pik.jpg', 'assets/images/pik2.webp', 'assets/images/pik3.webp'];
  selectedSegment: string = this.segmentList[0];

  constructor(private menucontroller: MenuController, private router:Router) {}

  ngOnInit() {
      
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

  mostrarMenu(){
    this.menucontroller.open('first');
  }

  onClick(){
    this.router.navigate(['tabs/tab3.html']);
  }

  nClick(){
    this.router.navigate(['tabs/tab2.html']);
  }

}
