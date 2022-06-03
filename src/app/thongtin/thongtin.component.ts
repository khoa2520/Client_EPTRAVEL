import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourdulichService } from '../service/tourdulich.service';


@Component({
  selector: 'app-thongtin',
  templateUrl: './thongtin.component.html',
  styleUrls: ['./thongtin.component.css']
})
export class ThongtinComponent implements OnInit {
  numnl: number = 1;
  numte: number = 0;
  numtn: number = 0;
  numeb: number = 0;
  selectedTour: any
  tour: any
  errorMsg: any
  base_url: string = 'http://localhost:8000/tours/'
  constructor(private _serviceTour: TourdulichService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (param) => {
        let _id = param.get('_id')
        if (_id != null) {
          // this.selectedTour = _id
          this.getDataTourById(_id)
          alert(this.tour._id)
        }
      })


  }
  getDataTourById(a: any) {
    this._serviceTour.getDataTourById(a).subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
  }
  addnl() {
    if (this.numnl < 10) {
      this.numnl++;
    }
  }
  addte() {
    if (this.numte < 10) {
      this.numte++;
    }
  }
  addtn() {
    if (this.numtn < 10) {
      this.numtn++;
    }
  }
  addeb() {
    if (this.numeb < 10) {
      this.numeb++;
    }
  }
  minusnl() {
    if (this.numnl > 0) {
      this.numnl--;
    }
  }
  minuste() {
    if (this.numte > 0) {
      this.numte--;
    }
  }
  minustn() {
    if (this.numtn > 0) {
      this.numtn--;
    }
  }
  minuseb() {
    if (this.numeb > 0) {
      this.numeb--;
    }
  }
}
