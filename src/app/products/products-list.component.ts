import { Component, OnInit } from '@angular/core';
import { IProduct } from '../types/product';
import { ProductDetailsComponent } from './product-details.component';
import { FavouritesService } from '../shared/favourites.service';
import { ProductsService } from '../shared/products.service';

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
    
    ngOnInit() { 
        this.products = this._productsService.getProducts();
    } 
}