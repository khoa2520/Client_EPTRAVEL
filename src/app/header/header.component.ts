import { Component, OnInit } from '@angular/core';
import { TourdulichService } from '../service/tourdulich.service';

import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  base_url: string ="http://localhost:8000/Tours/"
  tour: any;
  errorMsg: string = "";
  selectedTour: any;
  searchText: string = "";

  btnHeart: string = 'bi-heart';
  btnPerson: string = 'bi-person';
  hidden: string = 'hidden';
  search_focus: string = 'search_black';
  box_show: string = 'hidden';
  cap1: string = "";
  trongnuoc_b: string = "";
  ngoainuoc_b: string = "";
  constructor(private _service: TourdulichService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this._service.getDataTour().subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
  }
  changeSearch(){
    if(this.search_focus=='search_black')
    {
      this.search_focus = 'search_white';
      this.box_show='show'
    }
    else{
      this.search_focus='search_black'
      this.box_show='hidden'
    }
    // this.search_focus == 'search_black' ? 'search_white' : 'search_black'
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DangnhapComponent, dialogConfig);
  }

  changeHeart(){
    if(this.btnHeart=='bi-heart')
    {
      this.btnHeart = 'bi-heart-fill';
    }
    else{
      this.btnHeart='bi-heart'
    }
  }
  changePerson(){
    if(this.btnPerson=='bi-person')
    {
      this.btnPerson = 'bi-person-fill';
    }
    else{
      this.btnPerson='bi-person'
    }
  }
  changeHidden(){
    if(this.hidden=='hidden')
    {
      this.hidden = '';
    }
    else{
      this.hidden='hidden'
    }
  }

  hienCap1(){
    this.cap1 = "hienI"
  }
  anCap1(){
    this.cap1 = ""
  }

  hienTN(){
    this.trongnuoc_b = "hienTN"
  }
  anTN(){
    this.trongnuoc_b = ""
  }
  hienNN(){
          this.ngoainuoc_b = "hienNN"  
  }
  anNN(){
    this.ngoainuoc_b = ""
  }



  // search
  
}
