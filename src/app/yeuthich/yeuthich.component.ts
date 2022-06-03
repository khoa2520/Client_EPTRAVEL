import { Component, OnInit } from '@angular/core';
import { FavService } from '../service/fav.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-yeuthich',
  templateUrl: './yeuthich.component.html',
  styleUrls: ['./yeuthich.component.css']
})
export class YeuthichComponent implements OnInit {
  base_url: string = 'http://localhost:8000/Tours/'
  yeuthich = new Array();
  errorMsg: string = "";
  tourKm: any;
  constructor(private _serviceFav: FavService, private toastr: ToastrService) { }

  ngOnInit(): void {

    let userLogin = JSON.parse(localStorage.getItem("UserLogin") || '{}');
    this._serviceFav.getTourInFav({
      userId: userLogin._id
    }).subscribe({
      next: (res) => {
        this.yeuthich = res.toString().split(',')
        this.setData("yeuthich", this.yeuthich)
      }
    })
    this.getDataTourKm()
  }


  getDataTourKm() {
    this._serviceFav.getAllTourInFav({
      tourArr: JSON.parse(localStorage.getItem("yeuthich") || '{}')
    }).subscribe(
      {
        next: (data) => {
          this.tourKm = data
        },
        error: (err) => this.errorMsg = err.message
      })
  }

  DeleteFav(tour: any) {
    let userLogin = JSON.parse(localStorage.getItem("UserLogin") || '{}');
    let dem = 0
    // alert(this.yeuthich)
    for (let i = 0; i < this.yeuthich.length; i++) {
      if (this.yeuthich[i] == tour._id) {
        this.yeuthich.splice(dem, 1)
      }
    }

    if (JSON.parse(localStorage.getItem("yeuthich") || '{}') == [""]) {
      localStorage.removeItem("yeuthich")
    }
    else {
      this._serviceFav.updateFav({
        userId: userLogin._id,
        tourList: this.yeuthich
      }).subscribe({
        next: (res) => {

          this.setData("yeuthich", this.yeuthich)


          this.toastr.info('Đã xóa tour: ' + tour.ten_tour + " ra khỏi yêu thích", 'Thành công', {
            timeOut: 3000,
          });
        }
      })
    }

    this.getDataTourKm()
    // alert("Xử lý xóa Fav " + tour._id + tour.ten_tour)
  }
  setData(name: string, data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(name, jsonData)
  }

  getData(name: string) {
    return localStorage.getItem(name)
  }

  removeData(name: any) {
    localStorage.removeItem(name)
  }
}
