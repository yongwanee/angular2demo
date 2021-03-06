import { Injectable } from '@angular/core';
import { IProduct } from '../types/product';
import { Http, Response, Headers } from '@angular/http';
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
    
    getProduct(id:number):IProduct {
        return this.products.filter( x => x.id == id )[0];
    }
    
    insertProduct(newProduct:IProduct) {
        // add the header to specify the content type
        let myHeaders:Headers = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        
        newProduct.modifiedDate = new Date(); // add the required field
        
        this._http
        .post(
            this.apiEndPoint, 
            JSON.stringify(newProduct), // make into string in json format
            {
                headers: myHeaders
            }
        ).map( x => x.json() ).
        subscribe(
            data => {
                this.products.push(data);
            },
            err => {
                console.log(err);
            }
        );
        // TODO: return an observable, and redirect to the newly created product  
    }
    
    handleError(err:any) {
        return Observable.throw(err.json().error || 'server error');
    }

    constructor(
        private _http:Http
     ) { }
}