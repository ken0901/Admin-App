import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  productList: any[] = [];

  constructor(private prodSrv: ProductService){}

  ngOnInit(): void {
    
  }

  getAllProducts(){
    this.prodSrv.getAllProducts().subscribe((res:any) => {
      this.productList = res.data;
    });
  }
}
