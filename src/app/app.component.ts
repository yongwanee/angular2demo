/**
 * This is the main root component
 */
import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products';

@Component({
    moduleId: module.id,
    selector: 'store-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/products', component: ProductsComponent },
    { path: '/contact', component: ContactComponent }
])
export class AppComponent {}