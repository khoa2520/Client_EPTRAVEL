import { ThongtinkhachhangComponent } from './thongtinkhachhang/thongtinkhachhang.component';
import { ThongtinComponent } from './thongtin/thongtin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';

import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';
import { NoidungtintucComponent } from './noidungtintuc/noidungtintuc.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TourdulichComponent } from './tourdulich/tourdulich.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { ChitiettourComponent } from './chitiettour/chitiettour.component';
import { YeuthichComponent } from './yeuthich/yeuthich.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/trangchu',
    pathMatch: 'full',
  },
  {
    path: 'dangky',
    component: DangKyComponent,
  },
  {
    path: 'thongtin',
    component: ThongtinComponent,
  },
  {
    path: 'khuyenmai',
    component: KhuyenmaiComponent,
  },
  {
    path: 'noidungtintuc/:tintuc_id',
    component: NoidungtintucComponent,
  },
  {
    path: 'tourdulich/:ma_tour',
    component: ChitiettourComponent,
  },
  {
    path: 'tourdulich/datngay/:_id',
    component: ThongtinComponent,
  },
  {
    path: 'tourdulich/quocgia/:quocgia',
    component: TourdulichComponent,
  },
  {
    path: 'thanhtoan',
    component: ThanhtoanComponent,
  },
  {
    path: 'tintuc',
    component: TintucComponent,
  },
  
  {
    path: 'trangchu',
    component: TrangchuComponent,
  },
  {
    path: 'tourdulich',
    component: TourdulichComponent,
  },
  {
    path: 'lienhe',
    component: LienheComponent,
  },
  {
    path: 'yeuthich',
    component: YeuthichComponent,
  },
  {
    path: 'thongtinkhachhang',
    component:ThongtinkhachhangComponent,
  },
  // {
  //   path: 'tourdulich/:quocgia/:ma_tour',
  //   component: ChitiettourComponent,
  // },
  {
    path: 'tourdulich/quocgia/:quocgia',
    component: TourdulichComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterComponent = [
  DangKyComponent
]