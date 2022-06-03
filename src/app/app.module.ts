import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule, RouterComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { KhuyenmaiComponent } from './khuyenmai/khuyenmai.component';

import { TintucComponent } from './tintuc/tintuc.component';
import { NoidungtintucComponent } from './noidungtintuc/noidungtintuc.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { TourdulichComponent } from './tourdulich/tourdulich.component';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ChitiettourComponent } from './chitiettour/chitiettour.component';
import { YeuthichComponent } from './yeuthich/yeuthich.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ThongtinkhachhangComponent } from './thongtinkhachhang/thongtinkhachhang.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
@NgModule({
  declarations: [
    AppComponent,
    DangKyComponent,
    HeaderComponent,
    RouterComponent,
    FooterComponent,
    TrangchuComponent,
    KhuyenmaiComponent,

    TintucComponent,
    NoidungtintucComponent,
    ThanhtoanComponent,
    TourdulichComponent,
    ChitiettourComponent,
    YeuthichComponent,
    ThongtinkhachhangComponent,
    DangnhapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
