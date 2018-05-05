import { Component, OnInit, Input } from '@angular/core';
import { Character, Constant } from '../resources';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  // 段落ID
  @Input() id: string = "dc3c1294-5d1c-45ce-888c-a0808abd7ede";

  private characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService
      .get_list_by_para_id(this.id)
      .subscribe(chars => {
        if (chars !== null && chars.length !== 0) {
          this.characters = chars
        }
      })
  }
}
