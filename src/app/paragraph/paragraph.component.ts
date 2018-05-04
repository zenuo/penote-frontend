import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../resources';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  // 段落ID
  @Input() id: string;

  private characters: Character[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Character[]>(`/api/characters?para=${this.id}`).subscribe(data => this.characters = data);
  }

}
