import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllcategories() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  }

  getAllProducts() {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS);
  }

  saveProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, obj);
  }

  updateProduct(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT, obj);
  }
  
  deleteProduct(id: number) {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + '/' + id);
  }
}
