import { Component, OnInit } from '@angular/core';
import { IProduct } from '../types/product';
import { ProductDetailsComponent } from './product-details.component';
import { FavouritesService, ProductsService } from '../shared/';
import { OrderBy } from '../shared/orderBy.pipe';

@Component ({
    moduleId: module.id,
    selector: "products-list",
    templateUrl: "products-list.component.html",
    styleUrls: ["products-list.component.css"],
    directives: [ProductDetailsComponent],
    providers: [FavouritesService, ProductsService],
    pipes: [OrderBy]
})

export class ProductsListComponent implements OnInit {
    title:string = "Edward's Products";
    products:IProduct[];
    selectedProduct:IProduct;
    message:string;
    sorter:string = "name";
    
    get favouritesNum():number {
        return this._favouritesService.favourites.size;
    }
    
    sortList(propertyName:string) {
        if(this.sorter.startsWith('-')) {
            this.sorter = propertyName;
        } else {
            this.sorter = '-' + propertyName;
        }
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