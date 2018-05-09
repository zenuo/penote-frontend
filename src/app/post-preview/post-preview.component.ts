import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { MessageService } from '../message.service';
import { Post, Paragraph } from '../resources';
import { ParagraphService } from '../paragraph.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {

  @Input() post: Post

  paragraphs: Paragraph[] = []

  constructor(
    private postService: PostService,
    private messageService: MessageService,
    private paragraphService: ParagraphService
  ) { }

  ngOnInit() {
    this.paragraphService.get_list_by_post_id(this.post.id).subscribe(paragraphs => {
      if (paragraphs.length !== 0) {
        this.paragraphs = paragraphs
      }
    })
  }

}
