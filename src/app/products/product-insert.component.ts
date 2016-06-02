import { Component, OnInit } from '@angular/core';
import { FormBuilder, Control, ControlGroup, Validators, FORM_DIRECTIVES } from '@angular/common';
import { ProductsService } from '../shared/products.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'product-insert.component.html'
})
export class ProductInsertComponent implements OnInit {
    insertForm:ControlGroup;
    
    name:Control;
    price:Control;
    description:Control;
    
    onSubmit() {
        this._productsService.insertProduct(this.insertForm.value);
        this._router.navigate(['products'])
    }
    
    constructor(
        private _fb:FormBuilder,
        private _productsService:ProductsService,
        private _router:Router
    ) { }

    ngOnInit() { 
        this.name = new Control(null, Validators.compose([
            Validators.required
        ]));
        
        this.price = new Control(null, Validators.compose([
            Validators.required
        ]));
        
        this.description = new Control(null, Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50)
        ]));
        
        this.insertForm = this._fb.group({
            'name': this.name,
            'price': this.price,
            'description': this.description
        });
    }

}