import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ProductsListComponent, environment } from './app/'; // shortcut to /app/index.ts

if (environment.production) {
  enableProdMode();
}

bootstrap(ProductsListComponent);

