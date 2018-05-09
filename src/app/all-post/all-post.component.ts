import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { MessageService } from '../message.service';
import { Post } from '../resources';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  posts: Post[] = []

  constructor(
    private postService: PostService,
    private messageService: MessageService
  ) {
    this.postService.get_all().subscribe(posts => {
      if (posts.length !== 0) {
        this.posts = posts
      }
    })
  }

  ngOnInit() {
  }

}
