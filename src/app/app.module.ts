import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { Constant } from './constants';
import { PostsComponent } from './posts/posts.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadService } from './file-upload.service';
import { CharacterComponent } from './character/character.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { SessionService } from './session.service';
import { SigninComponent, SigninDialog } from './signin/signin.component';
import { MessageService } from './message.service';
import { RoutingModule } from './routing.module';
import { UserService } from './user.service'


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FileUploadComponent,
    CharacterComponent,
    ParagraphComponent,
    SigninComponent,
    SigninDialog
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    FormsModule
  ],
  providers: [
    FileUploadService,
    Constant,
    SessionService,
    MessageService,
    UserService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SigninDialog]
})
export class AppModule { }
