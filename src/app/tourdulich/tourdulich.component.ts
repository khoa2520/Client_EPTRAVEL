import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FavService } from '../service/fav.service';
import { TourdulichService } from '../service/tourdulich.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tourdulich',
  templateUrl: './tourdulich.component.html',
  styleUrls: ['./tourdulich.component.css']
})
export class TourdulichComponent implements OnInit {
  base_url: string = 'http://localhost:8000/Tours/'
  tour: any;
  tour2: any;
  errorMsg: string = "";
  selectedTour: any;
  value: string[] = [];


  quoc_gia: any
  yeuthich = new Array();

  quocgia: string = "";
  khuvuc: string = "";
  noikhoihanh: string = "";
  diemden: string = "";
  thoigian: string = "";
  public condiForm: FormGroup = this._formBuilder.group({
    quocgia: [''],
    khuvuc: [''],
    noikhoihanh: [''],
    diemden: [''],
    thoigian: [''],
  })

  constructor(private _serviceTour: TourdulichService, private _serviceFav: FavService, private _router: Router, private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getDataTour()
    this._activatedRoute.paramMap.subscribe(
      (param) => {
        let ma_tour = param.get('ma_tour')
        if (ma_tour != null) {
          this.selectedTour = parseInt(ma_tour)
        }
      })
    this._activatedRoute.paramMap.subscribe(
      (param) => {
        let a = param.get('quocgia')
        if (a != null) {
          this.quoc_gia = a
          this.getDataTourCondi(this.quoc_gia)
        }
      })

    let userLogin = JSON.parse(localStorage.getItem("UserLogin") || '{}');
    this._serviceFav.getTourInFav({
      userId: userLogin._id
    }).subscribe({
      next: (res) => {
        this.yeuthich = res.toString().split(',')
        this.setData("yeuthich", this.yeuthich)
      }
    })
    if (JSON.parse(localStorage.getItem("yeuthich") || '{}')[0] == "") {
      localStorage.removeItem("yeuthich")
    }
  }

  onSubmit(form: any) {
    let params = new URLSearchParams(document.location.search)
    let name = params.get("quocgia")
  }

  onChangeSapXep(Option: any) {
    switch (Option.value) {
      case "thapcao": {
        this.tour.sort((a: any, b: any) => {
          return a.giatiennguoilon - b.giatiennguoilon;
        })
        break;
      }
      case "caothap": {
        this.tour.sort((a: any, b: any) => {
          return b.giatiennguoilon - a.giatiennguoilon;
        })
        break;
      }
      case "ggcaothap": {
        this.tour.sort((a: any, b: any) => {
          return b.giatiennguoilon * (b.giamgia / 100) - a.giatiennguoilon * (a.giamgia / 100);
        })
        break;
      }
      default: {
        this.getDataTour()
        break;
      }
    }
    console.log();
  }

  navigateType(type: string): void {
    this._router.navigateByUrl(`/dog?type=${type}`);
  }


  DatNgay(data: any) {
    alert('xử lý đặt ngay')
    this._router.navigate(['/tourdulich/datngay', data._id])



  }
  getDataTour() {
    this._serviceTour.getDataTour().subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
  }
  getDataTourCondi(a: any) {
    this._serviceTour.getDataTourWithCondition(a).subscribe(
      {
        next: (data) => this.tour = data,
        error: (err) => this.errorMsg = err.message
      })
  }
  XuLyYeuThich(datatour: any) {

    let userLogin = JSON.parse(localStorage.getItem("UserLogin") || '{}');;
    if (userLogin._id) { //Tương lai thêm check JWT

      this._serviceFav.checkFav({
        userId: userLogin._id,
      }).subscribe({
        next: (res) => {
          let res_data = JSON.parse(JSON.stringify(res));
          if (res_data.message == "Đã có") {
            // Update Fav

            for (let i = 0; i < this.yeuthich.length; i++) {
              if (this.yeuthich[i] == datatour._id) {
                this.toastr.error('Tour này đã có trong danh mục yêu thích', 'Thêm Yêu Thích Thất Bại', {
                  timeOut: 3000,
                });
                return res_data.message
              }
            }
            
            this.yeuthich.push(datatour._id)
            this.setData("yeuthich", this.yeuthich)

            // let yt = JSON.parse(this.getData("yeuthich") || '{}')
            this._serviceFav.updateFav({
              userId: userLogin._id,
              tourList: this.yeuthich
            }).subscribe({
              next: (res) => {
                this.toastr.info('Thêm yêu thích', 'Thành công', {
                  timeOut: 3000,
                });
              },
              error: err => {
                console.log(err.message);
                this.toastr.error('False', 'so false', {
                  timeOut: 3000,
                });
              }
            })
            // alert("Đã có" + "    " + yt)
          }
          if (res_data.message == "Chưa có") {
            // Thêm Fav
            this._serviceFav.createFav({
              userId: userLogin._id,
              tourId: datatour._id
            }).subscribe({
              next: (res) => {
                this.yeuthich.push(datatour._id)
                this.toastr.info('Thêm yêu thích', 'Thành công', {
                  timeOut: 3000,
                });
              },
              error: err => {
                console.log(err.message);
                this.toastr.error('False', 'so false', {
                  timeOut: 3000,
                });
              }
            })
            // alert("Chưa có tạo FavList" + userLogin.hoTen + datatour._id)
          }


        },
        error: err => {
          console.log(err.message);
          this.toastr.error('False', 'so false', {
            timeOut: 3000,
          });
        }
      })


    }
    else {
      this.toastr.error('Thêm yêu thích', 'Bạn phải đăng nhập mới có thể thêm vào yêu thích', {
        timeOut: 3000,
      });
    }

    // })
    // add vao fav
  }

  onSelect(data: any): void {
    // console.log(data)
    this._router.navigate(['/tourdulich', data.ma_tour])
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
