import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { Constant } from './resources';
import { PostsComponent } from './posts/posts.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadService } from './file-upload.service';
import { CharacterComponent } from './character/character.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { SessionService } from './session.service';
import { MessageService } from './message.service';
import { RoutingModule } from './routing.module';
import { UserService } from './user.service';
import { NavbarComponent, SigninDialog, SignupDialog } from './navbar/navbar.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterService } from './character.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FileUploadComponent,
    CharacterComponent,
    ParagraphComponent,
    SigninDialog,
    NavbarComponent,
    SignupDialog,
    CharacterDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,//注意 RoutingModule 是最后一个
    FormsModule
  ],
  providers: [
    FileUploadService,
    Constant,
    SessionService,
    MessageService,
    UserService,
    CharacterService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SigninDialog,
    SignupDialog
  ]
})
export class AppModule { }
