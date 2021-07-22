import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestgeneratorComponent } from './testgenerator/testgenerator.component';

@NgModule({
  declarations: [
    AppComponent,
    TestgeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
