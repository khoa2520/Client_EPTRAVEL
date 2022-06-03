import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { CrudUserService } from '../service/crud-user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FavService } from '../service/fav.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  userArr = new Array();
  userLen = this.userArr.length;
  favArr = [];

  public loginForm: FormGroup = this._formBuilder.group({

    email: ['ngdakhoa@gmail.com', [Validators.required, Validators.email]],

    passWord: ['', [Validators.required]],

  })

  constructor(public dialogRef: MatDialogRef<DangnhapComponent>, private _formBuilder: FormBuilder, private _serviceUser: CrudUserService,private _serviceFav: FavService, private toastr: ToastrService, private _http: HttpClient, private _router: Router) { }



  ngOnInit(): void {
    
    this._serviceFav.getFavUser("62956c3911b3338a4955824d").subscribe({
      next: res =>{
        alert(res)
      }
    })
  }


  onSubmit(form: any) {
    this._serviceUser.login({
      email: form.email,
      passWord: form.passWord
    }).subscribe({
      next: (res) => {
        let res_data = JSON.parse(JSON.stringify(res));
        if (res_data.message == "Wrong Email!!!!!!") {
          this.toastr.error('Wrong Email!!!!!!', 'so false', {
            timeOut: 3000,
          });
        } else
          if (res_data.message == "Wrong passWord!!!") {
            this.toastr.error('Wrong passWord!!!', 'so false', {
              timeOut: 3000,
            });
          }
          else {

            console.log(res_data.accessToken, res_data.admin)

            this.toastr.success('Login success', 'Đăng nhập thành công!');
            this.close();

            if (this.getData("UserLogin")) {
              this.removeData("UserLogin");
              this.setData("UserLogin", res)
            }
            else {
              this.setData("UserLogin", res)
            }


            res_data.admin == true ? window.location.href = 'http://localhost:5500/capnhat' : this._router.navigateByUrl(`/trangchu`);


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
  close() {
    this.dialogRef.close();
  }
}
