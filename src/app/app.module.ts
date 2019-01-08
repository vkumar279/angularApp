import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routingModule} from './app.routing';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
