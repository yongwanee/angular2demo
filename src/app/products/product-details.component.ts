import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../types/product';

@Component({
    moduleId: module.id,
    selector: 'product-details',
    templateUrl: 'product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {
    /**
     * Mark the property as an input, you could give a different external name.
     * This allows you to bind
     */
    @Input() product:IProduct; 
    
    /**
     * Event Emitter, that is accessible from outside the component
     */
    @Output() addedToFavourites = new EventEmitter<IProduct>();

    addToFavourites(product:IProduct) {
        this.addedToFavourites.emit(product);
    }
        
    constructor() { }

   /**
    * Initalization here, so that the constructor can be light,
    * so the component can be created fast, and the intialization can be done
    * asynchronously
    */
    ngOnInit() { } 
}