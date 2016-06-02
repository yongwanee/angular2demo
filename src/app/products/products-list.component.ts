import { Component, OnInit } from '@angular/core';
import { IProduct } from '../types/product';
import { ProductDetailsComponent } from './product-details.component';
import { FavouritesService, ProductsService } from '../shared/';
import { OrderBy } from '../shared/orderBy.pipe';
import { Router } from '@angular/router';

@Component ({
    moduleId: module.id,
    selector: "products-list",
    templateUrl: "products-list.component.html",
    styleUrls: ["products-list.component.css"],
    directives: [ProductDetailsComponent],
    pipes: [OrderBy]
})

export class ProductsListComponent implements OnInit {
    title:string = "Products";
    products:IProduct[];
    selectedProduct:IProduct;
    message:string;
    sorter:string = "name";
    
    get favouritesNum():number {
        return this._favouritesService.favourites.size;
    }
    
    sortList(propertyName:string) {
        // if a new property, set a new sorter
        if(this.sorter != propertyName )
        {
            this.sorter = propertyName;
            return;
        }
        
        // if existing property, reverse the sort
        if(this.sorter.startsWith('-')) { 
            this.sorter = this.sorter;
        } else {
            this.sorter = '-' + this.sorter;
        }
    }
    
    onSelect(product:IProduct, isNavigate:boolean) {
        if( isNavigate ) {
            this._routerService.navigate(['products', product.id])
        } else {
            this.selectedProduct = product;
        }
    }
    
    newFavourite(product:IProduct) {
        this._favouritesService.addToFavourites(product);
        this.message = `Product ${product.name} was added to your favourites!`;
    }
    
    constructor (
        private _favouritesService:FavouritesService,
        private _productsService:ProductsService,
        private _routerService:Router
    ) {}
    
    loadProducts() {
        if(this._productsService.products) {
             this.products = this._productsService.products; // load from the cache, if it exists
        } else { // otherwise, call the api to get the list of products
            this._productsService
                .getProducts()
                .subscribe(
                    data => this.products = data,
                    error => console.log(error)
            );
        }
    }
    
    ngOnInit() { 
        this.loadProducts();
    } 
}