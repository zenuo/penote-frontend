import { Component, OnInit, Input } from '@angular/core';
import { Character, Constant, Paragraph } from '../resources';
import { CharacterService } from '../character.service';
import { ParagraphService } from '../paragraph.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  /**
   * 段落ID
   */
  @Input() id: string = 'dc3c1294-5d1c-45ce-888c-a0808abd7ede';
  /**
   * 段落实例
   */
  private paragraph: Paragraph = null;
  /**
   * 字符列表
   */
  private characters: Character[] = null;

  constructor(
    private characterService: CharacterService,
    private paragraphService: ParagraphService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    //获取段落实例
    this.paragraphService
      .get_by_id(this.id)
      .subscribe(para => {
        if (para !== null && para.id !== null) {
          this.paragraph = para
          //获取字符列表
          this.characterService
            .get_list_by_para_id(this.id)
            .subscribe(chars => {
              if (chars !== null && chars.length !== 0) {
                this.characters = chars
              }
            })
        } else {
          this.messageService.openSnackBar('段落', `获取${this.id}失败`)
        }
      })
  }
}
