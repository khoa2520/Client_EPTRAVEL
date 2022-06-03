import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../Checkformat/check.validator';
import { CrudUserService } from '../service/crud-user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  file: any = null;

  public regForm: FormGroup = this._formBuilder.group({
    hoTen: ['Nguyễn Văn A', [Validators.required,Validators.minLength(3), customValidator]],
    gioiTinh: ["nam", [Validators.required]],
    ngaySinh: ["2001-10-10"],
    diDong: ['0326123397', [ Validators.required,
      Validators.pattern(/((09|03|07|08|05)+([0-9]{8})\b)/g),
      Validators.minLength(10), Validators.maxLength(10)]],
    cMND:['352588958', [ Validators.required]],
    ngayCap: ["2016-10-10"],
    email:['ngdakhoa@gmail.com', [ Validators.required, Validators.email]],
    diaChi:['115 Đinh Chiến Thắng', [ Validators.required]],
    pass:['',[ Validators.required]],
    confirmPass:[''],
    file: ['']
  }, {validators: [passwordValidator]})
  // })
  constructor(private _formBuilder: FormBuilder, private _service: CrudUserService, private toastr: ToastrService) { }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
 
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  ngOnInit(): void {
  }
  onSubmit(data: any) {
    /* console.log("Data:",data); */
    let formData = new FormData();
    formData.append('hoTen', data.hoTen);
    formData.append('gioiTinh', data.gioiTinh);
    formData.append('ngaySinh', data.ngaySinh);
    formData.append('diDong', data.diDong);
    formData.append('cMND', data.cMND);
    formData.append('ngayCap', data.ngayCap);
    formData.append('email', data.email);
    formData.append('diaChi', data.diaChi);
    formData.append('pass', data.pass);
    formData.append('file', this.file);
    console.log('FormData:', formData);
  
    this._service.register(formData).subscribe({
      next: res=>{
        console.log(res);
        this.toastr.success('Register success', 'okela!');
      },
      error:err=>{
        console.log(err.message);
        this.toastr.error('False', 'so false', {
          timeOut: 3000,
        });
      }
    })
  }
  onChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      /* console.log("File info: ",event.target.files[0]) */
    } else {
      this.file = null;
    }
  }

}
