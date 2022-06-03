import { ActivatedRoute, Router } from '@angular/router';
import { TintucService } from './../service/tintuc.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {

  tintuc:any[]=[];
  errMessage:string='';
  selectedId:any;
  message:string="";
  hidden: string ="hidden"

  constructor(private _service:TintucService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._service.getDataTinTuc().subscribe({
      next:(data)=>{this.tintuc=data},
      error:(err)=>{this.errMessage=err}
    })

    this.activatedRoute.paramMap.subscribe((param)=>{
      let tintuc_id=param.get('tintuc_id');
      if(tintuc_id!=null)
          this.selectedId=parseInt(tintuc_id);
    });
  }

    onSelect(data:any):void{
      this.router.navigate(['/noidungtintuc'],data.tintuc_id);
    }
    
    isSelected(t:any):boolean{
      return t.tintuc_id===this.selectedId
    }
    
    
}
