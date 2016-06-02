import { Injectable } from '@angular/core';
import { IProduct } from '../types/product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ProductsService {
    apiEndPoint:string = 'http://storerestservice.azurewebsites.net/api/products/';
    
    getProducts():Observable<IProduct[]> {
        return this._http
            .get(this.apiEndPoint)
            .map((response:Response) => response.json())
            .catch(this.handleError);
    }
    
    handleError(err:any) {
        return Observable.throw(err.json().error || 'server error');
    }

    constructor(
        private _http:Http
     ) { }
}