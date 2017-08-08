import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { routes } from './routes';
import { UsefulLinkComponent } from './useful-links/useful-link.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { UsefulLinksService } from './shared/useful-links.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsefulLinkComponent,
    UsefulLinksComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UsefulLinksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
