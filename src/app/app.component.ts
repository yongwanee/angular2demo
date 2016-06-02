/**
 * This is the main root component
 */
import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ProductsListComponent } from './products/products-list.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    moduleId: module.id,
    selector: 'store-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/products', component: ProductsListComponent },
    { path: '/contact', component: ContactComponent }
])
export class AppComponent {}