import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudntsComponent } from './components/studnts/studnts.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudntsComponent,
    StudentDetailsComponent,
    HeaderComponent,
    NewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    /* Services */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
