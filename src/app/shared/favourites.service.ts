import { Injectable } from '@angular/core';
import { IProduct } from '../types/product';

@Injectable()
export class FavouritesService {
    
    favourites:Set<IProduct>;

    addToFavourites(product:IProduct) {
        this.favourites.add(product);
    }
    
    constructor() { 
        this.favourites = new Set<IProduct>();
    }

}