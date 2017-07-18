import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticlesComponent } from './articles.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ArticlesComponent]
})
export class AppModule { }
