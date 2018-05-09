import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { PostComponent } from './post/post.component';
import { AllPostComponent } from './all-post/all-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', redirectTo: '/all-post', pathMatch: 'full' },
  { path: '', component: AllPostComponent },
  { path: 'character-detail/:id', component: CharacterDetailComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'help', component: HelpComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
