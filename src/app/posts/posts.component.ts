import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paragraph } from '../resources';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private paragraphs: Paragraph[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const para_id = '5c0ffa84-427b-4638-9e45-d587b0cf711e';
    this.httpClient
      .get<Paragraph[]>(`api/paragraphs?id=${para_id}`)
      .subscribe(data => this.paragraphs = data);
  }
}
