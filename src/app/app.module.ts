import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
  CommentComponent,
  CommentResolver,
  CommentsComponent,
  CommentsResolver,
  CommentsService,
  CommentRouteActivator,
  DetailedCommentComponent,
  NewCommentComponent
} from './comment/index'

import { AuthService } from './user/auth.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './error/404.component';
import { Helper } from './shared/helper';
import { NewSessionComponent } from './session/new-session.component';
import { SessionListComponent } from './session/session-list.component';

import { routes } from './routes';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CommentComponent,
    CommentsComponent,
    DetailedCommentComponent,
    Error404Component,
    NewCommentComponent,
    NewSessionComponent,
    SessionListComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    CommentsService,
    CommentRouteActivator,
    Helper,
    CommentResolver,
    CommentsResolver,
    { 
      provide: 'canDeactivateNewComment', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: NewCommentComponent) {
  if (component.isDirty) {
    return window.confirm('You have unsaved changes. Do you want to leave this page?');
  }
    return true;
}