import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourdulichService } from '../service/tourdulich.service';

@Component({
  selector: 'app-chitiettour',
  templateUrl: './chitiettour.component.html',
  styleUrls: ['./chitiettour.component.css']
})
export class ChitiettourComponent implements OnInit {
  tour_dt: any;
  selectedTour: any;
  errorMsg: string = "";
  show_tour: boolean = true;
  constructor(private _service: TourdulichService,  private _activatedRoute: ActivatedRoute) { }
  base_url: string = 'http://localhost:8000/Tours/'

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (param)=>{
        let ma_tour = param.get('ma_tour');
        if (ma_tour !=null){
          this.selectedTour = ma_tour;
        }
      }
    )  
    this._service.getDataTour().subscribe(
      {
        next: (data) => this.tour_dt = data,
        error: (err) => this.errorMsg = err.message
      })

      // if(this.selectedTour === this.tour_dt.ma_tour){
      //   this.show_tour = true;
      // }else{
      //   this.show_tour = false;
      // }
  }
  XuLyYeuThich(){
    alert('Xử lý yêu thích nhá')
  }
  check( a:string ){
    if(this.selectedTour === a){
      return true;
    }
    else{
      return false;
    }
  }
}
