import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
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
import { ParagraphService } from './paragraph.service';
import { PostComponent } from './post/post.component';
import { PostService } from './post.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { AllPostComponent } from './all-post/all-post.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    ParagraphComponent,
    SigninDialog,
    NavbarComponent,
    SignupDialog,
    CharacterDetailComponent,
    FooterComponent,
    PostComponent,
    CreatePostComponent,
    AllPostComponent,
    PostPreviewComponent,
    HelpComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,//注意 RoutingModule 是最后一个
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FileUploadService,
    SessionService,
    MessageService,
    UserService,
    CharacterService,
    ParagraphService,
    PostService,
    StateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SigninDialog,
    SignupDialog
  ]
})
export class AppModule { }
