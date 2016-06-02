import { Component, OnInit } from '@angular/core';
import { IProduct } from '../types/product';
import { ProductDetailsComponent } from './product-details.component';
import { FavouritesService, ProductsService } from '../shared/';

@Component ({
    moduleId: module.id,
    selector: "products-list",
    templateUrl: "products-list.component.html",
    styleUrls: ["products-list.component.css"],
    directives: [ProductDetailsComponent],
    providers: [FavouritesService, ProductsService]
})

export class ProductsListComponent implements OnInit {
    title:string = "Edward's Products";
    products:IProduct[];
    selectedProduct:IProduct;
    message:string;
    
    get favouritesNum():number {
        return this._favouritesService.favourites.size;
    }
    
    onSelect(product:IProduct) {
        this.selectedProduct = product;
    }
    
    newFavourite(product:IProduct) {
        this._favouritesService.addToFavourites(product);
        this.message = `Product ${product.name} was added to your favourites!`;
    }
    
    constructor (
        private _favouritesService:FavouritesService,
        private _productsService:ProductsService
    ) {}
    
    loadProducts() {
        if(this._productsService.products) {
             this.products = this._productsService.products;
        } else {        
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