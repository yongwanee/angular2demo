import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductsService, FavouritesService } from '../shared/';

@Component({
    moduleId: module.id,
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductsService, FavouritesService]
})
@Routes([
    { path: '/', component: ProductsListComponent },
    { path: '/:id', component: ProductDetailsComponent }
])
export class ProductsComponent {}