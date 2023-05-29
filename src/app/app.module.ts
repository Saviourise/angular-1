// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Semantic UI
import { NgxSemanticModule } from 'ngx-semantic';
// Http request
import { HttpClientModule } from '@angular/common/http';
// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SuccesspageComponent } from './successpage/successpage.component';
import { FormpageComponent } from './formpage/formpage.component';

@NgModule({
  declarations: [AppComponent, SuccesspageComponent, FormpageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSemanticModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
