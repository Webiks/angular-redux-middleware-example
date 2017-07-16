import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListControlComponent } from './list-control/list-control.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    ListControlComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
