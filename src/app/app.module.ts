import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormValidatorsComponent } from './components/form-validators/form-validators.component';
import { FormComponent } from './components/form/form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormValidatorsComponent,
    FormComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
