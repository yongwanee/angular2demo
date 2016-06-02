import { Injectable } from '@angular/core';
import { IProduct } from '../types/product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductsService {
    apiEndPoint:string = 'http://storerestservice.azurewebsites.net/api/products/';
    
    products:IProduct[];
    
    getProducts():Observable<IProduct[]> { // return an observable that other components can subscribe to
        return this._http
            .get(this.apiEndPoint)
            .map((response:Response) => { // anonymous function so populate the basic local cache
                this.products = response.json(); 
                return this.products;
            })
            .catch(this.handleError);
    }
    
    handleError(err:any) {
        return Observable.throw(err.json().error || 'server error');
    }

    constructor(
        private _http:Http
     ) { }
}