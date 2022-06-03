import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TintucService } from '../service/tintuc.service';

@Component({
  selector: 'app-noidungtintuc',
  templateUrl: './noidungtintuc.component.html',
  styleUrls: ['./noidungtintuc.component.css']
})
export class NoidungtintucComponent implements OnInit {

  selectedId:any;
  tintuc:any;
  errMessage:string='';
  message:string="";

  constructor(private _service:TintucService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      let tintuc_id=param.get('tintuc_id');
      if(tintuc_id!=null)
         this.selectedId=parseInt(tintuc_id);
    })

    this._service.getDataTinTuc().subscribe({
      next:(data)=>{this.tintuc=data},
      error:(err)=>{this.errMessage=err}
    })

  }

    goBack():void{
      this.router.navigate(['/noidungtintuc',{id:this.selectedId}])
    }

   
}
