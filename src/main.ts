import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ProductsListComponent, environment } from './app/'; // shortcut to /app/index.ts
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(ProductsListComponent, [HTTP_PROVIDERS]);

