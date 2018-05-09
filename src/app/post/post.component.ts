import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { MessageService } from '../message.service';
import { Post, Paragraph } from '../resources';
import { ParagraphService } from '../paragraph.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() id: string = null

  post: Post = null

  paragraphs: Paragraph[] = []

  constructor(
    private postService: PostService,
    private pararaphService: ParagraphService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
    //获取ID
    this.id = this.route.snapshot.paramMap.get('id')
    //获取文章实例
    this.postService
      .get_by_id(this.id)
      .subscribe(post => {
        if (post !== null && post.id !== null) {
          this.post = post
          this.pararaphService
            .get_list_by_post_id(this.id)
            .subscribe(paraList => {
              if (paraList.length !== 0) {
                this.paragraphs = paraList
              }
            })
        }
      })
  }

  ngOnInit() {

  }
}
