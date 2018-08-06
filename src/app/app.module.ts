import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import {StudentService} from './student.service'

@NgModule({
  declarations: [
    AppComponent,
	StudentComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
