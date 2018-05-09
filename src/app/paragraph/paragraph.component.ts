import { Component, OnInit, Input } from '@angular/core';
import { Character, Paragraph } from '../resources';
import { CharacterService } from '../character.service';
import { ParagraphService } from '../paragraph.service';
import { MessageService } from '../message.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  /**
   * 段落实例
   */
  @Input() paragraph: Paragraph
  /**
   * 字符列表
   */
  private characters: Character[] = null

  constructor(
    private characterService: CharacterService,
    private paragraphService: ParagraphService,
    private messageService: MessageService,
    private state: StateService
  ) { }

  ngOnInit() {
    //获取字符列表
    this.characterService   
      .get_list_by_para_id(this.paragraph.id)
      .subscribe(chars => {
        if (chars !== null && chars.length !== 0) {
          this.characters = chars
        }
      })
  }

  isSignin(): boolean {
    return this.state.sessionId !== null
  }

  delete(): void {
    let confirmed: boolean = confirm('确认删除此段落？')
    if (confirmed) {
      this.paragraphService.delete_by_id(this.paragraph.id).subscribe(ret => {
        if (ret) {
          this.messageService.openSnackBar('段落', `删除${this.paragraph.id}完成`)
          this.ngOnInit()
        }
      })
    }
  }
}
